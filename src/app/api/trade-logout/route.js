import { sameOrigin, sessionCookie } from "../../../lib/tradeAuth";

export async function POST(request) {
  if (!sameOrigin(request)) return Response.json({ error: "Request origin was rejected" }, { status: 403 });
  return Response.json({ ok: true }, { headers: { "Set-Cookie": sessionCookie("", 0), "Cache-Control": "no-store" } });
}
