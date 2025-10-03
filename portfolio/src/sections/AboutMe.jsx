import { motion } from "framer-motion";
import myPhoto from "../assets/Ashitosh.png";
import { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const highlights = [
    "Software Developer at XYZ Company",
    "Passionate about backend and full-stack development",
    "Proficient in Python, Django, React, DRF, TailwindCSS",
    "Always exploring new technologies and improving daily",
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "TailwindCSS", level: 75 },
    { name: "PostgreSQL", level: 70 },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Enhanced Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/5 shadow-2xl">
                <img
                  src={myPhoto}
                  alt="Ashitosh"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <span className="text-black font-bold text-sm">🚀</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <span className="text-black font-bold text-sm">💻</span>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
              >
                <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            Hello! I'm a passionate developer who enjoys solving real-world problems
            through clean and efficient code. My journey began with curiosity, and it
            has grown into a commitment to building modern, high-performance
            applications that create real impact.
          </motion.p>

          {/* Tabs Section */}
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

            {/* Tab Content */}
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
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-gray-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;