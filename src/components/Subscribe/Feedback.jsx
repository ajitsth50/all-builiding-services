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
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-source-sans">
            Trusted by residential, commercial, and strata clients across Sydney.
            Hear from those we've served.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-xl">
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
                <div className="bg-white border border-sky-100 rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-shadow duration-300 w-full flex flex-col">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} feedback`}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg mb-3 md:mb-4"
                  />
                  <div className="flex items-center mb-2 md:mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs md:text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3 md:mb-4 font-source-sans leading-relaxed flex-grow text-sm md:text-base">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-right mt-auto">
                    <h4 className="font-semibold text-gray-800 font-montserrat text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500">
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
            className="hidden sm:flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-gray-600 text-sm md:text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-sky-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
