import ServicePage from "../../views/services/ServicePage";

const title = "Remedial & Property Maintenance Services Sydney | ABPS";
const description =
  "Sydney remedial construction, waterproofing, concrete repair, leak detection, fire-order compliance and general property maintenance for strata & commercial.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: "/services",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function ServicesRoute() {
  return <ServicePage />;
}
