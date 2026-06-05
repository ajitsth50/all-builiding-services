import InvoiceTerms from "../../views/terms/InvoiceTerms";

export const metadata = {
  title: "Terms & Conditions – Invoice",
  description:
    "Invoice terms and conditions for All Building & Property Services Pty Ltd, including payment, Security of Payment Act, GST, warranties, access and recovery costs.",
  alternates: {
    canonical: "/terms-invoice",
  },
};

export default function InvoiceTermsRoute() {
  return <InvoiceTerms />;
}
