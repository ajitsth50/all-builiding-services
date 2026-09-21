import { readSession } from "../../../lib/tradeAuth";

export async function GET(request) {
  try {
    const session = readSession(request);
    if (!session) return Response.json({ authenticated: false }, { status: 401, headers: { "Cache-Control": "no-store" } });
    return Response.json({ authenticated: true, email: session.email }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ authenticated: false, error: "Authentication is not configured" }, { status: 503 });
  }
}
