import "../index.css";

const siteUrl = "https://www.allbuildingservices.com.au";
const businessName = "All Building & Property Services";
const defaultTitle = "Sydney Remedial & Strata Building Maintenance | ABPS";
const defaultDescription =
  "Remedial construction and property maintenance for Sydney Class 2 strata buildings — waterproofing, concrete repairs, leak detection and fire compliance.";
const defaultOgImage = "/og-image.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | All Building & Property Services",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: businessName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "All Building & Property Services Sydney remedial building maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
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
