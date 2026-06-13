import Terms from "../../views/terms/Terms";

export const metadata = {
  title: "Terms & Conditions - Quote",
  description:
    "Terms and conditions for All Building & Property Services Pty Ltd quotations, works, exclusions, access, payment and compliance requirements.",
  alternates: {
    canonical: "/terms-quote",
  },
};

export default function TermsRoute() {
  return <Terms />;
}
