"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

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

const getItemsPerSlide = (width) => {
  if (width >= 1024) return 8;
  if (width >= 640) return 4;
  return 2;
};

const Abouth = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const slides = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < clients.length; i += itemsPerSlide) {
      grouped.push(clients.slice(i, i + itemsPerSlide));
    }
    return grouped;
  }, [itemsPerSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((slide) => (slide === 0 ? slides.length - 1 : slide - 1));
  };

  const goToNext = () => {
    setCurrentSlide((slide) => (slide + 1) % slides.length);
  };

  return (
    <section className="relative bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              Trusted by leading partners
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Our Client Partners
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-gray-600 lg:border-l lg:border-gray-200 lg:pl-8">
            We collaborate with a diverse range of insurers and partners to deliver
            reliable, customer-first solutions.
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
                    {slide.map((client) => (
                      <div
                        key={client.alt}
                        className="flex min-h-28 items-center justify-center rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:border-sky-200 hover:shadow-md"
                      >
                        <Image
                          src={client.src}
                          alt={client.alt}
                          sizes="(max-width: 639px) 40vw, (max-width: 1023px) 20vw, 12vw"
                          className="h-auto max-h-14 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {slides.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous client partners"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-gray-200 bg-white/95 text-gray-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <FaChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next client partners"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-gray-200 bg-white/95 text-gray-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </>
            ) : null}
          </div>

          {slides.length > 1 ? (
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show client partner slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-sky-700" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Abouth;
