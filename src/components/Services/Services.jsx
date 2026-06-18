"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";

import remedialImg from "../../assets/services/remedial-services.jpg";
import leakImg from "../../assets/services/leak-detection.png";
import complianceImg from "../../assets/services/compliance-safety.png";

const services = [
  {
    title: "Remedial Services",
    image: remedialImg,
    description: "Structural and fabric repairs for high-use strata, commercial and residential assets.",
    imageFit: "cover",
    items: [
      "Concrete Cancer Repair & Spalling Restoration",
      "Concrete Driveways",
      "Magnesite Removal",
      "Balcony & Roof Waterproofing",
      "Basement & Carpark Waterproofing",
      "Wet Area Waterproofing",
      "External Render Repairs",
      "Window Frame Sealing & Glazing Remediation",
      "Brick & Masonry Repointing",
      "Crack Stitching",
      "Balcony & Podium Deck Structural Repairs",
      "Facade & Cladding Repairs",
    ],
  },
  {
    title: "Leak Detection & Reporting",
    image: leakImg,
    description: "Investigation and reporting for managers who need evidence before approving works.",
    imageFit: "contain",
    items: [
      "Leak Ingress Detailed Investigation With Written Report",
      "Borescope Camera Investigation",
      "Water Hose & Dye Testing",
      "Moisture Mapping",
      "Scope Of Works For Leak Rectification",
      "Defect Inspection Reports",
      "Pre & Post-Handover Reports",
      "Building Condition Assessments & Reports",
    ],
  },
  {
    title: "Compliance & Safety Works",
    image: complianceImg,
    description: "Practical rectification works for risk, access and compliance-driven building priorities.",
    imageFit: "contain",
    items: [
      { heading: "Fire & Passive Fire" },
      "Fire Order & AFSS Rectification Works",
      "Fire-Rated Penetration Sealing & Fire Collars",
      "Fire & Smoke Door Remediation",
      "Fire-Rated Wall & Ceiling Reinstatement",
      { heading: "Barriers & Balustrades" },
      "Balustrade & Barrier Upgrades to NCC 2022",
      "Handrail Structural Repairs & Replacement",
      { heading: "Height & Fall Safety" },
      "Roof Anchor & Static Line Installation",
      "Guardrail & Edge Protection Systems",
      { heading: "Access & Wet Areas" },
      "Pool Surround & Concourse Repairs",
      "Accessibility Upgrades (Ramps, Handrails, Thresholds)",
      { heading: "Hazardous Materials" },
      "Asbestos Make-Safe & Licensed Removal Coordination",
      "Essential Safety Measure Rectification",
    ],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 18 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="bg-white px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              Our Services
            </p>
            <h2 className="mt-3 max-w-2xl font-montserrat text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Our Services
            </h2>
          </div>

          <div className="lg:border-l lg:border-gray-200 lg:pl-8">
            <p className="max-w-3xl text-xl leading-9 text-gray-700">
              Professional building and property maintenance across Sydney.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-base font-semibold text-gray-700">
              {["Property managers", "Facilities managers", "Builders", "Strata managers", "Corporate clients"].map((label) => (
                <span key={label} className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="relative h-64 overflow-hidden bg-slate-50 sm:h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    service.imageFit === "contain"
                      ? "object-contain p-2"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/35 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-montserrat text-xl font-bold tracking-tight text-gray-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 ring-1 ring-sky-100 sm:flex">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-base leading-7 text-gray-700">
                  {service.items.map((item) =>
                    item.heading ? (
                      <li
                        key={item.heading}
                        className="pt-3 text-sm font-bold uppercase tracking-wide text-gray-950 first:pt-0"
                      >
                        {item.heading}
                      </li>
                    ) : (
                      <li key={item} className="flex gap-2.5">
                        <FaCircleCheck className="mt-1 h-4 w-4 shrink-0 text-sky-700" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="max-w-2xl text-base leading-7 text-gray-700">
            Need a documented scope, staged works plan, or urgent make-safe response? Start with the service area and ABPS can align the job to the building risk and stakeholder requirements.
          </p>
          <Link
            href="/services"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-gray-950 px-5 py-3 text-base font-bold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            View All Services
            <FaArrowRightLong className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
