import PortfolioPage from "../../views/portfolio/PortfolioPage";

export const metadata = {
  title: "Project Gallery",
  description:
    "View completed All Building & Property Services projects including fencing, waterproofing, concrete works, carpentry, remedial repairs and property maintenance across Sydney.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsRoute() {
  return <PortfolioPage />;
}
