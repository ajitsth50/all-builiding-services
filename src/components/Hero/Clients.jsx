"use client";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Clients = () => {
  const [testimonials, setTestimonials] = useState([
    // This could be fetched from Payload or Firebase later
    {
      name: "Amelia T.",
      role: "Homeowner, West London",
      text:
        "DGR transformed our home with a stunning kitchen extension. The team was professional, timely, and truly cared about the little details. Highly recommended!",
    },
    {
      name: "Raj S.",
      role: "Business Owner, Uxbridge",
      text:
        "We hired DGR for a full-scale commercial renovation. Their quality of work and project management exceeded expectations. Everything was handled smoothly.",
    },
    {
      name: "Priya D.",
      role: "Loft Conversion Client, Southall",
      text:
        "From design to execution, DGR Design & Build brought our dream loft conversion to life. We couldn't be happier with the outcome.",
    },
    {
      name: "George K.",
      role: "Landlord, Hounslow",
      text:
        "Professional, courteous, and efficient. DGR renovated our bathroom and added value to our property. Will definitely work with them again.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "38496467-56c1-4f41-ad6e-6bcf5bf4695d");
    formDataToSend.append("subject", "New Client Review");
    formDataToSend.append("from_name", formData.name);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("message", formData.text);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      toast.success("Thank you for your review!");
      // Optionally show it immediately (temporary until CMS is used)
      setTestimonials((prev) => [...prev, formData]);
      setFormData({ name: "", role: "", text: "" });
      setShowForm(false);
    } else {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-[#fffef6] via-[#fff4d9] to-[#ffeaa7] text-black relative overflow-hidden py-20 px-6">
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 pointer-events-none z-0"></div>

      <div className="max-w-7xl w-full mx-auto z-10 relative">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-16 text-center px-4">
          <span className="inline-block bg-yellow-500 text-white text-sm font-semibold uppercase px-6 py-2 rounded-full tracking-wider shadow-md mb-3">
            Our Clients Say
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
              Homeowners & Businesses
            </span>{" "}
            Trust Us
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-5 rounded-full"></div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-auto rounded-xl border border-yellow-400 p-6 shadow-lg bg-white hover:bg-yellow-50 transition-all duration-300"
            >
              <p className="text-md md:text-lg mb-4 text-gray-700">"{t.text}"</p>
              <div>
                <h5 className="text-base font-semibold text-gray-900">{t.name}</h5>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
          >
            {showForm ? "Close Form" : "Give a Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-xl mx-auto p-6 border border-yellow-400 rounded-xl shadow-lg bg-white"
          >
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-800">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-800">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-800">Testimonial</label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-medium rounded-full transition shadow-md ${
                loading
                  ? "bg-yellow-300 text-white cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
              }`}
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Clients;
