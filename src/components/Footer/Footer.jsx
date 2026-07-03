"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-2 md:pb-12 lg:grid-cols-[1.15fr_1fr_1fr_0.85fr] lg:gap-12">
          <div className="space-y-5">
            <p className="font-montserrat text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
              All Building & Property Services
            </p>

            <p className="text-sky-100/85 leading-8 font-sourceSans text-base break-words">
              All Building & Property Services delivers expert remedial construction,
              leak diagnostics and compliance works across Sydney&apos;s strata sector.
              From concrete cancer repairs and waterproofing to fire order compliance,
              we partner with strata managers, owners corporations and building managers
              to restore, protect and maintain their buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white font-montserrat">
                Sitemaps
              </h2>

              <ul className="space-y-2 text-sky-100/80 text-base font-sourceSans">
                <li className="transition-colors hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="transition-colors hover:text-white">
                  <Link href="/about">About</Link>
                </li>
                <li className="transition-colors hover:text-white">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="transition-colors hover:text-white">
                  <Link href="/services">Services</Link>
                </li>
                <li className="transition-colors hover:text-white">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white font-montserrat">
                Quick Links
              </h2>

              <ul className="space-y-2 text-sky-100/80 text-base font-sourceSans">
                <li className="transition-colors hover:text-white break-words">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="transition-colors hover:text-white break-words">
                  <a
                    href="/documents/ABPS-Capability-Statement-2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Capability Statement
                  </a>
                </li>
                <li className="transition-colors hover:text-white break-words">
                  <Link href="/privacy-policy">
                    Privacy Policy – All Building and Property Services Pty Ltd
                  </Link>
                </li>
                <li className="transition-colors hover:text-white break-words">
                  <Link href="/terms-quote">Terms & Conditions – Quote</Link>
                </li>
                <li className="transition-colors hover:text-white break-words">
                  <Link href="/terms-invoice">Terms & Conditions – Invoice</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 min-w-0">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white font-montserrat">
              Contact
            </h2>

            <div className="text-sky-100/85 space-y-3 text-base font-sourceSans min-w-0">
              <p className="flex items-start gap-3 min-w-0">
                <FaPhone className="text-sky-300 mt-1 flex-shrink-0" />
                <a
                  href="tel:+61272293522"
                  className="break-words hover:text-white transition-colors"
                >
                  02 7229 3522
                </a>
              </p>

              <p className="flex items-start gap-3 min-w-0">
                <FaEnvelope className="text-sky-300 mt-1 flex-shrink-0" />
                <a
                  href="mailto:admin@allbuildingservices.com.au"
                  className="break-all hover:text-white transition-colors"
                >
                  admin@allbuildingservices.com.au
                </a>
              </p>

              <p className="flex items-start gap-3 min-w-0">
                <FaMapMarkerAlt className="text-sky-300 mt-1 flex-shrink-0" />
                <span className="break-words leading-relaxed">
                  Level 1, 63-73 Ann Street, Surry Hills, NSW 2010
                </span>
              </p>

              <div className="border-t border-white/10 pt-3 leading-relaxed">
                <p>
                  <span className="font-semibold text-white">Builder Licence:</span>{" "}
                  364306C
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-white">
                    Registered Building Practitioner Licence:
                  </span>{" "}
                  BUP 4254025
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-3 text-white text-lg">
              <a
                href="https://www.facebook.com/allbuildingservices.com.au"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 transition hover:border-sky-300 hover:bg-white/10"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/abps.sydney?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 transition hover:border-sky-300 hover:bg-white/10"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/all-building-and-property-services/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 transition hover:border-sky-300 hover:bg-white/10"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="space-y-4 min-w-0">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white font-montserrat">
              Related Parties
            </h2>

            <div className="flex max-w-xs items-center gap-4 rounded-md bg-white p-3 text-gray-950">
              <Image
                src="/assets/tbpm-related-party.jpg"
                alt="TBPM Total Building & Property Management"
                width={150}
                height={150}
                className="h-20 w-20 flex-shrink-0 object-contain"
              />
              <p className="font-montserrat text-sm font-bold leading-snug">
                Total Building and Property Management
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-base text-sky-100/70 font-sourceSans">
          © 2026 All Building & Property Services.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
