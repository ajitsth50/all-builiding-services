const contactRequiredFields = ["firstName", "lastName", "email", "phone", "subject", "message"];
const quoteRequiredFields = ["name", "email", "address", "work_type", "building_type"];
const defaultFromEmail = "All Building & Property Services <onboarding@resend.dev>";
const resendTestRecipient = "ajitsth50@gmail.com";
const publicEmailDomains = [
  "gmail.com",
  "gamil.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com",
  "icloud.com",
];

const clean = (value) => String(value || "").trim();
const getEmailDomain = (value) => clean(value).match(/@([^>\s]+)>?$/)?.[1]?.toLowerCase();

const getSafeFromEmail = () => {
  const configuredFromEmail = clean(process.env.CONTACT_FROM_EMAIL);
  const domain = getEmailDomain(configuredFromEmail);

  if (!configuredFromEmail || publicEmailDomains.includes(domain)) {
    return defaultFromEmail;
  }

  return configuredFromEmail;
};

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const isQuoteRequest = clean(body.formType) === "quote";
  const requiredFields = isQuoteRequest ? quoteRequiredFields : contactRequiredFields;
  const missing = requiredFields.filter((field) => !clean(body[field]));

  if (missing.length) {
    return Response.json({ error: "Missing required fields", missing }, { status: 400 });
  }

  if (body.company) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const configuredToEmail = clean(process.env.CONTACT_TO_EMAIL);
  const fromEmail = getSafeFromEmail();
  const toEmail = fromEmail === defaultFromEmail ? resendTestRecipient : configuredToEmail;

  if (!apiKey || (!configuredToEmail && fromEmail !== defaultFromEmail)) {
    return Response.json({ error: "Contact form email is not configured" }, { status: 500 });
  }

  const email = clean(body.email);
  const emailSubject = isQuoteRequest
    ? "Website quote request"
    : `Website enquiry: ${clean(body.subject)}`;
  const messageLines = isQuoteRequest
    ? [
        `Name: ${clean(body.name)}`,
        `Email: ${email}`,
        `Project address: ${clean(body.address)}`,
        `Work type: ${clean(body.work_type)}`,
        `Building type: ${clean(body.building_type)}`,
        "",
        clean(body.message),
      ]
    : [
        `Name: ${clean(body.firstName)} ${clean(body.lastName)}`,
        `Email: ${email}`,
        `Phone: ${clean(body.phone)}`,
        `Subject: ${clean(body.subject)}`,
        "",
        clean(body.message),
      ];

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
      subject: emailSubject,
      text: messageLines.join("\n"),
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
