import React, { useEffect } from "react";
import { motion } from "framer-motion";



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
    description:
      "Specialist remedial construction and structural rectification for strata buildings, apartments, balconies, façades and concrete structures.",
    highlights: [
      "Concrete cancer repair & spalling restoration",
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
    description:
      "Detailed leak investigations and building diagnostics to identify the source, scope and rectification path with documented reports for owners corporations and strata managers.",
    highlights: [
      "Leak ingress detailed investigation with comprehensive written report",
      "Scope of works preparation for leak rectification",
      "Defect inspection reports — pre & post-handover",
      "Building condition assessments & reports",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Safety Works",
    image: safetyImg,
    description:
      "Essential safety upgrades and compliance rectification works to meet fire orders, AFSS requirements and Australian building standards.",
    highlights: [
      "Fire order works — including AFSS rectification & repairs",
      "Handrail & balustrade structural upgrades",
      "Pool surrounds & concourse repairs",
    ],
  },
  {
    id: "renovation",
    title: "Renovation & Fit-Out Services",
    image: renoImg,
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
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-[160px] opacity-40 -z-10" />

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

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 font-montserrat">
            Expert Property Maintenance by{" "}
            <span className="text-sky-700">
              All Building & Property Services
            </span>
          </h2>

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
              <img
                src={service.image}
                alt={service.title}
                className="w-full lg:w-[600px] h-[400px] object-cover object-center rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500 border border-gray-200"
              />

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
                  {service.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-sky-600 mt-1">✔</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
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