"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";
import toast, { Toaster } from "react-hot-toast";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Projects", path: "/projects" },
  { id: 6, title: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/allbuildingservices.com.au ",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abps.sydney?utm_source=qr",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/all-building-and-property-services/",
    icon: FaLinkedin,
  },
];

const fieldClass =
  "mt-1 w-full rounded-md border border-gray-300 bg-white p-3 font-sourceSans text-base text-gray-900 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const pathname = usePathname();
  const [formData, setFormData] = useState({});

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "quote",
        ...formData,
      }),
    });

    if (response.ok) {
      toast.success("Quote submitted successfully!");
      setFormData({});
      setShowForm(false);
    } else {
      toast.error("Something went wrong. Try again later.");
    }
  };

  const openQuoteForm = () => {
    setMenuOpen(false);
    setShowForm(true);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link href="/" className="flex h-full items-center gap-3" aria-label="All Building and Property Services home">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
              <Image
                src={logo}
                alt="All Building and Property Services logo"
                className="h-12 w-12 object-contain"
                sizes="48px"
                priority
              />
            </span>
            <span className="max-w-[160px] text-sm font-bold leading-tight tracking-tight text-gray-900 sm:max-w-[220px]">
              <span className="sm:hidden">ABPS</span>
              <span className="hidden sm:inline">All Building & Property Services</span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            <ul className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                      pathname === menu.path
                        ? "bg-sky-50 text-sky-800 ring-1 ring-sky-100"
                        : "hover:bg-sky-50 hover:text-sky-800"
                    } font-sourceSans`}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={openQuoteForm}
              className="rounded-md bg-gray-950 px-5 py-3 font-sourceSans text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Get a Quote
            </button>

            <div className="flex gap-2 text-base text-gray-700">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 lg:hidden"
          >
            {menuOpen ? <IoMdClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />}
          </button>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block overflow-hidden border-t border-gray-200 bg-white shadow-md lg:hidden"
            >
              <ul className="flex flex-col space-y-2 px-4 py-4 text-base font-semibold text-gray-800 font-sourceSans">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.path}
                      className="block w-full rounded-md px-3 py-3 text-left transition hover:bg-sky-50 hover:text-sky-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <button
                  onClick={openQuoteForm}
                  className="mt-2 rounded-md bg-gray-950 px-6 py-3 text-white shadow-sm transition duration-200 hover:bg-sky-800"
                >
                  Get a Quote
                </button>
                <div className="flex gap-3 pt-4 text-lg text-gray-800">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-2xl"
            >
              <button
                onClick={() => setShowForm(false)}
                aria-label="Close quote form"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <IoMdClose size={24} />
              </button>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Commercial enquiry</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 font-montserrat">Get a Free Quote</h3>

              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold text-gray-800">
                  Full Name
                  <input name="name" onChange={handleChange} value={formData.name || ""} type="text" className={fieldClass} required />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Email Address
                  <input name="email" onChange={handleChange} value={formData.email || ""} type="email" className={fieldClass} required />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Project Address
                  <input name="address" onChange={handleChange} value={formData.address || ""} type="text" className={fieldClass} required />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Describe the service you require
                  <textarea
                    name="work_type"
                    onChange={handleChange}
                    value={formData.work_type || ""}
                    rows="3"
                    className={`${fieldClass} resize-none`}
                    required
                  />
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Building Type
                  <select name="building_type" onChange={handleChange} value={formData.building_type || ""} className={fieldClass} required>
                    <option value="">Building Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Strata">Strata</option>
                  </select>
                </label>

                <label className="block text-sm font-semibold text-gray-800">
                  Additional Details
                  <textarea name="message" onChange={handleChange} value={formData.message || ""} className={fieldClass} rows="3" />
                </label>

                <button type="submit" className="w-full rounded-md bg-gray-950 py-3 font-sourceSans font-semibold text-white shadow-sm transition duration-200 hover:bg-sky-800">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
