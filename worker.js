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
          closed_at DATETIME,
          last_active_at DATETIME,
          close_reason TEXT,
          user_agent TEXT,
          device TEXT,
          FOREIGN KEY(user_id) REFERENCES users(id)
        )
      `).run();
      // 迁移：旧表补列
      await env.DB.prepare("ALTER TABLE users ADD COLUMN avatar TEXT").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN created_at DATETIME").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN closed_at DATETIME").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN last_active_at DATETIME").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN close_reason TEXT").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN user_agent TEXT").run().catch(()=>{});
      await env.DB.prepare("ALTER TABLE sessions ADD COLUMN device TEXT").run().catch(()=>{});
      // 旧库 sessions 缺 token 列则重建
      try{ await env.DB.prepare("SELECT token, created_at, closed_at, last_active_at, close_reason, device FROM sessions LIMIT 1").run(); }catch(e){
        await env.DB.prepare("DROP TABLE IF EXISTS sessions").run();
        await env.DB.prepare(`
          CREATE TABLE sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            expires_at DATETIME NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            closed_at DATETIME,
            last_active_at DATETIME,
            close_reason TEXT,
            user_agent TEXT,
            device TEXT,
            FOREIGN KEY(user_id) REFERENCES users(id)
          )
        `).run();
      }
      // 补齐旧会话的 last_active_at = created_at
      await env.DB.prepare("UPDATE sessions SET last_active_at=created_at WHERE last_active_at IS NULL AND created_at IS NOT NULL").run().catch(()=>{});
      // 批量将已超 10 分钟不活跃但未关闭的会话标记为不活跃到期（closed_at = last_active +10min）
      await env.DB.prepare("UPDATE sessions SET closed_at=datetime(last_active_at, '+10 minutes'), close_reason='inactive' WHERE closed_at IS NULL AND close_reason IS NULL AND last_active_at IS NOT NULL AND datetime(last_active_at, '+10 minutes') <= datetime('now') AND expires_at > datetime('now')").run().catch(()=>{});
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS card_overrides (
          id INTEGER PRIMARY KEY,
          data TEXT NOT NULL,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // 调试查询：已收敛至管理员，前端已注释隐藏；直接调用亦需 admin
      if (pathname === "/api/users" && request.method === "GET") {
        const admin = await requireAdmin(request, env);
        if(!admin) return json({ error: "需要管理员权限，请用 admin 账号登录" }, cors, 403);
        const result = await env.DB.prepare("SELECT * FROM users").all();
        return json(result.results, cors);
      }
      if (pathname === "/api/sessions" && request.method === "GET") {
        const admin = await requireAdmin(request, env);
        if(!admin) return json({ error: "需要管理员权限，请用 admin 账号登录" }, cors, 403);
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
        const ua = request.headers.get("User-Agent") || "";
        const device = getDeviceFromRequest(request);
        await env.DB.prepare("INSERT INTO sessions (user_id, token, expires_at, created_at, last_active_at, user_agent, device) VALUES (?,?, datetime('now', '+24 hours'), datetime('now'), datetime('now'), ?, ?)").bind(user.id, token, ua, device).run();
        return json({ ok: true, token, user: { id: user.id, username: user.username } }, cors, 200, {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
        });
      }

      // 心跳/活跃上报：刷新 last_active_at，10分钟不活跃则终止
      if ((pathname === "/api/touch" || pathname === "/api/heartbeat" || pathname === "/api/session/touch") && request.method === "POST") {
        const token = getToken(request) || await getTokenFromBody(request, url);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const checked = await checkAndExpireSession(token, env);
        if (!checked || checked.closed) {
          // 已被标记为不活跃到期或已过期/已关闭
          if (checked && checked.reason === 'inactive') return json({ error: "会话已因不活跃到期，请重新登录", reason:"inactive" }, cors, 401);
          return json({ error: "未登录或会话已过期" }, cors, 401);
        }
        await env.DB.prepare("UPDATE sessions SET last_active_at=datetime('now') WHERE token=? AND closed_at IS NULL").bind(token).run();
        return json({ ok: true }, cors);
      }

      // 校验登录态（含头像）- 含不活跃检测
      if (pathname === "/api/me" && request.method === "GET") {
        const token = getToken(request);
        if (!token) return json({ user: null }, cors);
        const checked = await checkAndExpireSession(token, env);
        if (!checked || checked.closed) return json({ user: null }, cors);
        // 活跃则刷新
        await env.DB.prepare("UPDATE sessions SET last_active_at=datetime('now') WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
        const row = await env.DB.prepare("SELECT u.id, u.username, u.avatar, s.expires_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row || parseAsUTC(row.expires_at) < new Date()) return json({ user: null }, cors);
        return json({ user: { id: row.id, username: row.username, avatar: row.avatar || null } }, cors);
      }
      // 资料
      if (pathname === "/api/profile" && request.method === "GET") {
        const token = getToken(request);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const checked = await checkAndExpireSession(token, env);
        if (!checked || checked.closed) return json({ error: "会话已过期或因不活跃到期，请重新登录", reason: checked?.reason || "expired" }, cors, 401);
        await env.DB.prepare("UPDATE sessions SET last_active_at=datetime('now') WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
        const row = await env.DB.prepare("SELECT u.id, u.username, u.avatar, u.created_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row) return json({ error: "未登录" }, cors, 401);
        return json({ user: row }, cors);
      }
      // 改密码
      if (pathname === "/api/profile/password" && request.method === "POST") {
        const token = getToken(request);
        if (!token) return json({ error: "未登录" }, cors, 401);
        const checked = await checkAndExpireSession(token, env);
        if (!checked || checked.closed) return json({ error: "会话已过期或因不活跃到期，请重新登录" }, cors, 401);
        await env.DB.prepare("UPDATE sessions SET last_active_at=datetime('now') WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
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
        const checked = await checkAndExpireSession(token, env);
        if (!checked || checked.closed) return json({ error: "会话已过期或因不活跃到期，请重新登录" }, cors, 401);
        await env.DB.prepare("UPDATE sessions SET last_active_at=datetime('now') WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
        const row = await env.DB.prepare("SELECT u.id FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(token).first();
        if (!row) return json({ error: "未登录" }, cors, 401);
        let { avatar } = await request.json();
        avatar = String(avatar||"").trim();
        if(!avatar.startsWith("data:image/")) return json({ error: "头像需为 data:image/* base64" }, cors, 400);
        if(avatar.length > 280000) return json({ error: "头像过大，请 <200KB" }, cors, 400);
        await env.DB.prepare("UPDATE users SET avatar=? WHERE id=?").bind(avatar, row.id).run();
        return json({ ok: true }, cors);
      }

      // 登出（主动关闭，记关闭时间与原因）
      if (pathname === "/api/logout" && request.method === "POST") {
        const token = getToken(request);
        if (token) await env.DB.prepare("UPDATE sessions SET closed_at=datetime('now'), close_reason='active' WHERE token=? AND closed_at IS NULL").bind(token).run();
        return json({ ok: true }, cors, 200, { "Set-Cookie": `token=; Path=/; Max-Age=0` });
      }
      // 关闭网页上报（beforeunload/sendBeacon，支持 body/query 兜底） -> 主动关闭
      if (pathname === "/api/close" && request.method === "POST") {
        let token = getToken(request);
        if(!token){
          try{ const b=await request.clone().json(); token=b.token||b.t||null; }catch(e){}
        }
        if(!token) token = url.searchParams.get("token") || url.searchParams.get("t");
        if(token) await env.DB.prepare("UPDATE sessions SET closed_at=datetime('now'), close_reason='active' WHERE token=? AND closed_at IS NULL").bind(token).run();
        return json({ ok: true }, cors);
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
          // 确保不活跃已批量标记
          await env.DB.prepare("UPDATE sessions SET closed_at=datetime(last_active_at, '+10 minutes'), close_reason='inactive' WHERE closed_at IS NULL AND close_reason IS NULL AND last_active_at IS NOT NULL AND datetime(last_active_at, '+10 minutes') <= datetime('now') AND expires_at > datetime('now')").run().catch(()=>{});
          const r = await env.DB.prepare(`
            SELECT s.id, s.user_id, u.username, s.token, s.created_at, s.expires_at, s.closed_at, s.close_reason, s.last_active_at, s.device, s.user_agent,
            CASE
              WHEN s.close_reason='inactive' AND s.last_active_at IS NOT NULL THEN CAST((julianday(s.last_active_at)-julianday(s.created_at))*86400 AS INTEGER)
              WHEN s.closed_at IS NOT NULL THEN CAST((julianday(s.closed_at)-julianday(s.created_at))*86400 AS INTEGER)
              WHEN s.expires_at <= datetime('now') THEN CAST((julianday(s.expires_at)-julianday(s.created_at))*86400 AS INTEGER)
              ELSE CAST((julianday(COALESCE(s.last_active_at, datetime('now')))-julianday(s.created_at))*86400 AS INTEGER)
            END as duration_sec
            FROM sessions s JOIN users u ON u.id=s.user_id ORDER BY s.created_at DESC
          `).all();
          // 兼容旧数据 duration_sec 可能为负
          const rows = (r.results||[]).map(x=>({ ...x, duration_sec: Math.max(0, x.duration_sec||0) }));
          return json(rows, cors);
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
        return json({ ok: true, msg: "JLPT API", routes: ["/api/register POST","/api/login POST","/api/me GET","/api/profile GET","/api/profile/password POST","/api/profile/avatar POST","/api/users GET","/api/sessions GET","/api/logout POST","/api/touch POST"] }, cors);
      }

      // 静态：/ 需 session 否则跳 /login.html，否则交给 ASSETS
      if (pathname === "/") {
        const token = getToken(request);
        let ok = false;
        if(token){
          const checked = await checkAndExpireSession(token, env);
          if (checked && !checked.closed) {
            const row = await env.DB.prepare("SELECT 1 FROM sessions s WHERE s.token=? AND s.expires_at > datetime('now') AND s.closed_at IS NULL").bind(token).first().catch(()=>null);
            ok = !!row;
          }
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
async function getTokenFromBody(request, url){
  try{ const b=await request.clone().json(); if(b.token) return b.token; if(b.t) return b.t; }catch(e){}
  return url.searchParams.get("token") || url.searchParams.get("t") || null;
}
function getDevice(ua){
  // 兼容旧调用：仅 UA 时按 7 类细分
  return getDeviceFromUA(ua, null, null);
}
function getDeviceFromRequest(req){
  const ua = req.headers.get("User-Agent") || "";
  const chPlatform = req.headers.get("Sec-CH-UA-Platform") || req.headers.get("sec-ch-ua-platform") || "";
  const chMobile = req.headers.get("Sec-CH-UA-Mobile") || req.headers.get("sec-ch-ua-mobile") || "";
  return getDeviceFromUA(ua, chPlatform, chMobile);
}
function getDeviceFromUA(ua, chPlatform, chMobile){
  const s = String(ua||"");
  const platformHint = String(chPlatform||"").replace(/"/g,"").toLowerCase();
  const mobileHint = String(chMobile||"").toLowerCase(); // "?1" => mobile
  const isMobileHint = mobileHint.includes("?1") || mobileHint.includes("1");

  // 1) iPad 优先（UA 含 iPad；部分 iPadOS 伪装 Macintosh，需结合 touch+platform 兜底但以 UA 为主）
  if(/iPad/i.test(s)) return "iPad";
  // 2) iPhone
  if(/iPhone/i.test(s)) return "iPhone";
  // 3) Android 区分 Pad/Phone：Android + Mobile => Phone，否则 Pad
  if(/Android/i.test(s)){
    if(/Mobile/i.test(s)) return "AndroidPhone";
    return "AndroidPad";
  }
  // 4) Client Hints 辅助：平台为 Android/iOS 时的 Phone/Pad 区分
  if(platformHint){
    if(platformHint.includes("android")){
      return isMobileHint ? "AndroidPhone" : "AndroidPad";
    }
    if(platformHint.includes("ios")){
      // iOS 且非 iPad 已排除，剩余按 mobile 区分；CH 无法区分 Pad/Phone 时回退 UA，这里默认 iPhone
      return isMobileHint ? "iPhone" : "iPad";
    }
    if(platformHint.includes("windows")) return "WinPC";
    if(platformHint.includes("mac")) return "MacPC";
    if(platformHint.includes("linux") || platformHint.includes("chrome os") || platformHint.includes("cros")) return "LinuxPC";
  }
  // 5) PC 按 UA 细分：WinPC / MacPC / LinuxPC
  if(/Windows NT/i.test(s)) return "WinPC";
  if(/Macintosh/i.test(s)) return "MacPC";
  // CrOS / X11 / Linux（排除已处理的 Android）
  if(/CrOS/i.test(s) || /X11/i.test(s) || /Linux/i.test(s)) return "LinuxPC";
  if(/Mac OS X/i.test(s) && !/iPhone|iPad|iPod/i.test(s)) return "MacPC";
  // 6) 通用 Mobile 兜底（未命中 Android/iPhone 时）
  if(/Mobi|IEMobile|BlackBerry|Windows Phone/i.test(s) || isMobileHint) return "AndroidPhone";
  if(/Tablet/i.test(s)) return "AndroidPad";
  return "其他";
}
async function checkAndExpireSession(token, env){
  // 返回 {closed:boolean, reason:string|null, row:object|null}
  if(!token) return null;
  const row = await env.DB.prepare("SELECT id, created_at, expires_at, closed_at, close_reason, last_active_at FROM sessions WHERE token=?").bind(token).first();
  if(!row) return { closed: true, reason: 'notfound' };
  // 已主动/不活跃关闭
  if(row.closed_at) return { closed: true, reason: row.close_reason || 'active', row };
  // 24h 过期（无需显示终止时间，但视为 closed，时长按 expires）
  if(parseAsUTC(row.expires_at) < new Date()) return { closed: true, reason: 'expired', row };
  // 不活跃：10 分钟无操作 -> 标记为不活跃到期
  if(row.last_active_at){
    const last = parseAsUTC(row.last_active_at);
    if(last && (Date.now() - last.getTime()) > 10*60*1000){
      // 将 closed_at 设为 last_active +10min（有效时长不计这10分钟）
      await env.DB.prepare("UPDATE sessions SET closed_at=datetime(last_active_at, '+10 minutes'), close_reason='inactive' WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
      return { closed: true, reason: 'inactive', row };
    }
  } else if(row.created_at){
    const created = parseAsUTC(row.created_at);
    if(created && (Date.now() - created.getTime()) > 10*60*1000){
      await env.DB.prepare("UPDATE sessions SET closed_at=datetime(created_at, '+10 minutes'), close_reason='inactive', last_active_at=created_at WHERE token=? AND closed_at IS NULL").bind(token).run().catch(()=>{});
      return { closed: true, reason: 'inactive', row };
    }
  }
  return { closed: false, reason: null, row };
}
async function requireAdmin(request, env){
  const token = getToken(request);
  if(!token) return null;
  const checked = await checkAndExpireSession(token, env);
  if(checked && checked.closed) return null;
  const row = await env.DB.prepare("SELECT u.username FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires_at > datetime('now') AND s.closed_at IS NULL").bind(token).first();
  return row && row.username === "admin" ? row : null;
}
async function sha256(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function parseAsUTC(s){
  if(!s) return null;
  if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(s)) return new Date(s.replace(" ", "T")+"Z");
  return new Date(s);
}
function validateInput(username, password, isLogin=false){
  if(!username || !password) return "username/password 必填";
  if(username.length < 2 || username.length > 20) return "用户名 2-20 字符";
  if(password.length < 6 || password.length > 64) return "密码 6-64 字符";
  if(!/^[a-zA-Z0-9_\u4e00-\u9fa5-]+$/.test(username)) return "用户名仅允许字母数字_ - 中文";
  return null;
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m])); }
function json(data, cors, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors, ...extra },
  });
}
