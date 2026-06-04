import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import remedialImg from "../../assets/services/remedial-services.jpg"
import leakImg from "../../assets/services/leak-detection.png";
import complianceImg from "../../assets/services/compliance-safety.png";

const services = [
  {
    title: "Remedial Services",
    image: remedialImg,
    items: [
      "Concrete Cancer Repair & Spalling Restoration",
      "Concrete Driveways",
      "Balcony & Roof Waterproofing",
      "Basement & Carpark Waterproofing",
      "Wet Area Waterproofing",
      "External Render Repairs",
      "Window Frame Sealing & Glazing Remediation",
      "Brick & Masonry Repointing",
      "Crack Stitching",
      "Balcony & Podium Deck Structural Repairs",
      "Facade & Cladding Repairs"
    ]
  },
  {
    title: "Leak Detection & Reporting",
    image: leakImg,
    items: [
      "Leak Ingress Detailed Investigation With Written Report",
      "Scope Of Works For Leak Rectification",
      "Defect Inspection Reports",
      "Pre & Post-Handover Reports",
      "Building Condition Assessments & Reports"
    ]
  },
  {
    title: "Compliance & Safety Works",
    image: complianceImg,
    items: [
      "Fire Orders Including AFSS Repairs",
      "Handrail & Balustrade Structural Upgrades",
      "Pool Surrounds & Concourse Repairs"
    ]
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.12,
      ease: "easeOut"
    }
  })
};

const Services = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Our Services
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-teal-600/80" />

          <p className="mt-5 text-lg text-slate-700">
            Professional building and property maintenance across Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-teal-600/0 transition group-hover:ring-teal-600/20" />
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-md ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;