import Hero from "../components/Hero/Hero";
import Service from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Abouth from "../components/Hero/Abouth";
import Feedback from "../components/Subscribe/Feedback";
import Footer from "../components/Footer/Footer";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Service />
      <Banner />
      <Abouth />
      <Feedback />
      <Footer />
    </main>
  );
}
