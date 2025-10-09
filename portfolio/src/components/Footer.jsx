import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaCode, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/ashurohom",
      name: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/ashitoshrohom",
      name: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:ashitosh.rohom@gmail.com",
      name: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <SiPeerlist />,
      url: "https://peerlist.io/ashitoshrohom",
      name: "Peerlist",
      color: "hover:text-blue-400"
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ashitosh Rohom
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cyan-400">
                <FaEnvelope className="text-sm" />
                <span className="text-sm">ashitosh.rohom@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400">
                <FaPhone className="text-sm" />
                <span className="text-sm">+91 9527230560</span>
              </div>
              <div className="flex items-center gap-3 text-green-400">
                <FaMapMarkerAlt className="text-sm" />
                <span className="text-sm">Pune, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#22d3ee" }}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "React", "JavaScript", "PostgreSQL", "Tailwind", "Git", "Docker"].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm text-gray-400 ${link.color} transition-all duration-300 border border-white/10 hover:border-white/20 text-lg`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 py-3 px-4 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaArrowUp className="text-sm" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Ashitosh Rohom. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-400"
            >
              <FaHeart />
            </motion.span>
            <span>using</span>
            <FaCode className="text-cyan-400" />
            <span>React & Tailwind</span>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;