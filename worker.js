export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let { pathname } = url;
    pathname = pathname.replace(/\/+$/, "") || "/";

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
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(user_id) REFERENCES users(id)
        )
      `).run();
      // 头像列（已存在则忽略）
      await env.DB.prepare("ALTER TABLE users ADD COLUMN avatar TEXT").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN created_at DATETIME").run().catch(()=>{});
      // 旧库 sessions 缺 token 列则重建
      try{ await env.DB.prepare("SELECT token, created_at FROM sessions LIMIT 1").run(); }catch(e){
        await env.DB.prepare("DROP TABLE IF EXISTS sessions").run();
        await env.DB.prepare(`
          CREATE TABLE sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            expires_at DATETIME NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
          )
        `).run();
      }
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS card_overrides (
          id INTEGER PRIMARY KEY,
          data TEXT NOT NULL,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

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
          // 显式带 created_at 兼容旧表 NOT NULL 无默认值的情况
          const r = await env.DB.prepare("INSERT INTO users (username, password_hash, created_at) VALUES (?,?, datetime('now'))").bind(username, hash).run();
          return json({ ok: true, id: r.meta.last_row_id }, cors);
        } catch (e) {
          const msg = String(e && e.message ? e.message : e);
          if(msg.includes("UNIQUE") || msg.includes("unique") ) return json({ error: "用户名已存在" }, cors, 409);
          return json({ error: "写入失败: "+msg }, cors, 500);
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
        await env.DB.prepare("INSERT INTO sessions (user_id, token, expires_at, created_at) VALUES (?,?,?, datetime('now'))").bind(user.id, token, expires).run();
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
      // 卡片覆盖 - 公开读（用于前端合并）
      if (pathname === "/api/cards" && request.method === "GET") {
        const r = await env.DB.prepare("SELECT * FROM card_overrides").all().catch(()=>({results:[]}));
        const list = (r.results||[]).map(x=>{ try{ return {id:x.id, data:JSON.parse(x.data), updated_at:x.updated_at}; }catch(e){ return null; } }).filter(Boolean);
        return json(list, cors);
      }

      // 管理：需 admin 用户
      if (pathname.startsWith("/api/admin/")) {
        const admin = await requireAdmin(request, env);
        if(!admin) return json({ error: "需要管理员权限，请用 admin 账号登录" }, cors, 403);
        if (pathname === "/api/admin/users" && request.method === "GET") {
          const r = await env.DB.prepare("SELECT u.id, u.username, u.avatar, u.created_at, (SELECT COUNT(*) FROM sessions s WHERE s.user_id=u.id) as session_count, (SELECT MAX(s.created_at) FROM sessions s WHERE s.user_id=u.id) as last_login FROM users u ORDER BY u.id").all();
          return json(r.results, cors);
        }
        if (pathname === "/api/admin/sessions" && request.method === "GET") {
          const r = await env.DB.prepare("SELECT s.id, s.user_id, u.username, s.token, s.created_at, s.expires_at, CAST((julianday(s.expires_at)-julianday(s.created_at))*86400 AS INTEGER) as duration_sec FROM sessions s JOIN users u ON u.id=s.user_id ORDER BY s.created_at DESC").all();
          return json(r.results, cors);
        }
        if (pathname === "/api/admin/card" && request.method === "GET") {
          const id = url.searchParams.get("id");
          if(id){
            const row = await env.DB.prepare("SELECT * FROM card_overrides WHERE id=?").bind(id).first();
            return json(row ? JSON.parse(row.data) : null, cors);
          }
          const r = await env.DB.prepare("SELECT * FROM card_overrides ORDER BY id").all();
          return json(r.results.map(x=>({id:x.id, data:JSON.parse(x.data), updated_at:x.updated_at})), cors);
        }
        if (pathname === "/api/admin/card" && request.method === "POST") {
          const { id, data } = await request.json();
          if(!id || !data) return json({ error: "id/data 必填" }, cors, 400);
          await env.DB.prepare("INSERT OR REPLACE INTO card_overrides (id, data, updated_at) VALUES (?,?, datetime('now'))").bind(Number(id), JSON.stringify(data)).run();
          return json({ ok: true }, cors);
        }
        if (pathname === "/api/admin/card" && request.method === "DELETE") {
          const id = url.searchParams.get("id");
          if(!id) return json({ error: "id 必填" }, cors, 400);
          await env.DB.prepare("DELETE FROM card_overrides WHERE id=?").bind(id).run();
          return json({ ok: true }, cors);
        }
        return json({ error: "admin not found" }, cors, 404);
      }

      if (pathname === "/api" ) {
        return json({ ok: true, msg: "JLPT API", routes: ["/api/register POST","/api/login POST","/api/me GET","/api/profile GET","/api/profile/password POST","/api/profile/avatar POST","/api/users GET","/api/sessions GET","/api/logout POST"] }, cors);
      }

      // 静态：/ 需 session 否则跳 /login.html，否则交给 ASSETS
      if (pathname === "/") {
        const token = getToken(request);
        let ok = false;
        if(token){
          const row = await env.DB.prepare("SELECT 1 FROM sessions s WHERE s.token=? AND s.expires_at > datetime('now')").bind(token).first().catch(()=>null);
          ok = !!row;
        }
        if(!ok) return Response.redirect(new URL("/login.html", request.url).toString(), 302);
        if(env.ASSETS) return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      }
      // 其他静态资源（/login.html /profile.html /index.html /data.js 等）走 ASSETS
      if(env.ASSETS){
        const assetRes = await env.ASSETS.fetch(request);
        if(assetRes.status !== 404) return assetRes;
      }
      return json({ error: "not found", path: pathname, hint: "可用 /api/* 或静态 /login.html" }, cors, 404);
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
async function requireAdmin(request, env){
  const token = getToken(request);
  if(!token) return null;
  const row = await env.DB.prepare("SELECT u.username FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at > datetime('now')").bind(token).first();
  return row && row.username === "admin" ? row : null;
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
