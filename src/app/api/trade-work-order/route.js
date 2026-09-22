import { readSession } from "../../../lib/tradeAuth";

export const runtime = "nodejs";

const clean = (value) => String(value || "").trim();
const pdfEscape = (value) => clean(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E]/g, "-");

function makePdf(lines) {
  const content = [
    "q 0.06 0.16 0.29 rg 50 738 58 42 re f Q",
    "BT /F1 20 Tf 61 751 Td 1 0 0 1 0 0 Tm (ABPS) Tj ET",
    "BT /F1 14 Tf 122 763 Td (All Building and Property Services) Tj /F1 9 Tf 0 -14 Td (PTY LTD) Tj ET",
    "0.78 w 50 725 m 562 725 l S",
    "BT /F1 18 Tf 50 690 Td",
    `(${pdfEscape(lines[1])}) Tj`,
    "/F1 11 Tf",
    ...lines.slice(2).map(line => `0 -24 Td (${pdfEscape(line)}) Tj`),
    "ET"
  ].join("\n");
  const objects = ["<< /Type /Catalog /Pages 2 0 R >>", "<< /Type /Pages /Kids [3 0 R] /Count 1 >>", "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>", `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => { offsets[index + 1] = Buffer.byteLength(pdf); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map(offset => `${String(offset).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

export async function GET(request) {
  if (!readSession(request)) return new Response("Unauthorised", { status: 401 });
  const url = new URL(request.url);
  const ref = clean(url.searchParams.get("ref")) || "Work order";
  const lines = ["All Building and Property Services Pty Ltd", ref, `Work order: ${url.searchParams.get("title") || "-"}`, `Site: ${url.searchParams.get("site") || "-"}`, `Subcontractor: ${url.searchParams.get("company") || "-"}`, `Status: ${url.searchParams.get("status") || "-"}`, `Due: ${url.searchParams.get("due") || "-"}`, "", "Scope and site instructions:", url.searchParams.get("instructions") || "No instructions provided."];
  return new Response(makePdf(lines), { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${ref.replace(/[^A-Za-z0-9_-]/g, "_")}.pdf"`, "Cache-Control": "no-store" } });
}

export async function POST(request) {
  if (!readSession(request)) return Response.json({ error: "Unauthorised" }, { status: 401 });
  const body = await request.json().catch(() => ({}));
  const email = clean(body.contractorEmail);
  if (!email) return Response.json({ queued: true, error: "No subcontractor email is saved" }, { status: 422 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ queued: true, error: "Email provider is not configured" }, { status: 503 });
  const from = "All Building and Property Services Pty Ltd <admin@allbuildingservices.com.au>";
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [email], reply_to: process.env.CONTACT_TO_EMAIL || "admin@allbuildingservices.com.au", subject: `Work order ${clean(body.ref)} — ${clean(body.title)}`, text: [`Hi ${clean(body.company)},`, "", `A new work order has been issued by All Building and Property Services Pty Ltd.`, `Reference: ${clean(body.ref)}`, `Site: ${clean(body.site)}`, `Due: ${clean(body.due)}`, "", "Please use the response link in the portal invitation to accept or decline the work order.", "", clean(body.instructions)].join("\n") }) });
  if (!response.ok) return Response.json({ error: "Email provider rejected the work-order notification" }, { status: 502 });
  return Response.json({ ok: true });
}
