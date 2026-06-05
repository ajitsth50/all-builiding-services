"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

const heroVideo = "/assets/hero.mp4";

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: d },
  },
});

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <Navbar />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-0 h-[120%] w-[60%] rotate-6 bg-gradient-to-b from-teal-50 to-white" />
        <div className="absolute left-1/2 top-[20%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[680px] max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-20 sm:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-xl"
          >
            <motion.span
              variants={fade(0.05)}
              className="inline-flex items-center rounded-full border border-teal-600/25 bg-teal-50 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] uppercase text-teal-700"
            >
              About us
            </motion.span>

            <motion.h1
              variants={fade(0.12)}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900"
            >
              We provide all types of{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
                  property maintenance
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="absolute left-0 -bottom-1 h-[3px] w-full origin-left rounded bg-teal-600/80"
                />
              </span>{" "}
              services
            </motion.h1>

            <motion.p
              variants={fade(0.18)}
              className="mt-5 text-lg leading-8 text-slate-800"
            >
              All Building &amp; Property Services helps clients with residential
              and commercial maintenance from one platform. Our purpose is to
              save you the hassle of finding an experienced tradesperson for
              each job.
            </motion.p>

            <motion.p
              variants={fade(0.26)}
              className="mt-4 text-lg leading-8 text-slate-800"
            >
              Our goal is to complete building repairs quickly and efficiently,
              from plumbing and minor fit-outs to general handyman and cleaning.
              We deliver professional service and put in every effort to ensure
              our customers are fully satisfied with the outcome.
            </motion.p>

            <motion.div
              variants={fade(0.34)}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700"
              >
                View services
                <IoIosArrowRoundForward className="text-xl" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Get a quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto max-w-[560px]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl ring-1 ring-black/5">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
