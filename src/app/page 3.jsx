import Hero from "../components/Hero/Hero";
import Service from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Abouth from "../components/Hero/Abouth";
import Feedback from "../components/Subscribe/Feedback";
import Footer from "../components/Footer/Footer";

const homeTitle = "Sydney Remedial & Strata Building Maintenance | ABPS";
const homeDescription =
  "Remedial construction and property maintenance for Sydney Class 2 strata buildings — waterproofing, concrete repairs, leak detection and fire compliance.";
const ogImage = "/og-image.png";

export const metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
    images: [ogImage],
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.allbuildingservices.com.au/#business",
  name: "All Building & Property Services",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.85",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "20",
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Hero />
      <Service />
      <Banner />
      <Abouth />
      <Feedback />
      <Footer />
    </main>
  );
}
