"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

/* ------------------------------
   IMPORT ALL IMAGES (EXACT NAMES)
--------------------------------*/
import timberfence1 from "../../assets/portfolio/timberfence1.jpg";
import timberfence2 from "../../assets/portfolio/timberfence2.jpg";
import timberfence3 from "../../assets/portfolio/timberfence3.jpg";
import timberfence4 from "../../assets/portfolio/timberfence4.jpg";

import waterproofing1 from "../../assets/portfolio/waterproofing1.jpg";
import waterproofing2 from "../../assets/portfolio/waterproofing2.jpg";
import waterproofing3 from "../../assets/portfolio/waterproofing3.jpg";
import waterproofing4 from "../../assets/portfolio/waterproofing4.jpg";
import waterproofing5 from "../../assets/portfolio/waterproofing5.jpg";
import waterproofing6 from "../../assets/portfolio/waterproofing6.jpg";
import waterproofing7 from "../../assets/portfolio/waterproofing7.jpg";

import timbergate1 from "../../assets/portfolio/timbergate1.jpg";
import timbergate2 from "../../assets/portfolio/timbergate2.jpg";
import timbergate3 from "../../assets/portfolio/timbergate3.jpg";
import timbergate4 from "../../assets/portfolio/timbergate4.jpg";
import timbergate6 from "../../assets/portfolio/timbergate6.jpg";

import timberfarming1 from "../../assets/portfolio/timberfarming1.jpg";
import timberfarming2 from "../../assets/portfolio/timberfarming2.jpg";
import timberfarming3 from "../../assets/portfolio/timberfarming3.jpg";
import timberfarming4 from "../../assets/portfolio/timberfarming4.jpg";
import timberfarming5 from "../../assets/portfolio/timberfarming5.jpg";
import timberfarming6 from "../../assets/portfolio/timberfarming6.jpg";
import timberfarming7 from "../../assets/portfolio/timberfarming7.jpg";
import timberfarming8 from "../../assets/portfolio/timberfarming8.jpg";
import timberfarming9 from "../../assets/portfolio/timberfarming9.jpg";

import pressurewash1 from "../../assets/portfolio/pressurewash1.jpg";
import pressurewash2 from "../../assets/portfolio/pressurewash2.jpg";
import pressurewash3 from "../../assets/portfolio/pressurewash3.jpg";
import pressurewash4 from "../../assets/portfolio/pressurewash4.jpg";
import pressurewash5 from "../../assets/portfolio/pressurewash5.jpg";
import pressurewash6 from "../../assets/portfolio/pressurewash6.jpg";

import peeblecrete1 from "../../assets/portfolio/peeblecrete1.jpg";
import peeblecrete2 from "../../assets/portfolio/peeblecrete2.jpg";
import peeblecrete3 from "../../assets/portfolio/peeblecrete3.jpg";
import peeblecrete4 from "../../assets/portfolio/peeblecrete4.jpg";
import peeblecrete5 from "../../assets/portfolio/peeblecrete5.jpg";
import peeblecrete6 from "../../assets/portfolio/peeblecrete6.jpg";
import peeblecrete7 from "../../assets/portfolio/peeblecrete7.jpg";

import painting1 from "../../assets/portfolio/painting1.jpg";
import painting2 from "../../assets/portfolio/painting2.jpg";
import painting3 from "../../assets/portfolio/painting3.jpg";
import painting4 from "../../assets/portfolio/painting4.jpg";
import painting5 from "../../assets/portfolio/painting5.jpg";
import painting6 from "../../assets/portfolio/painting6.jpg";
import painting7 from "../../assets/portfolio/painting7.jpg";
import painting8 from "../../assets/portfolio/painting8.jpg";
import painting9 from "../../assets/portfolio/painting9.jpg";
import painting10 from "../../assets/portfolio/painting10.jpg";
import painting11 from "../../assets/portfolio/painting11.jpg";

import gyprock1 from "../../assets/portfolio/gyprock1.jpg";
import gyprock2 from "../../assets/portfolio/gyprock2.jpg";
import gyprock3 from "../../assets/portfolio/gyprock3.jpg";
import gyprock4 from "../../assets/portfolio/gyprock4.jpg";
import gyprock5 from "../../assets/portfolio/gyprock5.jpg";
import gyprock6 from "../../assets/portfolio/gyprock6.jpg";
import gyprock7 from "../../assets/portfolio/gyprock7.jpg";

import epoxy1 from "../../assets/portfolio/epoxy1.jpg";
import epoxy2 from "../../assets/portfolio/epoxy2.jpg";
import epoxy3 from "../../assets/portfolio/epoxy3.jpg";
import epoxy4 from "../../assets/portfolio/epoxy4.jpg";
import epoxy5 from "../../assets/portfolio/epoxy5.jpg";
import epoxy6 from "../../assets/portfolio/epoxy6.jpg";
import epoxy7 from "../../assets/portfolio/epoxy7.jpg";
import epoxy8 from "../../assets/portfolio/epoxy8.jpg";
import epoxy9 from "../../assets/portfolio/epoxy9.jpg";

import asphalt1 from "../../assets/portfolio/asphalt1.jpg";
import asphalt2 from "../../assets/portfolio/asphalt2.jpg";
import asphalt3 from "../../assets/portfolio/asphalt3.jpg";
import asphalt4 from "../../assets/portfolio/asphalt4.jpg";
import asphalt5 from "../../assets/portfolio/asphalt5.jpg";
import asphalt6 from "../../assets/portfolio/asphalt6.jpg";
import asphalt7 from "../../assets/portfolio/asphalt7.jpg";
import asphalt8 from "../../assets/portfolio/asphalt8.jpg";
import asphalt9 from "../../assets/portfolio/asphalt9.jpg";
import asphalt10 from "../../assets/portfolio/asphalt10.jpg";
import asphalt11 from "../../assets/portfolio/asphalt11.jpg";

import allu1 from "../../assets/portfolio/allu1.jpg";
import allu2 from "../../assets/portfolio/allu2.jpg";
import allu3 from "../../assets/portfolio/allu3.jpg";
import allu4 from "../../assets/portfolio/allu4.jpg";

import aluminiumfence1 from "../../assets/portfolio/aluminiumfence1.jpg";
import aluminiumfence2 from "../../assets/portfolio/aluminiumfence2.jpg";
import aluminiumfence3 from "../../assets/portfolio/aluminiumfence3.jpg";
import aluminiumfence4 from "../../assets/portfolio/aluminiumfence4.jpg";
import aluminiumfence5 from "../../assets/portfolio/aluminiumfence5.jpg";
import aluminiumfence6 from "../../assets/portfolio/aluminiumfence6.jpg";
import aluminiumfence7 from "../../assets/portfolio/aluminiumfence7.jpg";
import aluminiumfence8 from "../../assets/portfolio/aluminiumfence8.jpg";
import aluminiumfence9 from "../../assets/portfolio/aluminiumfence9.jpg";
import aluminiumfence10 from "../../assets/portfolio/aluminiumfence10.jpg";
import aluminiumfence11 from "../../assets/portfolio/aluminiumfence11.jpg";
import aluminiumfence12 from "../../assets/portfolio/aluminiumfence12.jpg";
import aluminiumfence13 from "../../assets/portfolio/aluminiumfence13.jpg";
import aluminiumfence14 from "../../assets/portfolio/aluminiumfence14.jpg";
import aluminiumfence15 from "../../assets/portfolio/aluminiumfence15.jpg";
import aluminiumfence16 from "../../assets/portfolio/aluminiumfence16.jpg";

import beamreplacement1 from "../../assets/portfolio/beamreplacement1.jpg";
import beamreplacement2 from "../../assets/portfolio/beamreplacement2.jpg";
import beamreplacement3 from "../../assets/portfolio/beamreplacement3.jpg";
import beamreplacement4 from "../../assets/portfolio/beamreplacement4.jpg";
import beamreplacement5 from "../../assets/portfolio/beamreplacement5.jpg";
import beamreplacement6 from "../../assets/portfolio/beamreplacement6.jpg";
import beamreplacement7 from "../../assets/portfolio/beamreplacement7.jpg";
import beamreplacement8 from "../../assets/portfolio/beamreplacement8.jpg";
import beamreplacement9 from "../../assets/portfolio/beamreplacement9.jpg";
import beamreplacement10 from "../../assets/portfolio/beamreplacement10.jpg";
import beamreplacement11 from "../../assets/portfolio/beamreplacement11.jpg";
import beamreplacement12 from "../../assets/portfolio/beamreplacement12.jpg";
import beamreplacement13 from "../../assets/portfolio/beamreplacement13.jpg";
import beamreplacement14 from "../../assets/portfolio/beamreplacement14.jpg";
import beamreplacement15 from "../../assets/portfolio/beamreplacement15.jpg";
import beamreplacement16 from "../../assets/portfolio/beamreplacement16.jpg";
import beamreplacement17 from "../../assets/portfolio/beamreplacement17.jpg";
import beamreplacement18 from "../../assets/portfolio/beamreplacement18.jpg";
import beamreplacement19 from "../../assets/portfolio/beamreplacement19.jpg";
import beamreplacement20 from "../../assets/portfolio/beamreplacement20.jpg";
import beamreplacement21 from "../../assets/portfolio/beamreplacement21.jpg";
import beamreplacement22 from "../../assets/portfolio/beamreplacement22.jpg";
import beamreplacement23 from "../../assets/portfolio/beamreplacement23.jpg";
import beamreplacement24 from "../../assets/portfolio/beamreplacement24.jpg";
import beamreplacement25 from "../../assets/portfolio/beamreplacement25.jpg";
import beamreplacement26 from "../../assets/portfolio/beamreplacement26.jpg";

import drivewayconcreting1 from "../../assets/portfolio/drivewayconcreting1.jpg";
import drivewayconcreting2 from "../../assets/portfolio/drivewayconcreting2.jpg";
import drivewayconcreting3 from "../../assets/portfolio/drivewayconcreting3.jpg";
import drivewayconcreting4 from "../../assets/portfolio/drivewayconcreting4.jpg";
import drivewayconcreting5 from "../../assets/portfolio/drivewayconcreting5.jpg";
import drivewayconcreting6 from "../../assets/portfolio/drivewayconcreting6.jpg";
import drivewayconcreting7 from "../../assets/portfolio/drivewayconcreting7.jpg";
import drivewayconcreting8 from "../../assets/portfolio/drivewayconcreting8.jpg";
import drivewayconcreting9 from "../../assets/portfolio/drivewayconcreting9.jpg";
import drivewayconcreting10 from "../../assets/portfolio/drivewayconcreting10.jpg";
import drivewayconcreting11 from "../../assets/portfolio/drivewayconcreting11.jpg";
import drivewayconcreting12 from "../../assets/portfolio/drivewayconcreting12.jpg";
import drivewayconcreting13 from "../../assets/portfolio/drivewayconcreting13.jpg";

import brickwallcrackstitch1 from "../../assets/portfolio/brickwallcrackstitch1.jpg";
import brickwallcrackstitch2 from "../../assets/portfolio/brickwallcrackstitch2.jpg";
import brickwallcrackstitch3 from "../../assets/portfolio/brickwallcrackstitch3.jpg";
import brickwallcrackstitch4 from "../../assets/portfolio/brickwallcrackstitch4.jpg";
import brickwallcrackstitch5 from "../../assets/portfolio/brickwallcrackstitch5.jpg";
import brickwallcrackstitch6 from "../../assets/portfolio/brickwallcrackstitch6.jpg";
import brickwallcrackstitch7 from "../../assets/portfolio/brickwallcrackstitch7.jpg";
import brickwallcrackstitch8 from "../../assets/portfolio/brickwallcrackstitch8.jpg";
import brickwallcrackstitch9 from "../../assets/portfolio/brickwallcrackstitch9.jpg";
import brickwallcrackstitch10 from "../../assets/portfolio/brickwallcrackstitch10.jpg";
import brickwallcrackstitch11 from "../../assets/portfolio/brickwallcrackstitch11.jpg";
import brickwallcrackstitch12 from "../../assets/portfolio/brickwallcrackstitch12.jpg";
import brickwallcrackstitch13 from "../../assets/portfolio/brickwallcrackstitch13.jpg";
import brickwallcrackstitch14 from "../../assets/portfolio/brickwallcrackstitch14.jpg";
import brickwallcrackstitch15 from "../../assets/portfolio/brickwallcrackstitch15.jpg";
import brickwallcrackstitch16 from "../../assets/portfolio/brickwallcrackstitch16.jpg";
import brickwallcrackstitch17 from "../../assets/portfolio/brickwallcrackstitch17.jpg";
import brickwallcrackstitch18 from "../../assets/portfolio/brickwallcrackstitch18.jpg";
import brickwallcrackstitch19 from "../../assets/portfolio/brickwallcrackstitch19.jpg";
import brickwallcrackstitch20 from "../../assets/portfolio/brickwallcrackstitch20.jpg";

import newduplexbuilt1 from "../../assets/portfolio/newduplexbuilt1.jpg";
import newduplexbuilt2 from "../../assets/portfolio/newduplexbuilt2.jpg";
import newduplexbuilt3 from "../../assets/portfolio/newduplexbuilt3.jpg";
import newduplexbuilt4 from "../../assets/portfolio/newduplexbuilt4.jpg";
import newduplexbuilt5 from "../../assets/portfolio/newduplexbuilt5.jpg";
import newduplexbuilt6 from "../../assets/portfolio/newduplexbuilt6.jpg";
import newduplexbuilt7 from "../../assets/portfolio/newduplexbuilt7.jpg";
import newduplexbuilt8 from "../../assets/portfolio/newduplexbuilt8.jpg";
import newduplexbuilt9 from "../../assets/portfolio/newduplexbuilt9.jpg";
import newduplexbuilt10 from "../../assets/portfolio/newduplexbuilt10.jpg";
import newduplexbuilt11 from "../../assets/portfolio/newduplexbuilt11.jpg";
import newduplexbuilt12 from "../../assets/portfolio/newduplexbuilt12.jpg";
import newduplexbuilt13 from "../../assets/portfolio/newduplexbuilt13.jpg";
import newduplexbuilt14 from "../../assets/portfolio/newduplexbuilt14.jpg";
import newduplexbuilt15 from "../../assets/portfolio/newduplexbuilt15.jpg";
import newduplexbuilt16 from "../../assets/portfolio/newduplexbuilt16.jpg";
import newduplexbuilt17 from "../../assets/portfolio/newduplexbuilt17.jpg";
import newduplexbuilt18 from "../../assets/portfolio/newduplexbuilt18.jpg";
import newduplexbuilt19 from "../../assets/portfolio/newduplexbuilt19.jpg";
import newduplexbuilt20 from "../../assets/portfolio/newduplexbuilt20.jpg";
import newduplexbuilt21 from "../../assets/portfolio/newduplexbuilt21.jpg";
import newduplexbuilt22 from "../../assets/portfolio/newduplexbuilt22.jpg";
import newduplexbuilt23 from "../../assets/portfolio/newduplexbuilt23.jpg";

/* ------------------------------
   PROJECT DATA (CLEAN, CONSISTENT)
--------------------------------*/
const projects = [
  {
    title: "Timber Fence",
    category: "Fencing",
    images: [timberfence1, timberfence2, timberfence3, timberfence4],
  },
  {
    title: "Waterproofing",
    category: "Waterproofing & Tiling",
    images: [
      waterproofing1,
      waterproofing2,
      waterproofing3,
      waterproofing4,
      waterproofing5,
      waterproofing6,
      waterproofing7,
    ],
  },
  {
    title: "Timber Gate",
    category: "Fencing",
    images: [timbergate1, timbergate2, timbergate3, timbergate4, timbergate6],
  },
  {
    title: "Timber Framing",
    category: "Carpentry",
    images: [
      timberfarming1,
      timberfarming2,
      timberfarming3,
      timberfarming4,
      timberfarming5,
      timberfarming6,
      timberfarming7,
      timberfarming8,
      timberfarming9,
    ],
  },
  {
    title: "Beam replacement",
    category: "Carpentry",
    images: [
      beamreplacement1,
      beamreplacement2,
      beamreplacement3,
      beamreplacement4,
      beamreplacement5,
      beamreplacement6,
      beamreplacement7,
      beamreplacement8,
      beamreplacement9,
      beamreplacement10,
      beamreplacement11,
      beamreplacement12,
      beamreplacement13,
      beamreplacement14,
      beamreplacement15,
      beamreplacement16,
      beamreplacement17,
      beamreplacement18,
      beamreplacement19,
      beamreplacement20,
      beamreplacement21,
      beamreplacement22,
      beamreplacement23,
      beamreplacement24,
      beamreplacement25,
      beamreplacement26,
    ],
  },
  {
    title: "Pressure Wash",
    category: "Finishes",
    images: [pressurewash1, pressurewash2, pressurewash3, pressurewash4, pressurewash5, pressurewash6],
  },
  {
    title: "Pebblecrete",
    category: "Paving & Groundworks",
    images: [peeblecrete1, peeblecrete2, peeblecrete3, peeblecrete4, peeblecrete5, peeblecrete6, peeblecrete7],
  },
  {
    title: "Driveway concreting",
    category: "Concreting",
    images: [
      drivewayconcreting1,
      drivewayconcreting2,
      drivewayconcreting3,
      drivewayconcreting4,
      drivewayconcreting5,
      drivewayconcreting6,
      drivewayconcreting7,
      drivewayconcreting8,
      drivewayconcreting9,
      drivewayconcreting10,
      drivewayconcreting11,
      drivewayconcreting12,
      drivewayconcreting13,
    ],
  },
  {
    title: "Brick Wall Crack Stitch",
    category: "Remedial",
    images: [
      brickwallcrackstitch1,
      brickwallcrackstitch2,
      brickwallcrackstitch3,
      brickwallcrackstitch4,
      brickwallcrackstitch5,
      brickwallcrackstitch6,
      brickwallcrackstitch7,
      brickwallcrackstitch8,
      brickwallcrackstitch9,
      brickwallcrackstitch10,
      brickwallcrackstitch11,
      brickwallcrackstitch12,
      brickwallcrackstitch13,
      brickwallcrackstitch14,
      brickwallcrackstitch15,
      brickwallcrackstitch16,
      brickwallcrackstitch17,
      brickwallcrackstitch18,
      brickwallcrackstitch19,
      brickwallcrackstitch20,
    ],
  },
  {
    title: "New Duplex built",
    category: "Construction",
    images: [
      newduplexbuilt1,
      newduplexbuilt2,
      newduplexbuilt3,
      newduplexbuilt4,
      newduplexbuilt5,
      newduplexbuilt6,
      newduplexbuilt7,
      newduplexbuilt8,
      newduplexbuilt9,
      newduplexbuilt10,
      newduplexbuilt11,
      newduplexbuilt12,
      newduplexbuilt13,
      newduplexbuilt14,
      newduplexbuilt15,
      newduplexbuilt16,
      newduplexbuilt17,
      newduplexbuilt18,
      newduplexbuilt19,
      newduplexbuilt20,
      newduplexbuilt21,
      newduplexbuilt22,
      newduplexbuilt23,
    ],
  },
  {
    title: "Painting",
    category: "Finishes",
    images: [
      painting1,
      painting2,
      painting3,
      painting4,
      painting5,
      painting6,
      painting7,
      painting8,
      painting9,
      painting10,
      painting11,
    ],
  },
  {
    title: "Gyprock",
    category: "Finishes",
    images: [gyprock1, gyprock2, gyprock3, gyprock4, gyprock5, gyprock6, gyprock7],
  },
  {
    title: "Epoxy Grout",
    category: "Waterproofing & Tiling",
    images: [epoxy1, epoxy2, epoxy3, epoxy4, epoxy5, epoxy6, epoxy7, epoxy8, epoxy9],
  },
  {
    title: "Asphalt / Bitumen",
    category: "Paving & Groundworks",
    images: [
      asphalt1,
      asphalt2,
      asphalt3,
      asphalt4,
      asphalt5,
      asphalt6,
      asphalt7,
      asphalt8,
      asphalt9,
      asphalt10,
      asphalt11,
    ],
  },
  {
    title: "Aluminium Fence",
    category: "Fencing",
    images: [
      allu1,
      allu2,
      allu3,
      allu4,
      aluminiumfence1,
      aluminiumfence2,
      aluminiumfence3,
      aluminiumfence4,
      aluminiumfence5,
      aluminiumfence6,
      aluminiumfence7,
      aluminiumfence8,
      aluminiumfence9,
      aluminiumfence10,
      aluminiumfence11,
      aluminiumfence12,
      aluminiumfence13,
      aluminiumfence14,
      aluminiumfence15,
      aluminiumfence16,
    ],
  },
];

/* ------------------------------
   CARD (ROBUST HOVER SLIDER)
--------------------------------*/
const ProjectCard = ({ project }) => {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef(null);

  // filter out any undefined images so a missing import doesn't blank the card
  const validImages = project.images.filter(Boolean);
  const total = validImages.length;

  const startSlide = () => {
    if (timerRef.current || total <= 1) return;
    timerRef.current = setInterval(() => {
      setSlide((prev) => (prev + 1) % total);
    }, 1200);
  };

  const stopSlide = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSlide(0);
  };

  return (
    <motion.div
      className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
      onMouseEnter={startSlide}
      onMouseLeave={stopSlide}
      onFocus={startSlide}
      onBlur={stopSlide}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${slide * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        >
          {validImages.map((img, i) => (
            <div key={i} className="basis-full shrink-0 h-full w-full">
              <img
                src={img.src}
                alt={`${project.title} ${i + 1}`}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </motion.div>

        {total > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {validImages.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === slide ? "bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-sky-600 mb-1 font-montserrat">{project.title}</h3>
        <p className="text-sm text-gray-700 mb-2 font-source-sans">{project.category}</p>
        <p className="text-sm text-gray-600 font-source-sans">Hover to view {total} photo{total !== 1 ? "s" : ""}.</p>
      </div>
    </motion.div>
  );
};

/* ------------------------------
   MAIN PORTFOLIO SECTION
--------------------------------*/
const PortfolioH = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 font-montserrat">Our Projects Portfolio</h1>
        <p className="text-gray-700 text-base max-w-2xl mx-auto font-source-sans">
          Explore our property maintenance work. Hover over a card to preview all photos from that project.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
              filter === cat
                ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                : "bg-white text-sky-600 border-sky-300 hover:bg-sky-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioH;
