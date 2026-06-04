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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-12 md:py-16 px-4 sm:px-6 mt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 border-b border-sky-700 pb-10 md:pb-12">
          <div className="space-y-5">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide font-montserrat leading-tight">
              All Building & Property Services
            </h1>

            <p className="text-sky-200 leading-relaxed font-source-sans text-sm break-words">
              All Building & Property Services delivers expert remedial construction,
              leak diagnostics and compliance works across Sydney&apos;s strata sector.
              From concrete cancer repairs and waterproofing to fire order compliance,
              we partner with strata managers, owners corporations and building managers
              to restore, protect and maintain their buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold uppercase text-white font-montserrat">
                Sitemaps
              </h2>

              <ul className="space-y-2 text-sky-200 text-sm font-source-sans">
                <li className="hover:text-green-300 transition-colors">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-green-300 transition-colors">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="hover:text-green-300 transition-colors">
                  <Link to="/services">Services</Link>
                </li>
                <li className="hover:text-green-300 transition-colors">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold uppercase text-white font-montserrat">
                Quick Links
              </h2>

              <ul className="space-y-2 text-sky-200 text-sm font-source-sans">
                <li className="hover:text-green-300 transition-colors break-words">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-green-300 transition-colors break-words">
                  <Link to="/privacy">
                    Privacy Policy – All Building and Property Services Pty Ltd
                  </Link>
                </li>
                <li className="hover:text-green-300 transition-colors break-words">
                  <Link to="/terms">Terms & Conditions – Quotations</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 min-w-0">
            <h2 className="text-lg font-semibold uppercase text-white font-montserrat">
              Contact
            </h2>

            <div className="text-sky-200 space-y-3 text-sm font-source-sans min-w-0">
              <p className="flex items-start gap-3 min-w-0">
                <FaPhone className="text-green-400 mt-1 flex-shrink-0" />
                <span className="break-words">(02) 4202 6432</span>
              </p>

              <p className="flex items-start gap-3 min-w-0">
                <FaEnvelope className="text-green-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:admin@allbuildingservices.com.au"
                  className="break-all hover:text-green-300 transition-colors"
                >
                  admin@allbuildingservices.com.au
                </a>
              </p>

              <p className="flex items-start gap-3 min-w-0">
                <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                <span className="break-words leading-relaxed">
                  81–83 Campbell Street, Surry Hills NSW 2010, Australia
                </span>
              </p>
            </div>

            <div className="flex gap-4 pt-3 text-white text-lg">
              <a
                href="https://www.facebook.com/allbuildingservices.com.au"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-green-300 transition-transform"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/abps.sydney?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-green-300 transition-transform"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/all-building-and-property-services/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-green-300 transition-transform"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-sky-300 font-source-sans">
          © 2026 All Building & Property Services.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;