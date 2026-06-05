"use client";
import React from "react";
import { motion } from "framer-motion";

import pica from "../../assets/clients/pica.PNG";
import bcs from "../../assets/clients/bcs.PNG";
import strata from "../../assets/clients/strata.PNG";
import qbe from "../../assets/clients/qbe.JPG";
import bme from "../../assets/clients/bme.png";
import bright from "../../assets/clients/bright.png";
import choice from "../../assets/clients/choice.png";
import excel from "../../assets/clients/excel.png";
import jame from "../../assets/clients/jame.png";
import life from "../../assets/clients/life.png";
import luna from "../../assets/clients/luna.png";
import net from "../../assets/clients/net.png";
import other from "../../assets/clients/other.png";
import pica2 from "../../assets/clients/pica 2.png";
import strata2 from "../../assets/clients/strata 2.png";
import whelan from "../../assets/clients/whelan.png";

const Abouth = () => {
  const clients = [
    { src: pica, alt: "PICA" },
    { src: pica2, alt: "PICA 2" },
    { src: bcs, alt: "BCS" },
    { src: strata, alt: "Strata" },
    { src: strata2, alt: "Strata 2" },
    { src: qbe, alt: "QBE" },
    { src: bme, alt: "BME" },
    { src: bright, alt: "Bright" },
    { src: choice, alt: "Choice" },
    { src: excel, alt: "Excel" },
    { src: jame, alt: "Jame" },
    { src: life, alt: "Life" },
    { src: luna, alt: "Luna" },
    { src: net, alt: "Net" },
    { src: other, alt: "Other" },
    { src: whelan, alt: "Whelan" },
  ];

  // Split into two rows
  const middleIndex = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, middleIndex);
  const row2 = clients.slice(middleIndex);

  // Flowing / marquee-style row (plain JS, no types)
  const renderMarqueeRow = (rowClients, keyPrefix, reverse = false) => {
    const marqueeItems = [...rowClients, ...rowClients]; // duplicate for seamless loop

    return (
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-8 md:gap-12"
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${keyPrefix}-${index}`}
              className="flex justify-center items-center px-4 py-2 md:px-6 md:py-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-sky-50 transition-all duration-300 min-w-[120px] md:min-w-[150px]"
            >
              <img
                src={client.src.src}
                alt={client.alt}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-sky-500 mb-2 font-semibold">
          Trusted by leading partners
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-montserrat">
          Our Client Partners
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          We collaborate with a diverse range of insurers and partners to deliver
          reliable, customer-first solutions.
        </p>
      </motion.div>

      {/* Flowing Logos */}
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {renderMarqueeRow(row1, "row1", false)}
        {renderMarqueeRow(row2, "row2", true)}
      </div>
    </section>
  );
};

export default Abouth;
