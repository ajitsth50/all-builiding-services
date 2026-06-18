"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



import remedialImg from "../../assets/services/remedial-services.jpg"
import leakImg from "../../assets/services/leak-detection.png";


import safetyImg from "../../assets/services/compliance-safety.png";
import renoImg from "../../assets/Renovation.png";
import handyImg from "../../assets/General Maintenance.png";

const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay,
      ease: "easeInOut",
    },
  },
});

const services = [
  {
    id: "remedial",
    title: "Remedial Services",
    image: remedialImg,
    imageFit: "cover",
    description:
      "Specialist remedial construction and structural rectification for strata buildings, apartments, balconies, façades and concrete structures.",
    highlights: [
      "Concrete cancer repair & spalling restoration",
      "Magnesite removal",
      "Balcony & podium deck structural repairs",
      "Façade & cladding repairs / restoration",
      "Balcony & terrace waterproofing",
      "Basement & carpark waterproofing",
      "Wet area waterproofing — bathrooms & laundries",
      "Roof & planter box waterproofing",
      "Below-slab drainage remediation",
      "External render repairs & re-rendering",
      "Window frame sealing & glazing remediation",
      "Brick & masonry repointing",
      "Crack stitching & structural crack repairs",
      "High-rise rope access façade inspections & repairs",
    ],
  },
  {
    id: "leak-detection",
    title: "Leak Detection & Reporting",
    image: leakImg,
    imageFit: "contain",
    description:
      "Detailed leak investigations and building diagnostics to identify the source, scope and rectification path with documented reports for owners corporations and strata managers.",
    highlights: [
      "Leak ingress detailed investigation with comprehensive written report",
      "Borescope camera investigation",
      "Water hose & dye testing",
      "Moisture mapping",
      "Scope of works preparation for leak rectification",
      "Defect inspection reports — pre & post-handover",
      "Building condition assessments & reports",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Safety Works",
    image: safetyImg,
    imageFit: "contain",
    description:
      "Essential safety upgrades and compliance rectification works to meet fire orders, AFSS requirements and Australian building standards.",
    highlights: [
      { heading: "Fire & Passive Fire" },
      "Fire Order & AFSS Rectification Works",
      "Fire-Rated Penetration Sealing & Fire Collars",
      "Fire & Smoke Door Remediation",
      "Fire-Rated Wall & Ceiling Reinstatement",
      { heading: "Barriers & Balustrades" },
      "Balustrade & Barrier Upgrades to NCC 2022",
      "Handrail Structural Repairs & Replacement",
      { heading: "Access & Wet Areas" },
      "Pool Surround & Concourse Repairs",
      "Accessibility Upgrades (Ramps, Handrails, Thresholds)",
      { heading: "Hazardous Materials" },
      "Asbestos Make-Safe & Licensed Removal Coordination",
      "Essential Safety Measure Rectification",
    ],
  },
  {
    id: "renovation",
    title: "Renovation & Fit-Out Services",
    image: renoImg,
    imageFit: "contain",
    description:
      "Design-led renovations and full fit-outs for apartments, common areas and commercial spaces — delivered to standard, on schedule, and compliant with strata and building regulations.",
    highlights: [
      "Complete bathroom renovations — waterproofing, tiling, plumbing & finishes",
      "Kitchen makeovers & full kitchen replacements",
      "Apartment refurbishments & end-of-lease restorations",
      "Strata common area upgrades — foyers, corridors, lift lobbies & entryways",
      "Carpentry, joinery & custom built-in installations",
      "Tiling, flooring & timber floor installations",
      "Painting, plastering & decorative finishes",
      "Lighting upgrades & electrical fit-out coordination",
      "Project management & trade coordination for multi-stage works",
      "Design-driven finishes meeting compliance & safety standards",
    ],
  },
  {
    id: "maintenance",
    title: "General Maintenance & Handyman Services",
    image: handyImg,
    imageFit: "contain",
    description:
      "Reliable, on-call maintenance and handyman services for apartment buildings, strata complexes and owners corporations — keeping common areas safe, functional and well-presented.",
    highlights: [
      "Door, window & sliding door repairs and adjustments",
      "Gyprock & damaged wall repairs",
      "Fly screen installation, aluminium & tile repairs",
      "Decking, pergola & balcony maintenance",
      "Lock changes, hardware replacement & access repairs",
      "Common area light fitting & globe replacements",
      "Letterbox, signage & directory board repairs",
      "Carpark line marking touch-ups & bollard repairs",
      "Minor carpentry, skirting & architrave repairs",
      "General property repairs & ad-hoc maintenance call-outs",
    ],
  },
];

const scrollToHash = () => {
  const hash = window.location.hash;

  if (hash) {
    const el = document.getElementById(hash.substring(1));

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }
};

const ServiceItems = () => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[180px] opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-100 rounded-full blur-[160px] opacity-40 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          animate="animate"
          className="mb-24"
        >
          <span className="inline-block bg-sky-500 text-white text-3xl sm:text-4xl font-semibold uppercase px-6 py-2 rounded-full tracking-wider shadow-md mb-4 font-montserrat">
            Our Services
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 font-montserrat">
            Expert Property Maintenance by{" "}
            <span className="text-sky-700">
              All Building & Property Services
            </span>
          </h1>

          <div className="w-32 h-1 bg-sky-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-20">
          {services.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.id}
              variants={FadeUp(0.4 + index * 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 lg:gap-20 text-left group`}
            >
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 shadow-xl sm:h-80 lg:h-[400px] lg:w-[600px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 600px"
                  className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                    service.imageFit === "contain"
                      ? "object-contain p-2"
                      : "object-cover object-center"
                  }`}
                />
              </div>

              <div className="max-w-xl text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight font-montserrat">
                  <span className="border-l-4 border-sky-500 pl-4 block">
                    {service.title}
                  </span>
                </h3>

                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed font-source-sans">
                  {service.description}
                </p>

                <ul className="text-left space-y-3 text-gray-800 font-medium text-base font-source-sans">
                  {service.highlights.map((item, idx) =>
                    item.heading ? (
                      <li
                        key={item.heading}
                        className="pt-4 text-sm font-bold uppercase tracking-wider text-sky-800 first:pt-0"
                      >
                        {item.heading}
                      </li>
                    ) : (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <span className="text-sky-600 mt-1">✔</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
