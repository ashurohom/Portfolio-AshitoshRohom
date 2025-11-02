import { motion } from "framer-motion";
import React, { useState } from "react";
import heroIllustration from "../assets/developer.svg";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import resumeFile from "../assets/RohomAshitosh_CV.pdf";


const Home = () => {

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/ashurohom", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/ashitoshrohom", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/ashitoshrohom", label: "Twitter" },
    { icon: <SiPeerlist />, url: "https://peerlist.io/ashitoshrohom", label: "Peerlist" },
    { icon: <FaEnvelope />, url: "mailto:ashitosh.rohom@gmail.com", label: "Email" },
  ];

  const floatingShapes = [
    { icon: "🚀", style: "top-20 left-10" },
    { icon: "💻", style: "top-40 right-20" },
    { icon: "⚡", style: "bottom-40 left-20" },
    { icon: "🎯", style: "bottom-20 right-10" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 pt-20 md:pt-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F1C] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Shapes - Animation Removed */}
      {floatingShapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute text-2xl opacity-20 ${shape.style}`}
        >
          {shape.icon}
        </div>
      ))}

      {/* Left Side - Enhanced Text Content */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
        >
          <FaCode className="text-cyan-400" />
          <span className="text-gray-300 text-sm">Full Stack Developer</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#FF6B81] via-[#06B6D4] to-[#FF6B81] bg-clip-text text-transparent bg-size-200 animate-gradient">
              Ashitosh
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 font-light"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Python Backend
          </span>{" "}
          & Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        >
          I build modern, scalable web applications using{" "}
          <span className="text-cyan-400 font-semibold">Python</span>,{" "}
          <span className="text-purple-400 font-semibold">React</span>, and{" "}
          <span className="text-pink-400 font-semibold">cutting-edge technologies</span>. 
          Let's turn your ideas into reality with clean, efficient code.
        </motion.p>

        {/* Enhanced Social Links - Animation Removed from Icons */}
        <motion.div
          className="flex mt-12 mb-16 gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="text-gray-300 hover:text-white text-2xl p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                {link.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white bg-black/80 px-2 py-1 rounded-md whitespace-nowrap">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons with Better Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start mb-20"
        >
          {/* View Projects Button */}
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                const offsetTop = element.offsetTop - 20;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-[#FF6B81] to-[#ff4f6f] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            <span>View Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Download Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-3 justify-center backdrop-blur-sm"
          >
            <span>View Resume</span>
            <FaDownload className="group-hover:animate-bounce" />
          </button>

          {/* Contact Me Button */}
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offsetTop = element.offsetTop - 20;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            <span>Contact Me</span>
            <FaRocket className="group-hover:animate-pulse" />
          </button>
        </motion.div>

        {/* Scroll Indicator - Animation Removed */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-12 text-gray-400">
          <div className="text-sm mb-2">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Illustration - Animation Removed */}
      <div
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative z-10"
      >
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl transform scale-125"></div>
          
          {/* Illustration Container - Animation Removed */}
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Developer Illustration"
              className="w-80 md:w-[400px] lg:w-[500px] relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Floating Code Elements - Animation Removed */}
          <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            <span className="text-green-400 font-mono text-sm">{"<Code />"}</span>
          </div>

          <div className="absolute bottom-20 -right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
            <span className="text-purple-400 font-mono text-sm">{"{Dev}"}</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        >

      {isResumeOpen && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] h-[80vh] relative border border-white/10 flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">My Resume</h2>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ✖
            </button>
          </div>

          {/* Resume PDF Viewer */}
          <div className="flex-1 overflow-hidden rounded-lg border border-white/10">
            <iframe
              src={resumeFile}
              title="Resume PDF"
              className="w-full h-full rounded-lg"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end mt-4 gap-4">
            <a
              href={resumeFile}
              download="RohomAshitosh_CV.pdf"
              className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all"
            >
              Download
            </a>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="px-6 py-2 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    </motion.div>
    </section>
  );
};

export default Home;