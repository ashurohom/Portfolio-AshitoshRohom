import { motion } from "framer-motion";
import myPhoto from "../assets/Ashitosh.png";

const AboutMe = () => {
  const highlights = [
    "Software Developer at XYZ Company",
    "Passionate about backend and full-stack development",
    "Proficient in Python, Django, React, DRF, TailwindCSS",
    "Always exploring new technologies and improving daily",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Left Side - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 text-center md:text-left mt-10 md:mt-0 backdrop-blur-md bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
          Hi! I'm a passionate developer who started coding with curiosity and grew
          into a full-stack engineer who loves building real-world applications.
          I thrive on solving challenges, learning continuously, and transforming
          ideas into powerful digital experiences.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {highlights.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, color: "#fff" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 p-[3px]">
          <img
            src={myPhoto}
            alt="Ashitosh"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Decorative gradient ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 opacity-20 blur-2xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
