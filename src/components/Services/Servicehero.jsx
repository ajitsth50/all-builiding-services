import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaShieldAlt,
  FaBath,
  FaHandHolding,
  FaWrench,
  FaPaintRoller,
  FaBolt,
} from "react-icons/fa";

/* ---------- Content ---------- */
const SECTIONS = [
  {
    key: "remedial",
    icon: <FaTools />,
    title: "Remedial Repairs",
    intro:
      "Full remedial construction and defect rectification for apartments, balconies, rooftops and structural concrete.",
    bullets: [
      "Building diagnostics & condition reporting with detailed defect inspection reports",
      "Concrete spalling and structural repairs using high-strength mortars and coatings",
      "Waterproofing membranes for balconies, roofs and planter boxes",
      "Brickwork rectification, pointing and façade repairs",
      "Roof and gutter repairs or replacements for metal and tile roofs",
      "Leak investigation and moisture mapping",
      "Rope access remediation for façade and high-rise works",
    ],
  },
  {
    key: "fire",
    icon: <FaShieldAlt />,
    title: "Fire Order Compliance Works",
    intro:
      "Upgrade works required under fire orders and compliance notices, delivered with certifier coordination.",
    bullets: [
      "Assessment of non-compliant fire safety elements",
      "Fire door repair, replacement and certification-ready installation",
      "Fire-rated sealing and penetration fire-stopping",
      "Installation of compliant door hardware and signage",
      "Coordination with certifiers for completion documentation",
    ],
  },
  {
    key: "reno",
    icon: <FaBath />,
    title: "Renovation Services",
    intro:
      "Design-led renovations for apartments, bathrooms, kitchens and common areas, delivered to standard and schedule.",
    bullets: [
      "Complete bathroom and kitchen makeovers including plumbing, tiling and finishes",
      "Common area upgrades: foyers, corridors, lift lobbies",
      "Project management and scheduling for strata or tenancy refurbishments",
      "Design-driven finishes with compliance and safety standards",
    ],
  },
  {
    key: "handy",
    icon: <FaHandHolding />,
    title: "Handyman Services",
    intro:
      "General repairs and maintenance for residential, strata and commercial clients.",
    bullets: [
      "Door, window and sliding door repairs",
      "Gyprock and damaged wall repairs",
      "Fly screen installation, aluminium and tile repairs",
      "Decking, pergola and balcony maintenance",
      "All general handyman and minor carpentry works",
    ],
  },
  {
    key: "plumb",
    icon: <FaWrench />,
    title: "Plumbing",
    intro:
      "Licensed plumbing services for residential, commercial and strata properties.",
    bullets: [
      "Blocked drain cleaning and pipe relining",
      "Grease trap maintenance and tile re-grouting",
      "Hot water tank and heat pump replacement",
      "Leak detection, toilets and tap repairs",
    ],
  },
  {
    key: "paint",
    icon: <FaPaintRoller />,
    title: "Painting",
    intro:
      "Interior and exterior painting, patching and protective coatings.",
    bullets: [
      "Residential, commercial and strata painting",
      "Graffiti removal and anti-graffiti coating",
      "Patching and remedial paint repair services",
    ],
  },
  {
    key: "elec",
    icon: <FaBolt />,
    title: "Electrical",
    intro:
      "Licensed electrical maintenance and compliance services with rapid response.",
    bullets: [
      "Lighting and LED upgrades for common areas",
      "Smoke alarm testing and installation",
      "Switchboard repairs and safety checks",
      "24/7 emergency electrical works",
    ],
  },
];

/* ---------- Motion ---------- */
const container = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const VISIBLE_BULLETS = 4;

const Servicehero = () => {
  const [expanded, setExpanded] = useState({});

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const toggle = (key) => setExpanded((s) => ({ ...s, [key]: !s[key] }));

  return (
    <section className="relative bg-white py-20">
      {/* Accent bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-3 py-1">
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-teal-700">Services</span>
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900"
          >
            Comprehensive Remedial Construction &amp; Property Services
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg sm:text-xl leading-8 text-slate-700">
            Remedial repairs, defect rectification, waterproofing and building compliance for residential, strata and commercial properties.
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
        </motion.header>

        {/* Cards: uniform, no clipping */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3 items-stretch"
        >
          {SECTIONS.map((s) => {
            const isOpen = !!expanded[s.key];
            const items = isOpen ? s.bullets : s.bullets.slice(0, VISIBLE_BULLETS);

            return (
              <motion.article
                key={s.key}
                variants={item}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {/* Header */}
                <div className="mb-4 inline-flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20">
                    <span className="text-xl">{s.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">{s.title}</h3>
                </div>

                {/* Intro with fixed min-height for alignment */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed min-h-[72px]">
                  {s.intro}
                </p>

                {/* Bullets with no overflow clipping */}
                <ul className="mt-4 space-y-2.5">
                  {items.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-teal-700" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 12l4 4 12-12" />
                      </svg>
                      <span className="text-sm sm:text-base leading-6">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Toggle (always visible) */}
                {s.bullets.length > VISIBLE_BULLETS && (
                  <button
                    onClick={() => toggle(s.key)}
                    className="mt-3 self-start text-sm font-semibold text-teal-700 hover:text-teal-800"
                  >
                    {isOpen ? "Hide scope" : "View full scope"}
                  </button>
                )}

                {/* CTAs pinned bottom */}
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700"
                  >
                    Get a quote
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ask a question
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition group-hover:ring-teal-600/15" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicehero;
