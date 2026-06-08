import PortfolioPage from "../../views/portfolio/PortfolioPage";

const title = "Strata & Remedial Project Portfolio Sydney | ABPS";
const description =
  "See completed Sydney remedial and strata projects by ABPS — waterproofing, concrete remediation, façade repairs and compliance works across NSW.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title,
    description,
    url: "/projects",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function ProjectsRoute() {
  return <PortfolioPage />;
}
