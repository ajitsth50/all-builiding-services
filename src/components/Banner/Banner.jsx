"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

/* ---------- Configurable stats ---------- */
const STATS = [
  {
    label: "Projects Completed",
    value: 5000,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    label: "Experience of Team",
    value: 30,
    suffix: "years +",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c0 4.970-4.029 9-9 9m9-9c0-4.970-4.029-9-9-9M9 5.343V9a3 3 0 002.829 2.828l2.828 2.829A3 3 0 0015 15v3.343"
        />
      </svg>
    ),
  },
  {
    label: "Emergency Jobs/Year",
    value: 350,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    ),
  },
  {
    label: "Satisfied Clients",
    value: 98,
    suffix: "%",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* Optional: looping animation for numbers */
function useLoopingKey(isVisible, loop = true, ms = 7000) {
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (!loop || !isVisible) return;
    const timer = setInterval(() => setKey((k) => k + 1), ms);
    return () => clearInterval(timer);
  }, [isVisible, loop, ms]);
  return key;
}

/* ---------- Stat Card ---------- */
const StatCard = ({ label, value, suffix, icon }) => {
  const [visible, setVisible] = useState(false);
  const loopKey = useLoopingKey(visible, true, 8000); // set false if you don’t want repeat animation

  return (
    <motion.div
      variants={item}
    className="group relative flex min-h-[190px] flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
  >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/20">
        {icon}
      </div>

      <VisibilitySensor partialVisibility offset={{ bottom: 150 }} onChange={setVisible} delayedCall>
        {({ isVisible }) => (
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-950 tabular-nums">
            {isVisible ? <CountUp key={loopKey} end={value} duration={2.2} separator="," /> : 0}
            <span className="ml-1 align-middle text-sky-700">{suffix}</span>
          </h3>
        )}
      </VisibilitySensor>

      <p className="mt-3 text-base font-semibold text-gray-700 leading-tight">{label}</p>
    </motion.div>
  );
};

/* ---------- Section ---------- */
const AboutStats = () => {
  return (
    <section className="relative border-y border-gray-200 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-sky-700">
              Our Achievements
            </p>
            <h2 className="mt-3 font-montserrat text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-950">
              Proven Performance & Trusted Results
            </h2>
          </div>
          <p className="max-w-3xl text-gray-700 text-xl leading-9 lg:border-l lg:border-gray-200 lg:pl-8">
            Over a decade of excellence in building, maintenance, and remedial services across Sydney.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
