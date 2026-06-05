import BlogPage from "../../views/blog/BlogPage";

export const metadata = {
  title: "Resources & Documents",
  description:
    "Access All Building & Property Services documents and updates for clients, partners and project stakeholders.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogRoute() {
  return <BlogPage />;
}
