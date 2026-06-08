import BlogPage from "../../views/blog/BlogPage";

const title = "Strata Building Resources & Guides | ABPS Sydney";
const description =
  "Guides on strata remedial works, building defects, waterproofing and NSW compliance for owners corporations and strata managers in Sydney.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function BlogRoute() {
  return <BlogPage />;
}
