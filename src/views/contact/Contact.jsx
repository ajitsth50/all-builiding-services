"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay: d } },
});

const ADDRESS_TEXT = "Level 1, 63-73 Ann Street, Surry Hills, NSW 2010";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Level%201%2C%2063-73%20Ann%20Street%2C%20Surry%20Hills%2C%20NSW%202010";
const MAP_URL =
  "https://www.google.com/maps?q=Level%201%2C%2063-73%20Ann%20Street%2C%20Surry%20Hills%2C%20NSW%202010&output=embed";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      form.reset();
      setStatus("sent");
      setNotice("Thanks. Your enquiry has been sent.");
    } catch {
      setStatus("error");
      setNotice("Your message could not be sent. Please call or email us directly.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-slate-900">
      <Navbar />

      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-6">
        <motion.div
          variants={fade(0.05)}
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-teal-700">
            Contact us
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-blue-900">
            Get in touch
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            We’re available 24/7 for urgent works and quotes.
          </p>
        </motion.div>
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <motion.div
          variants={fade(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-800">First Name *</label>
              <input
                name="firstName"
                type="text"
                required
                placeholder="First"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800">Last Name *</label>
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email / Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-800">Email *</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800">Phone *</label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="02 7229 3522"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Subject */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-800">Subject *</label>
              <input
                name="subject"
                type="text"
                required
                placeholder="e.g. Waterproofing quote"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-800">Message *</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Please leave your message"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-3 px-4 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-3 text-white font-semibold hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>
            {notice && (
              <p
                className={`sm:col-span-2 rounded-lg px-4 py-3 text-sm font-medium ${
                  status === "sent"
                    ? "bg-emerald-50 text-emerald-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {notice}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Map + Directions */}
      <div className="w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            variants={fade(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5"
          >
            {/* Aspect container */}
            <div className="relative w-full" style={{ paddingTop: "48%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="All Building & Property Services Location"
                src={MAP_URL}
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
              />
            </div>

            {/* Overlay info bar */}
            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest text-teal-200">Our Location</p>
                <p className="text-sm sm:text-base font-medium">{ADDRESS_TEXT}</p>
              </div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 shadow"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
