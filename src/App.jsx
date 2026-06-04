import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";

import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/about/AboutPage";  // Matching the exact file name
import Contact from './pages/contact/Contact'

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"; // Import Router and related components
import 'aos/dist/aos.css';
import AOS from 'aos';
import ServicePage from "./pages/services/ServicePage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import Clients from "./components/Hero/Clients";
import AboutHero from "./components/Hero/AboutHero";
import Abouth from "./components/Hero/Abouth";
import Feedback from "./components/Subscribe/Feedback"
import Privacy from "./pages/terms/Privacy";
import Terms from "./pages/terms/Terms";
import BlogPage from "./pages/blog/BlogPage";
import BlogPost from "./pages/blog/BlogPost";
import Service from './components/Services/Services'

import Servicehero from "./components/Services/Servicehero";
// import WhyUs from "./components/Services/WhyUs";

AOS.init();

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
             
            
              <Service />
              <Banner />
              <Abouth/>
              <Feedback/>
             
              {/* <Banner2 />
              <Subscribe /> */}
         
              <Footer />
            </>
          } />
          
          {/* Add About Us route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          

          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/abps-compliance" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
        </Routes>
      </main>
    </Router>
  );
};

export default App;
