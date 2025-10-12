import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaGraduationCap, 
  FaEnvelope 
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Projects", icon: <FaCode /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

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

        {/* Desktop Menu - Simple with Icons */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleSmoothScroll(link.name.toLowerCase())}
              className="text-white font-medium relative group transition-all duration-300 hover:text-[#FF6B81] flex items-center gap-2"
            >
              {link.icon}
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6B81] group-hover:w-full transition-all duration-300"></span>
            </button>
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
            <button
              key={link.name}
              onClick={() => handleSmoothScroll(link.name.toLowerCase())}
              className="text-white text-lg font-semibold hover:text-[#FF6B81] transition-all flex items-center gap-3"
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;