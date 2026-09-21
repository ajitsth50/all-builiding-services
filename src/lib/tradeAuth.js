import crypto from "node:crypto";

export const COOKIE_NAME = "abs_trade_session";
const SESSION_TTL_SECONDS = 8 * 60 * 60;
const encode = (value) => Buffer.from(value).toString("base64url");
const decode = (value) => Buffer.from(value, "base64url").toString("utf8");

export function getConfig() {
  const email = String(process.env.TRADE_ADMIN_EMAIL || "").trim().toLowerCase();
  const passwordHash = String(process.env.TRADE_ADMIN_PASSWORD_HASH || "");
  const sessionSecret = String(process.env.TRADE_SESSION_SECRET || "");
  if (!email || !passwordHash || sessionSecret.length < 48) throw new Error("Trade portal authentication is not configured.");
  return { email, passwordHash, sessionSecret };
}

export function verifyPassword(password, stored) {
  const [iterationsText, salt, expectedHex] = stored.split(":");
  const iterations = Number(iterationsText);
  if (!iterations || !salt || !/^[a-f0-9]{64}$/i.test(expectedHex)) return false;
  const actual = crypto.pbkdf2Sync(String(password || ""), salt, iterations, 32, "sha256");
  const expected = Buffer.from(expectedHex, "hex");
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

const sign = (value, secret) => crypto.createHmac("sha256", secret).update(value).digest("base64url");
export function createSession(email) {
  const { sessionSecret } = getConfig();
  const payload = encode(JSON.stringify({ email, exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS }));
  return `${payload}.${sign(payload, sessionSecret)}`;
}

export function readSession(request) {
  const { sessionSecret, email } = getConfig();
  const cookies = Object.fromEntries(String(request.headers.get("cookie") || "").split(";").map((part) => part.trim().split("=")).filter(([key]) => key));
  const token = cookies[COOKIE_NAME];
  if (!token) return null;
  const [payload, suppliedSignature] = token.split(".");
  if (!payload || !suppliedSignature) return null;
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(sign(payload, sessionSecret));
  if (supplied.length !== expected.length || !crypto.timingSafeEqual(supplied, expected)) return null;
  try {
    const session = JSON.parse(decode(payload));
    if (session.email !== email || session.exp <= Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch { return null; }
}

export function sessionCookie(token, maxAge = SESSION_TTL_SECONDS) {
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

export function sameOrigin(request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try { return new URL(origin).host === host; } catch { return false; }
}
