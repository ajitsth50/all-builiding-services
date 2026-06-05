import Contact from "../../views/contact/Contact";

export const metadata = {
  title: "Contact All Building & Property Services",
  description:
    "Contact All Building & Property Services for Sydney strata, commercial and residential remedial construction, property maintenance and urgent building repair enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactRoute() {
  return <Contact />;
}
