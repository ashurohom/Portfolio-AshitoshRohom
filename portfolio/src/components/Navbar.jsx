import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"; // Add your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-blue-900 text-2xl font-bold">Ashu</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-blue-900 hover:text-blue-500 transition font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-900 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>


        {/* Mobile Dropdown Menu (Compact with Logo) */}
        {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-5 md:hidden z-40"
        >
            {/* Logo (optional for mobile menu)
            <div className="flex items-center space-x-2 mb-2">
            <img
                src="/logo.png" // 🔹 replace with your actual logo path
                alt="Logo"
                className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-blue-900">Ashu</span>
            </div> */}

            {/* Navigation Links */}
            {navLinks.map((link) => (
            <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg text-blue-900 hover:text-blue-500 font-medium transition"
            >
                {link}
            </a>
            ))}
        </motion.div>
        )}



    </motion.nav>
  );
};

export default Navbar;
