import React, { useState } from "react";
import {
  FaChevronDown,
  FaTools,
  FaTint,
  FaHardHat,
  FaShieldAlt,
  FaStopwatch,
  FaPhoneAlt,
 
} from "react-icons/fa";

const FAQS = [
  {
    qIcon: <FaTools className="text-teal-50" />,
    q: "What property maintenance services do you provide?",
    a: "Full remedial and maintenance works including concrete cancer repairs, leak investigation, waterproofing and tiling, rendering, roof repairs, plumbing, electrical, fire safety upgrades with AFSS support, handyman tasks, and renovations.",
  },
  {
    qIcon: <FaTint className="text-teal-50" />,
    q: "Can you respond to leaks or urgent issues after hours?",
    a: "Yes. Our 24/7 emergency team can attend leaks, roof failures, unsafe façade elements, and other time-critical defects across Sydney.",
  },
  {
    qIcon: <FaHardHat className="text-teal-50" />,
    q: "Are your trades licensed and supervised?",
    a: "Every job is carried out by licensed trades and supervised to code. We provide clear scopes, photos, and updates so you know exactly what’s happening on site.",
  },
  {
    qIcon: <FaShieldAlt className="text-teal-50" />,
    q: "Are you insured and can you help with AFSS compliance?",
    a: "We’re fully insured and experienced with fire stopping, fire door and frame replacements, passive fire protection, and documentation to support AFSS compliance.",
  },
  {
    qIcon: <FaStopwatch className="text-teal-50" />,
    q: "How do I get a quote and how fast can you start?",
    a: "Request an obligation-free quote and we’ll assess the works promptly. For urgent jobs we can mobilise within 24–48 hours, depending on scope and access.",
  },
];

const Acc = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mt-1 text-xs font-semibold tracking-[0.18em] uppercase text-teal-700">
            F.A.Q
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Frequently Asked <span className="text-teal-700">Questions</span>
          </h3>
        </div>

        {/* FAQ List */}
        <ul className="mt-14 space-y-8">
          {FAQS.map((item, i) => (
            <li key={item.q} className="text-left">
              {/* Question Row */}
              <div className="flex items-start mb-4">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-teal-600 text-white border-4 border-white shadow-sm">
                  {item.qIcon}
                </div>

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-left transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-3">
                    {/* Mobile icon */}
                    <span className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-teal-600 text-white">
                      {item.qIcon}
                    </span>

                    <span className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.q}
                    </span>
                  </span>

                  <FaChevronDown
                    className={`ml-4 h-5 w-5 text-teal-700 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Answer Row */}
              <div
                className={`w-full rounded-xl border border-teal-600/15 bg-teal-50 px-6 py-5 shadow-sm transition-all duration-300 ${
                  open === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none h-0 py-0 px-0 overflow-hidden"
                }`}
              >
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="mt-10 text-center text-slate-700 text-sm sm:text-base">
          Still have questions?{" "}
          <a
            href="tel:+61272293522"
            className="inline-flex items-center gap-2 underline decoration-teal-400 underline-offset-4 hover:text-slate-900"
          >
            <FaPhoneAlt /> Call 02 7229 3522
          </a>{" "}
          or{" "}
          <a
            href="mailto:admin@allbuildingservices.com.au"
            className="underline decoration-teal-400 underline-offset-4 hover:text-slate-900"
          >
            email our team
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Acc;
