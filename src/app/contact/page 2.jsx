import Contact from "../../views/contact/Contact";

const title = "Contact ABPS | Sydney Remedial & Strata Repairs";
const description =
  "Contact All Building & Property Services for Sydney strata, commercial and residential remedial works and urgent building repairs. Call +61 2 7229 3522.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "/contact",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function ContactRoute() {
  return <Contact />;
}
