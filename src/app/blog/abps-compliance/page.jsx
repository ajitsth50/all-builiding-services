import BlogPost from "../../../views/blog/BlogPost";

const title = "ABPS Compliance Document";
const description =
  "View, download and share the All Building & Property Services compliance document for clients, partners and project stakeholders.";
const ogImage = "/og-image.png";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/abps-compliance",
  },
  openGraph: {
    title,
    description,
    url: "/blog/abps-compliance",
    type: "article",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function ComplianceRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    author: {
      "@type": "Organization",
      name: "All Building & Property Services",
    },
    publisher: {
      "@type": "Organization",
      name: "All Building & Property Services",
      logo: {
        "@type": "ImageObject",
        url: "https://www.allbuildingservices.com.au/logo.png",
      },
    },
    mainEntityOfPage: "https://www.allbuildingservices.com.au/blog/abps-compliance",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPost />
    </>
  );
}
