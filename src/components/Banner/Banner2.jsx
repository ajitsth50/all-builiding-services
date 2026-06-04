import React from "react";
import { motion } from "framer-motion";
import choose from "../../assets/choose.jpg";

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 }
  }
};

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const badge = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } }
};

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.12 }
  })
};

/* ---------- Content ---------- */
const items = [
  {
    title: "Structural Integrity Restoration",
    text: "Long-lasting, durable repairs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2 4 4 10-10 2 2-12 12-6-6z" />
      </svg>
    ),
    color: "text-teal-700"
  },
  {
    title: "Safety and Functionality Preservation",
    text: "Keep your property secure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "text-slate-900"
  },
  {
    title: "Cost-Effective Maintenance",
    text: "Prevent future costly fixes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.5 0-4 1.5-4 3.5S9.5 15 12 15s4 1 4 2.5S13.5 20 12 20m0-12V4m0 16v0" />
      </svg>
    ),
    color: "text-slate-900"
  }
];

/* ---------- Component ---------- */
const Banner2 = () => {
  return (
    <section className="relative bg-white py-24">
      {/* subtle background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[15%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header block */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={badge}
            className="inline-flex items-center justify-center rounded-full border border-teal-600/25 bg-teal-50/60 px-3 py-1 text-[12px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-teal-700"
          >
            Why choose us
          </motion.p>

          <motion.h2
            variants={child}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900"
          >
            Is your property showing{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
                cracks or leaks?
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                className="absolute left-0 -bottom-1 h-[3px] w-full origin-left rounded bg-teal-600/80"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={child}
            className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-800"
          >
            Don’t risk safety and costly repairs. Trust our expert maintenance team. With over{" "}
            <span className="font-semibold text-slate-900">10 years of experience</span>, we deliver
            reliable, timely, and insured solutions.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="mt-18 grid grid-cols-1 items-center gap-y-12 gap-x-14 lg:grid-cols-5">
          {/* Left: bullets */}
          <div className="lg:col-span-2 lg:pr-12 xl:pr-16">
            <ul className="space-y-8">
              {items.map((item, idx) => (
                <motion.li
                  key={item.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionFade}
                  className="flex items-start gap-5"
                >
                  <span
                    className={`mt-1 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-inset ring-teal-600/20 ${item.color}`}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-lg text-slate-800">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.p
              custom={items.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionFade}
              className="mt-10 text-sm sm:text-base text-slate-600"
            >
              Fully insured. Residential, commercial, and strata. Sydney-wide response.
            </motion.p>
          </div>

          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  custom={0}
  variants={sectionFade}
  className="lg:col-span-3"
>
  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
    <img
      className="w-full h-[500px] object-cover"  
      src={choose}
      alt="Remedial repairs and maintenance in progress"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
