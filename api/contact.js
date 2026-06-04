const requiredFields = ["firstName", "lastName", "email", "phone", "subject", "message"];

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "object") return body;

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
};

const clean = (value) => String(value || "").trim();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const missing = requiredFields.filter((field) => !clean(body[field]));

  if (missing.length) {
    return res.status(400).json({ error: "Missing required fields", missing });
  }

  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({
      error: "Contact form email is not configured",
    });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const subject = clean(body.subject);
  const message = clean(body.message);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Website enquiry: ${subject}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text();
    return res.status(502).json({
      error: "Email provider rejected the request",
      details,
    });
  }

  return res.status(200).json({ ok: true });
}
