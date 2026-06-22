import InvoiceTerms from "../../views/terms/InvoiceTerms";

export const metadata = {
  title: {
    absolute: "Terms & Conditions - Invoice | ABPS",
  },
  description:
    "Invoice terms for All Building & Property Services Pty Ltd, including payment, Security of Payment Act, GST, warranties and recovery costs.",
  alternates: {
    canonical: "/terms-invoice",
  },
};

export default function InvoiceTermsRoute() {
  return <InvoiceTerms />;
}
