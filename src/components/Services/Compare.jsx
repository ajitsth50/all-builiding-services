import React from "react";
import { motion } from "framer-motion";

const row = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const Check = ({ className = "h-5 w-5 text-teal-700" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M4 12l5 5 11-11" />
  </svg>
);

const Cross = ({ className = "h-5 w-5 text-rose-600" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
    <path strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
  </svg>
);

const Compare = () => {
  const features = [
    {
      label: "Licensed trades on every job",
      us: true,
      them: "Varies by subcontractor",
      note: "QBCC/NSW licensed specialists assigned per trade scope.",
    },
    {
      label: "AFSS & fire order compliance support",
      us: true,
      them: "Limited",
      note: "Fire doors, penetrations, passive fire, certifier coordination.",
    },
    {
      label: "Leak investigation & diagnostics",
      us: true,
      them: "Basic visual only",
      note: "Moisture mapping, intrusive testing and reporting as needed.",
    },
    {
      label: "Rope access/remedial façade capability",
      us: true,
      them: "Outsourced or unavailable",
      note: "IRATA-trained access for high-rise crack, render and seal repairs.",
    },
    {
      label: "Transparent pricing (no hidden costs)",
      us: true,
      them: "Variations late",
      note: "Itemised scopes, photo logs, and pre-approved variations.",
    },
    {
      label: "Fully insured trades & site safety",
      us: true,
      them: "Mixed coverage",
      note: "Public liability, workers comp, SWMS/JSA on every site.",
    },
    {
      label: "24/7 emergency response",
      us: true,
      them: "Business hours only",
      note: "After-hours make-safe for leaks, roof failures, unsafe elements.",
    },
    {
      label: "Single point of contact & updates",
      us: true,
      them: "Multiple handoffs",
      note: "Project lead, clear comms, before/after photo documentation.",
    },
    {
      label: "On-time delivery & tidy handover",
      us: true,
      them: "Slips and overruns",
      note: "Programmed works, staged access, clean completion.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="px-6 md:px-10 pt-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-3 py-1">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal-700">Comparison</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                How We Compare
              </h2>
              <p className="mt-3 text-slate-700 text-base sm:text-lg">
                Real differences that matter to asset life, safety and compliance. No hype, just delivery.
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="text-left font-semibold px-6 md:px-10 py-4 border-b border-slate-200">Capability</th>
                  <th className="text-center font-semibold px-4 py-4 border-b border-slate-200">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                      All Building &amp; Property Services
                    </span>
                  </th>
                  <th className="text-center font-semibold px-4 py-4 border-b border-slate-200">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                      Typical Contractor
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <motion.tr
                    key={f.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={row}
                    className="even:bg-white odd:bg-slate-50/40 hover:bg-teal-50/40 transition-colors"
                  >
                    <td className="align-top px-6 md:px-10 py-4">
                      <div className="font-medium text-slate-900">{f.label}</div>
                      {f.note && <div className="mt-1 text-slate-600 text-xs sm:text-sm">{f.note}</div>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {f.us ? <Check /> : <Cross />}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {typeof f.them === "boolean" ? (
                        f.them ? <Check className="h-5 w-5 text-slate-600" /> : <Cross className="h-5 w-5 text-rose-500" />
                      ) : (
                        <span className="text-slate-600 text-xs sm:text-sm">{f.them}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA strip */}
          <div className="px-6 md:px-10 py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-700 text-sm sm:text-base">
              Need a like-for-like quote or scope review? We’ll price transparently and provide documentation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+61242026432"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-700"
              >
                Call (02) 4202 6432
              </a>
              <a
                href="mailto:admin@allbuildingservices.com.au"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Email our team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compare;
