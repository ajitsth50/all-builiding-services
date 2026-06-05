import Privacy from "../../views/terms/Privacy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for All Building & Property Services Pty Ltd, covering website enquiries, quote requests and service-related information handling.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyRoute() {
  return <Privacy />;
}
