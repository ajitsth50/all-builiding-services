"use client";
import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFileSignature } from "react-icons/fa";
import { motion } from "framer-motion";

const JoinNow = () => {
  return (
    <section className="relative bg-white">
      {/* Subtle gradient overlay for aesthetic depth */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-gradient-to-br from-sky-50 via-white to-green-50"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/5 to-green-900/5" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-3xl rounded-2xl border border-sky-200/50 bg-white/90 p-8 backdrop-blur-sm shadow-lg"
          >
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-sky-600/25 bg-sky-50/80 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] uppercase text-sky-700">
                Get started
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-800 font-montserrat">
                Need work performed?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl leading-8 text-gray-700 font-source-sans">
                Get peace of mind with{" "}
                <span className="font-semibold text-sky-700">
                  All Building &amp; Property Services
                </span>
                . Speak with our friendly team about your needs or get a quote today.
              </p>
            </div>

            {/* CTA Row */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-600/20 transition hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                aria-label="Get a quote"
              >
                <FaFileSignature className="text-white" />
                Get a quote
              </Link>

              <a
                href="tel:+61272293522"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:bg-sky-50"
                aria-label="Call All Building & Property Services"
              >
                <FaPhoneAlt />
                02 7229 3522
              </a>

              <a
                href="mailto:admin@allbuildingservices.com.au"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:bg-sky-50"
                aria-label="Email All Building & Property Services"
              >
                <FaEnvelope />
                Email us
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-center text-xs text-gray-600 font-source-sans">
              ABN 49 645 563 597 • ACN 645 563 597 • Level 1, 63-73 Ann Street, Surry Hills, NSW 2010
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinNow;
