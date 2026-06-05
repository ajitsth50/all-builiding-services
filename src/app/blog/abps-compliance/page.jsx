import BlogPost from "../../../views/blog/BlogPost";

export const metadata = {
  title: "ABPS Compliance Document",
  description:
    "View, download and share the All Building & Property Services compliance document for clients, partners and project stakeholders.",
  alternates: {
    canonical: "/blog/abps-compliance",
  },
};

export default function ComplianceRoute() {
  return <BlogPost />;
}
