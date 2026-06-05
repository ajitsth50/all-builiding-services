import "../index.css";

const siteUrl = "https://www.allbuildingservices.com.au";
const businessName = "All Building & Property Services";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sydney Remedial Construction & Property Maintenance | All Building & Property Services",
    template: "%s | All Building & Property Services",
  },
  description:
    "All Building & Property Services provides Sydney remedial construction, property maintenance, waterproofing, concrete repairs and fire order compliance works.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: businessName,
    title: "Sydney Remedial Construction & Property Maintenance | All Building & Property Services",
    description:
      "Sydney remedial construction and property maintenance for strata, commercial and residential buildings.",
  },
  twitter: {
    card: "summary",
    title: "Sydney Remedial Construction & Property Maintenance | All Building & Property Services",
    description:
      "Sydney remedial construction and property maintenance for strata, commercial and residential buildings.",
  },
  icons: {
    icon: "/logo.png",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: businessName,
  url: siteUrl,
  telephone: "+61272293522",
  email: "admin@allbuildingservices.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 1, 63-73 Ann Street",
    addressLocality: "Surry Hills",
    addressRegion: "NSW",
    postalCode: "2010",
    addressCountry: "AU",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Sydney",
    },
    {
      "@type": "AdministrativeArea",
      name: "New South Wales",
    },
  ],
  serviceType: [
    "Remedial construction",
    "Property maintenance",
    "Waterproofing",
    "Concrete repairs",
    "Fire order compliance works",
    "Strata maintenance",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
