"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import feedback1 from "../../assets/feedback/1.jpeg";
import feedback2 from "../../assets/feedback/2.jpeg";
import feedback3 from "../../assets/feedback/3.jpeg";
import feedback4 from "../../assets/feedback/4.jpeg";

const testimonials = [
  {
    name: "D. Daisley",
    date: "21-22 Dec",
    comment: "Great communication. Will be happy to obtain quotes in future jobs.",
    rating: 5,
    image: feedback1,
  },
  {
    name: "Andrew John Barker",
    date: "03 Oct",
    comment: "A professional job, all good.",
    rating: 5,
    image: feedback2,
  },
  {
    name: "A Claypole",
    date: "14-23 Dec",
    comment:
      "Work over Christmas shutdown period. Will be happy to obtain quotes in future.",
    rating: 5,
    image: feedback3,
  },
  {
    name: "Marie Geissler",
    date: "18 Feb",
    comment: "Work over Christmas shutdown.",
    rating: 4,
    image: feedback4,
  },
  {
    name: "Meredith Trevallyn-Jones",
    date: "16-24 Mar",
    comment:
      "All Building Services did a great job at reasonable price and completed the work over the Christmas closedown period. We will be happy to obtain quotes from them on future jobs.",
    rating: 5,
    image: feedback1,
  },
  {
    name: "Jeff Muscat",
    date: "02 Sep",
    comment: "The contractor was great called when on site sent photos he was great.",
    rating: 5,
    image: feedback2,
  },
  {
    name: "Alison Neville",
    date: "22 Oct",
    comment:
      "All good as helpful and professional and kept me informed about what he was doing.",
    rating: 5,
    image: feedback3,
  },
  {
    name: "Dennis Riley",
    date: "24 Apr",
    comment: "Private feedback.",
    rating: 4,
    image: feedback4,
  },
  {
    name: "D White",
    date: "24-25 Apr",
    comment:
      "Trade was very pleasant, did a good job with little supervision. Just had to show him where things were. Very pleased overall.",
    rating: 5,
    image: feedback1,
  },
  {
    name: "James Bush",
    date: "26 Jun",
    comment: "Private feedback.",
    rating: 5,
    image: feedback2,
  },
  {
    name: "Chi Liu & Man Lam",
    date: "29 Jul",
    comment: "Private feedback.",
    rating: 5,
    image: feedback3,
  },
  {
    name: "Michael Johnson",
    date: "29 Jul",
    comment: "Private feedback.",
    rating: 5,
    image: feedback4,
  },
  {
    name: "Judianne Kelly",
    date: "09 Jun",
    comment: "Highly recommended!",
    rating: 5,
    image: feedback1,
  },
  {
    name: "P & L Archie",
    date: "25 Mar",
    comment: "Good, clean professional job.",
    rating: 5,
    image: feedback2,
  },
  {
    name: "Etienne Dufour",
    date: "01 May",
    comment: "Private feedback.",
    rating: 4,
    image: feedback3,
  },
  {
    name: "Peter Douglas",
    date: "18 Jun",
    comment: "Very happy with the work.",
    rating: 5,
    image: feedback4,
  },
  {
    name: "Michaela Robinson",
    date: "25 Jun",
    comment:
      "Repairs to front door were completed and finished professionally.",
    rating: 5,
    image: feedback1,
  },
  {
    name: "Elizabeth Jones",
    date: "15 Nov",
    comment:
      "The contractor was very good. He was efficient and did a good job. I was very satisfied.",
    rating: 5,
    image: feedback2,
  },
  {
    name: "Christine Carson",
    date: "15 Feb",
    comment: "All Building Serviced. Highly recommended!",
    rating: 5,
    image: feedback3,
  },
  {
    name: "Coralie Muddel",
    date: "20 Dec",
    comment: "Fence repaired quickly and well.",
    rating: 5,
    image: feedback4,
  },
];

const Feedback = () => {
  // responsive slides per view
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // set slidesPerView based on screen width
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3); // lg and up
      } else if (width >= 640) {
        setSlidesPerView(2); // sm and up
      } else {
        setSlidesPerView(1); // mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = testimonials.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const slideWidth = 100 / slidesPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative border-y border-gray-200 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            Client feedback
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-4 font-montserrat">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-sourceSans leading-9">
            Trusted by residential, commercial, and strata clients across Sydney.
            Hear from those we've served.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-lg">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * slideWidth}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-3 lg:px-4 flex items-stretch"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition duration-200 hover:border-sky-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-5">
                  <img
                    src={testimonial.image.src}
                    alt={`${testimonial.name} feedback`}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-md mb-3 md:mb-4"
                    loading="lazy"
                  />
                  <div className="flex items-center mb-2 md:mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-sky-600 text-xs md:text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 md:mb-4 font-sourceSans leading-relaxed flex-grow text-base md:text-lg">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-right mt-auto">
                    <h4 className="font-semibold text-gray-950 font-montserrat text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-3 md:left-4 top-1/2 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-gray-200 bg-white/95 shadow-sm transition-colors z-10 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-gray-600 text-sm md:text-base" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-3 md:right-4 top-1/2 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-gray-200 bg-white/95 shadow-sm transition-colors z-10 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === maxIndex}
          >
            <FaChevronRight className="text-gray-600 text-sm md:text-base" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 md:mt-8 flex-wrap gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial slide ${index + 1}`}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-sky-600" : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
