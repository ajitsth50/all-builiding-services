import crypto from "node:crypto";
import { createSession, getConfig, sameOrigin, sessionCookie, verifyPassword } from "../../../lib/tradeAuth";

export async function POST(request) {
  if (!sameOrigin(request)) return Response.json({ error: "Request origin was rejected" }, { status: 403 });
  try {
    const body = await request.json();
    const { email, passwordHash } = getConfig();
    const suppliedEmail = String(body.email || "").trim().toLowerCase();
    const validEmail = suppliedEmail.length === email.length && crypto.timingSafeEqual(Buffer.from(suppliedEmail), Buffer.from(email));
    const validPassword = verifyPassword(body.password, passwordHash);
    if (!validEmail || !validPassword) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return Response.json({ error: "Email or password is incorrect" }, { status: 401, headers: { "Cache-Control": "no-store" } });
    }
    return Response.json({ ok: true, email }, { headers: { "Set-Cookie": sessionCookie(createSession(email)), "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Trade login error", error.message);
    return Response.json({ error: "Secure login is not configured on this deployment" }, { status: 503 });
  }
}
