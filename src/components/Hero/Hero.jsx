"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaClipboardCheck, FaHelmetSafety, FaPhone } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import "./HeroSlider.css";

const heroVideo = "/assets/home.mp4";

const proofPoints = [
  "Commercial",
  "Strata",
  "Remedial",
  "Compliance",
];

const Hero = () => {
  return (
    <section className="relative bg-gray-950">
      <Navbar />

      <div className="relative min-h-[calc(100dvh-80px)] overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/78 to-gray-950/28" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950/45 via-transparent to-gray-950/10" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-white via-white/55 to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-80px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-100 backdrop-blur">
              Excellent Workmanship
            </p>

            <h1 className="mt-6 max-w-3xl font-montserrat text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Building and Property Maintenance Solutions
            </h1>

            <p className="mt-6 max-w-3xl font-sourceSans text-xl leading-9 text-gray-100 sm:text-2xl">
              We pride ourselves in providing a variety of essential residential,
              commercial and strata property maintenance services at
              industry-leading prices.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-sky-600 px-6 py-3 font-sourceSans text-base font-bold text-white shadow-lg shadow-sky-950/20 transition duration-200 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                View Services
                <IoIosArrowRoundForward className="text-2xl" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 font-sourceSans text-base font-bold text-white backdrop-blur transition duration-200 hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                <FaPhone className="text-sm" />
                Contact
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-md border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                  <div className="text-base font-bold text-white">{point}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:grid-cols-3">
          {[
            [FaHelmetSafety, "Specialist trade teams", "Remedial, waterproofing, maintenance and compliance delivery."],
            [FaClipboardCheck, "Reporting and documentation", "Leak investigations, defect reports and building condition assessments."],
            [FaPhone, "Responsive service", "Emergency works and planned maintenance across Sydney."],
          ].map(([Icon, title, body]) => (
            <div key={title} className="flex gap-3 rounded-md px-3 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <Icon />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-950">{title}</h2>
                <p className="mt-1 text-base leading-7 text-gray-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
