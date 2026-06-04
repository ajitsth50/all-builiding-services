import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import toast, { Toaster } from 'react-hot-toast';

const NavbarMenu = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  {
    id: 3,
    title: 'Services',
    path: '/services',
    // dropdown: [
    //   { title: 'Property Maintenance', path: '/services#property-maintenance' },
    //   { title: 'Timber Framing', path: '/services#timber-framing' },
    //   { title: 'Pressure Washing', path: '/services#pressure-washing' },
    //   { title: 'Painting', path: '/services#painting' },
    // ],
  },
  { id: 4, title: 'Projects', path: '/projects' },
  { id: 6, title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({});

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '"',
        ...formData,
      }),
    });

    if (response.ok) {
      toast.success('Quote submitted successfully! 🎉');
      setFormData({});
      setShowForm(false);
    } else {
      toast.error('Something went wrong. Try again later.');
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 py-4 flex justify-between items-center h-20"
        >
          <Link to="/" className="flex items-center h-full">
            <img src={logo} alt="Logo" className="h-[100px] w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-base font-medium text-gray-800 relative">
              {NavbarMenu.map((menu) =>
                menu.dropdown ? (
                  <li key={menu.id} className="relative group">
                    <span className="py-2 px-4 rounded-md cursor-pointer transition duration-300 hover:border-b-2 hover:border-green-400 font-source-sans">
                      {menu.title}
                    </span>
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                      {menu.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.path} className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:border-l-2 hover:border-green-400 transition font-source-sans">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={menu.id}>
                    <Link
                      to={menu.path}
                      className={`py-2 px-4 rounded-md transition duration-300 ${
                        location.pathname === menu.path ? 'border-b-2 border-green-400 font-semibold' : 'text-gray-800 hover:border-b-2 hover:border-green-400'
                      } font-source-sans`}
                    >
                      {menu.title}
                    </Link>
                  </li>
                )
              )}
              <button onClick={() => setShowForm(true)} className="ml-4 bg-sky-500 hover:bg-green-400 text-white px-6 py-3 rounded-full transition duration-300 font-source-sans shadow-md hover:shadow-lg">
                Get a Quote
              </button>
            </ul>

            <div className="flex gap-4 text-gray-800 text-xl ml-6">
              <a href="https://www.facebook.com/allbuildingservices.com.au " target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/abps.sydney?utm_source=qr" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/all-building-and-property-services/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 hover:text-sky-500 transition">
              {menuOpen ? <IoMdClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="block lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
            >
              <ul className="flex flex-col items-center py-4 space-y-3 text-lg font-medium text-gray-800 font-source-sans">
                {NavbarMenu.map((menu) =>
                  menu.dropdown ? (
                    <li key={menu.id} className="w-full text-center">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full py-2 hover:text-sky-500 transition font-semibold"
                      >
                        {menu.title}
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-sky-50 rounded-md mt-1 text-sm"
                          >
                            {menu.dropdown.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2 hover:bg-sky-500 hover:text-white transition font-source-sans"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={menu.id}>
                      <Link
                        to={menu.path}
                        className="block w-full py-2 text-center hover:text-sky-500 transition font-source-sans"
                        onClick={() => setMenuOpen(false)}
                      >
                        {menu.title}
                      </Link>
                    </li>
                  )
                )}
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-sky-500 hover:bg-green-400 text-white px-6 py-3 rounded-full mt-2 transition duration-300 font-source-sans shadow-md hover:shadow-lg"
                >
                  Get a Quote
                </button>
                <div className="flex gap-4 text-gray-800 text-xl pt-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                    <FaFacebook />
                  </a>
                  <a href="" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform hover:text-sky-500">
                    <FaLinkedin />
                  </a>
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
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-xl"
            >
              <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition">
                <IoMdClose size={24} />
              </button>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-montserrat">Get a Free Quote</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} value={formData.name || ''} type="text" placeholder="Full Name" className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition" required />
                <input name="email" onChange={handleChange} value={formData.email || ''} type="email" placeholder="Email Address" className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition" required />
                <input name="address" onChange={handleChange} value={formData.address || ''} type="text" placeholder="Project Address" className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition" required />
                <textarea
  name="work_type"
  onChange={handleChange}
  value={formData.work_type || ''}
  placeholder="Describe the service you require..."
  rows="3"
  className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition resize-none"
  required
/>
                <select name="building_type" onChange={handleChange} value={formData.building_type || ''} className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition" required>
                  <option value="">Building Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Strata">Strata</option>
                </select>
                <textarea name="message" onChange={handleChange} value={formData.message || ''} placeholder="Additional Details..." className="w-full border border-sky-300 rounded-md p-3 font-source-sans focus:border-sky-500 focus:outline-none transition" rows="3"></textarea>
                <button type="submit" className="w-full bg-sky-500 hover:bg-green-400 text-white py-3 rounded-md font-semibold font-source-sans transition duration-300 shadow-md hover:shadow-lg">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;