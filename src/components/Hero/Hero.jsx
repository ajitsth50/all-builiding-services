"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import "./HeroSlider.css";

const heroVideo = "/assets/home.mp4";

const Hero = () => {
  return (
    <section className="relative -mt-[92px] lg:-mt-[96px]">
      <Navbar />

      <div className="hero-slide relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="overlay z-10"></div>

        <div className="hero-content container mx-auto px-4 text-center text-white z-20 relative">
          <h3 className="text-lg uppercase tracking-widest font-medium mb-4 font-montserrat">
            Excellent Workmanship
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-montserrat">
            Building and Property Maintenance Solutions
          </h1>

          <p className="text-base md:text-lg max-w-xl mx-auto mb-8 font-source-sans">
            We pride ourselves in providing a variety of essential residential,
            commercial and strata property maintenance services at
            industry-leading prices.
          </p>

          <Link href="/services">
  <button className="bg-sky-500 hover:bg-green-300 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out group inline-flex items-center space-x-2 shadow-lg hover:shadow-xl">
    <span>View Services</span>
    <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
