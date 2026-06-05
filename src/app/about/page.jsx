import AboutPage from "../../views/about/AboutPage";

export const metadata = {
  title: "About All Building & Property Services",
  description:
    "Learn about All Building & Property Services, a Sydney building maintenance and remedial construction team supporting residential, commercial and strata clients.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
