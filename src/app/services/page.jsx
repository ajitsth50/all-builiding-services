import ServicePage from "../../views/services/ServicePage";

export const metadata = {
  title: "Remedial Construction & Property Maintenance Services",
  description:
    "Explore Sydney remedial construction, waterproofing, fire order compliance, concrete repair, painting, plumbing, electrical and general property maintenance services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesRoute() {
  return <ServicePage />;
}
