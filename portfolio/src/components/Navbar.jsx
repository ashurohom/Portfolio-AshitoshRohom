import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Skills", "Experience", "Education", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0F172A]/90 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full shadow-lg border border-white/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h1 className="text-white text-2xl font-bold tracking-wider">
            ®Ashu<span className="text-[#FF6B81]"></span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white font-medium relative group transition-all duration-300 hover:text-[#FF6B81]"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6B81] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1E293B] shadow-2xl py-6 flex flex-col items-center space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-semibold hover:text-[#FF6B81] transition-all"
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
