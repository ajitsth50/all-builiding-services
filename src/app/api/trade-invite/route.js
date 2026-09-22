import { readSession } from "../../../lib/tradeAuth";

const clean = (value) => String(value || "").trim();

export async function POST(request) {
  if (!readSession(request)) return Response.json({ error: "Unauthorised" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const company = clean(body.company);
  const contact = clean(body.contact);
  const email = clean(body.email);
  const trade = clean(body.trade);
  if (!company || !contact || !email || !trade || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Company, contact, trade and valid email are required" }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ queued: true, error: "Email provider is not configured" }, { status: 503 });
  const from = process.env.CONTACT_FROM_EMAIL || "All Building and Property Services Pty Ltd <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [email], reply_to: process.env.CONTACT_TO_EMAIL || "admin@allbuildingservices.com.au", subject: `Invitation to the ABPS Trade Portal — ${company}`, text: [`Hi ${contact},`, "", `All Building and Property Services Pty Ltd has added ${company} (${trade}) to its subcontractor network.`, "", "You will receive work-order and quotation invitations through the Trade Portal. Please contact the project administrator if you need help accessing a response link.", "", "All Building and Property Services Pty Ltd"].join("\n") }) });
  if (!response.ok) return Response.json({ error: "Email provider rejected the invitation" }, { status: 502 });
  return Response.json({ ok: true });
}
