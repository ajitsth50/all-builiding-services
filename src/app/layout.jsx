import "../index.css";
import Script from "next/script";

const siteUrl = "https://www.allbuildingservices.com.au";
const businessName = "All Building & Property Services";
const defaultTitle = "Sydney Remedial & Strata Building Maintenance | ABPS";
const defaultDescription =
  "Remedial construction and property maintenance for Sydney Class 2 strata buildings — waterproofing, concrete repairs, leak detection and fire compliance.";
const defaultOgImage = "/og-image.png";
const googleAnalyticsId = "G-0YDMV0P2GZ";
const socialProfiles = [
  "https://www.facebook.com/allbuildingservices.com.au",
  "https://www.instagram.com/abps.sydney",
  "https://www.linkedin.com/company/all-building-and-property-services/",
];

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: businessName,
      alternateName: "ABPS",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      inLanguage: "en-AU",
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl}/#business`,
      name: businessName,
      alternateName: "ABPS",
      description: defaultDescription,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}${defaultOgImage}`,
      telephone: "+61272293522",
      email: "admin@allbuildingservices.com.au",
      priceRange: "$$",
      sameAs: socialProfiles,
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
        "Strata building maintenance",
        "Property maintenance",
        "Waterproofing",
        "Concrete repairs",
        "Leak detection",
        "Fire order compliance works",
      ],
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
