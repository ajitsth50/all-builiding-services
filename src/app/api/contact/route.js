const requiredFields = ["firstName", "lastName", "email", "phone", "subject", "message"];

const clean = (value) => String(value || "").trim();

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const missing = requiredFields.filter((field) => !clean(body[field]));

  if (missing.length) {
    return Response.json({ error: "Missing required fields", missing }, { status: 400 });
  }

  if (body.company) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return Response.json({ error: "Contact form email is not configured" }, { status: 500 });
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
    return Response.json(
      {
        error: "Email provider rejected the request",
        details,
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
