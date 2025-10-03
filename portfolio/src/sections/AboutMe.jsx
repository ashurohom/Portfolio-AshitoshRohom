import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.png"; // Replace with your photo

const AboutMe = () => {
  const highlights = [
    "Software Developer at XYZ Company",
    "Passionate about backend development and full-stack projects",
    "Proficient in Python, Django, React, DRF, TailwindCSS",
    "Always learning and building modern web applications",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-gradient-to-r from-[#1E293B] to-[#0F172A]"
    >
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left mt-10 md:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
          Hello! I started my coding journey a few years ago, exploring different
          technologies and building small projects. I am driven by solving
          challenging problems and creating modern, responsive applications. 
          My work spans backend, frontend, and full-stack development.
        </p>

        {/* Highlights */}
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FF6B81]">
          <img
            src={myPhoto}
            alt="Ashu"
            className="w-full h-full object-cover"
          />
          {/* Optional decorative element */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FF6B81] rounded-full opacity-50 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
