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

  return (
    <footer className="relative bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-5 left-5 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Ashitosh Rohom
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs">
                <FaEnvelope className="text-xs" />
                <span className="text-xs">ashitosh.rohom@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400 text-xs">
                <FaPhone className="text-xs" />
                <span className="text-xs">+91 9527230560</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <FaMapMarkerAlt className="text-xs" />
                <span className="text-xs">Pune, India</span>
              </div>
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1">
              {["Python", "Django", "DRF", "React", "JavaScript", "HTML", "CSS", "Bootstrap", "PostgreSQL", "Tailwind", "Git", "SQL", "ODOO", "Netlify", "Docker"].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social media Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl bg-white/10 backdrop-blur-sm text-gray-400 ${link.color} transition-all duration-300 border border-white/10 hover:border-white/20 text-base`}
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
              className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 py-2 px-3 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <FaArrowUp className="text-xs" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>© {new Date().getFullYear()} Ashitosh Rohom. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-400"
            >
              <FaHeart />
            </motion.span>
            <span>using</span>
            <FaCode className="text-cyan-400 text-xs" />
            <span>React & Tailwind</span>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">Available for new projects</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;