export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    // CORS
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    try {
      if(!env.DB) return json({error:"DB 未绑定：wrangler.toml 需 [[d1_databases]] binding=\"DB\" database_name=\"jlpt-db\" 且 database_id 正确；先 wrangler d1 create jlpt-db / wrangler d1 list"}, cors, 500);
      // 初始化表（首次访问自动建表）
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS sessions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          token TEXT UNIQUE NOT NULL,
          expires_at DATETIME NOT NULL,
          FOREIGN KEY(user_id) REFERENCES users(id)
        )
      `).run();
      // 头像列（已存在则忽略）
      await env.DB.prepare("ALTER TABLE users ADD COLUMN avatar TEXT").run().catch(()=>{});

      // 你给的查询：列出全部
      if (pathname === "/api/users" && request.method === "GET") {
        const result = await env.DB.prepare("SELECT * FROM users").all();
        return json(result.results, cors);
      }
      if (pathname === "/api/sessions" && request.method === "GET") {
        const result = await env.DB.prepare("SELECT * FROM sessions").all();
        return json(result.results, cors);
      }

      // 注册（限量 + 防注入/校验）
      if (pathname === "/api/register" && request.method === "POST") {
        const MAX_USERS = 5;
        let { username, password } = await request.json();
        username = String(username||"").trim(); password = String(password||"");
        const err = validateInput(username, password);
        if (err) return json({ error: err }, cors, 400);
        const cnt = await env.DB.prepare("SELECT COUNT(*) as c FROM users").first();
        if (cnt && cnt.c >= MAX_USERS) return json({ error: `注册已满（上限 ${MAX_USERS}），请通知🐴✨` }, cors, 403);
        const hash = await sha256(password);
        try {
          // prepare+bind 已参数化，杜绝 SQL 注入
          const r = await env.DB.prepare("INSERT INTO users (username, password_hash) VALUES (?,?)").bind(username, hash).run();
          return json({ ok: true, id: r.meta.last_row_id }, cors);
        } catch (e) {
          return json({ error: "用户名已存在" }, cors, 409);
        }
      }

      // 登录 -> 建 session（同校验）
      if (pathname === "/api/login" && request.method === "POST") {
        let { username, password } = await request.json();
        username = String(username||"").trim(); password = String(password||"");
        const err = validateInput(username, password, true);
        if (err) return json({ error: err }, cors, 400);
        const hash = await sha256(password);
        const user = await env.DB.prepare("SELECT * FROM users WHERE username=? AND password_hash=?").bind(username, hash).first();
        if (!user) return json({ error: "账号或密码错误" }, cors, 401);
        const token = crypto.randomUUID();
        const expires = new Date(Date.now() + 7 * 86400000).toISOString(); // 7天
        await env.DB.prepare("INSERT INTO sessions (user_id, token, expires_at) VALUES (?,?,?)").bind(user.id, token, expires).run();
        return json({ ok: true, token, user: { id: user.id, username: user.username } }, cors, 200, {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`,
        });
      }

      // 校验登录态（含头像）
      if (pathname === "/api/me" && request.method === "GET") {
        const token = getToken(request);
        if (!token) return json({ user: null }, cors);
        const row = await env.DB.prepare("SELECT u.id, u.username, u.avatar, s.expires_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row || new Date(row.expires_at) < new Date()) return json({ user: null }, cors);
        return json({ user: { id: row.id, username: row.username, avatar: row.avatar || null } }, cors);
      }
      // 资料
      if (pathname === "/api/profile" && request.method === "GET") {
        const token = getToken(request);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const row = await env.DB.prepare("SELECT u.id, u.username, u.avatar, u.created_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row) return json({ error: "未登录" }, cors, 401);
        return json({ user: row }, cors);
      }
      // 改密码
      if (pathname === "/api/profile/password" && request.method === "POST") {
        const token = getToken(request);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const row = await env.DB.prepare("SELECT u.id, u.password_hash FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row) return json({ error: "未登录" }, cors, 401);
        let { oldPassword, newPassword } = await request.json();
        oldPassword = String(oldPassword||""); newPassword = String(newPassword||"");
        if(newPassword.length < 6 || newPassword.length > 64) return json({ error: "新密码 6-64 字符" }, cors, 400);
        const oldHash = await sha256(oldPassword);
        if(oldHash !== row.password_hash) return json({ error: "原密码错误" }, cors, 400);
        const newHash = await sha256(newPassword);
        await env.DB.prepare("UPDATE users SET password_hash=? WHERE id=?").bind(newHash, row.id).run();
        return json({ ok: true }, cors);
      }
      // 上传头像（data URL base64，限 200KB）
      if (pathname === "/api/profile/avatar" && request.method === "POST") {
        const token = getToken(request);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const row = await env.DB.prepare("SELECT u.id FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row) return json({ error: "未登录" }, cors, 401);
        let { avatar } = await request.json();
        avatar = String(avatar||"").trim();
        if(!avatar.startsWith("data:image/")) return json({ error: "头像需为 data:image/* base64" }, cors, 400);
        if(avatar.length > 280000) return json({ error: "头像过大，请 <200KB" }, cors, 400);
        await env.DB.prepare("UPDATE users SET avatar=? WHERE id=?").bind(avatar, row.id).run();
        return json({ ok: true }, cors);
      }

      // 登出
      if (pathname === "/api/logout" && request.method === "POST") {
        const token = getToken(request);
        if (token) await env.DB.prepare("DELETE FROM sessions WHERE token=?").bind(token).run();
        return json({ ok: true }, cors, 200, { "Set-Cookie": `token=; Path=/; Max-Age=0` });
      }

      return json({ error: "not found" }, cors, 404);
    } catch (e) {
      return json({ error: String(e) }, cors, 500);
    }
  },
};

function getToken(req) {
  const auth = req.headers.get("Authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  const cookie = req.headers.get("Cookie") || "";
  const m = cookie.match(/token=([^;]+)/);
  return m ? m[1] : null;
}
async function sha256(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function validateInput(username, password, isLogin=false){
  if(!username || !password) return "username/password 必填";
  if(username.length < 2 || username.length > 20) return "用户名 2-20 字符";
  if(password.length < 6 || password.length > 64) return "密码 6-64 字符";
  if(!/^[a-zA-Z0-9_\u4e00-\u9fa5-]+$/.test(username)) return "用户名仅允许字母数字_ - 中文";
  // 登录时不强制复杂度，注册时可加；此处统一放行
  return null;
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m])); }
function json(data, cors, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors, ...extra },
  });
}
