import React from "react";
import { Helmet } from "react-helmet";

export const SITE_URL = "https://www.allbuildingservices.com.au";
export const BUSINESS_NAME = "All Building & Property Services";
export const PHONE_DISPLAY = "02 7229 3522";
export const PHONE_E164 = "+61272293522";
export const EMAIL = "admin@allbuildingservices.com.au";
export const ADDRESS = {
  streetAddress: "Level 1, 63-73 Ann Street",
  addressLocality: "Surry Hills",
  addressRegion: "NSW",
  postalCode: "2010",
  addressCountry: "AU",
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    ...ADDRESS,
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

const defaultDescription =
  "All Building & Property Services provides remedial construction, property maintenance, waterproofing, concrete repairs and fire order compliance works across Sydney.";

const Seo = ({
  title = `${BUSINESS_NAME} | Sydney Remedial Construction & Property Maintenance`,
  description = defaultDescription,
  path = "/",
  image,
  schema,
}) => {
  const canonical = `${SITE_URL}${path}`;
  const pageTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`;

  const schemas = [businessSchema, schema].filter(Boolean);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
};

export default Seo;
