import { motion } from "framer-motion";
import myPhoto from "../assets/Ashitosh.png";
import { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("highlights");

  const highlights = [
    "Software Developer at DREAMWAREZ Company",
    "Passionate about backend and full-stack development",
    "Proficient in Python, Django, React, DRF, TailwindCSS",
    "Always exploring new technologies and improving daily",
  ];

  const skills = [
    "Python", "Django", "React", "JavaScript", 
    "TailwindCSS","SQL", "PostgreSQL", "DRF", "REST APIs",
    "Git", "Netlify", "Linux"
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Technologies" },
    { number: "10+", label: "Certificate" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center z-10">
        {/* Left Side - Reduced width for photo and stats */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 relative"
        >
          <div className="relative group">
            {/* Image Container - Reduced size for laptop */}
            <div className="relative mx-auto lg:mx-0 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/5 shadow-2xl inline-block max-w-full">
                <img
                  src={myPhoto}
                  alt="Ashitosh"
                  className="max-w-[280px] max-h-[280px] w-auto h-auto object-contain transform group-hover:scale-103 transition duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          </div>

          {/* Name below photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            <h3 className="text-2xl font-bold text-white">Ashitosh Baban Rohom</h3>
            <p className="text-cyan-400 text-sm mt-2">Software Developer</p>
          </motion.div>

          {/* Stats Grid - Reduced size */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 mt-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20"
              >
                <div className="text-xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Increased width for content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 space-y-8"
        >
          {/* Header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-extrabold mb-4"
            >
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <p className="text-gray-300 text-lg leading-relaxed space-y-4 text-justify">
              <span className="block">
                I'm a Software Developer with over a year of experience, currently working at a
                growing startup where I specialize in building Python-based backend systems.
                My journey with computers began during my school days at home — inspired by my
                brother, who is also a software developer.
                I hold a B.Tech in Computer Engineering and have always been passionate about 
                full-stack development, enjoying both the frontend creativity and backend logic.
              
                What sets me apart is my constant curiosity, problem-solving mindset, and belief
                in writing clean, meaningful code that makes an impact. Beyond technology, I love
                exploring networks, visiting temples, and find peace in devotion to Lord Krishna.
              
                I aim to grow continuously, achieve big milestones, and make a lasting mark in
                the tech world.
              </span>
            </p>
          </motion.div>

          {/* Tabs Section - Increased width */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {/* Tab Headers */}
            <div className="flex space-x-4 mb-6">
              {["highlights", "skills"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content - More space for highlights */}
            <div className="min-h-[200px]">
              {activeTab === "highlights" && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {highlights.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-base"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:border-cyan-400 transition-all duration-300"
                    >
                      <span className="text-gray-300 font-medium text-sm md:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;