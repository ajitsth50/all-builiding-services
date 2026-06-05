import Terms from "../../views/terms/Terms";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for All Building & Property Services Pty Ltd quotations, works, exclusions, access, payment and compliance requirements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsRoute() {
  return <Terms />;
}
