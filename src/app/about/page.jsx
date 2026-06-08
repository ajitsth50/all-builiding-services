import AboutPage from "../../views/about/AboutPage";

const title = "About ABPS | Sydney Remedial & Strata Specialists";
const description =
  "Meet All Building & Property Services — Sydney remedial and strata maintenance specialists delivering compliant, defect-free work for Class 2 buildings.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: [ogImage],
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
