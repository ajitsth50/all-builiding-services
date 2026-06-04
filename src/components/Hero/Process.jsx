import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a one-to-one consultation to understand your goals and project vision. This includes a desktop site study or in-person visit to assess opportunities, constraints, and key requirements.",
  },
  {
    title: "Concept Design",
    description:
      "We develop a conceptual design based on your vision, budget, and lifestyle—combining creativity with our architectural expertise to shape the direction of your project.",
  },
  {
    title: "Detailed Design & Planning",
    description:
      "We refine the concept into architectural drawings, ensuring all designs meet local authority requirements and comply with planning and building regulations.",
  },
  {
    title: "Project Delivery",
    description:
      "We collaborate with consultants, prepare technical drawings, and provide ongoing support—working closely with your contractor to help deliver your vision accurately and efficiently.",
  },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Process = () => {
  return (
    <section className="relative bg-white py-28 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-white bg-black px-4 py-1 rounded-full uppercase tracking-wider inline-block shadow font-montserrat">
            Our Process
          </h2>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 font-montserrat">
            A <span className="text-black">Collaborative & Refined</span> Approach
          </h1>
        </div>

        {/* Animated Process Steps */}
        <motion.div
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 group flex flex-col items-center text-center"
            >
              {/* Number Badge */}
              <div className="absolute -top-10 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-md">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2 font-montserrat">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-source-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
