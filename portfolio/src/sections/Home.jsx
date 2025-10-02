import { motion } from "framer-motion";
import heroIllustration from "../assets/developer.svg"; // Your illustration
import { FaArrowRight, FaDownload, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si"; // Peerlist icon

const Home = () => {
    const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/ashurohom" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/ashurohom" },
    { icon: <FaTwitter />, url: "https://twitter.com/ashurohom" },
    { icon: <SiPeerlist />, url: "https://peerlist.io/ashurohom" }, // Added Peerlist
    { icon: <FaEnvelope />, url: "mailto:ashu@example.com" },
    ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 pt-20 md:pt-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Hi, I&apos;m <span className="text-[#FF6B81]">Ashitosh</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mt-4"
        >
          Software Developer | Backend Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 mt-4 max-w-xl mx-auto md:mx-0"
        >
          I build modern, responsive web applications using Python, React, TailwindCSS, and cutting-edge technologies. 
          Let's turn your ideas into reality.
        </motion.p>

        {/* Social Links */}
        <motion.div
        className="flex mt-15 mb-20 gap-5 justify-center md:justify-center" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        >
        {socialLinks.map((link, index) => (
            <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 hover:text-[#FF6B81] text-2xl transition"
            >
            {link.icon}
            </motion.a>
        ))}
        </motion.div>


        {/* CTA Buttons */}
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
        {/* View Projects */}
        <a
            href="#projects"
            className="w-52 px-6 py-3 bg-[#FF6B81] text-white font-semibold rounded-md hover:bg-[#ff4f6f] transition flex items-center gap-2 justify-center"
        >
            <span>View Projects</span>
            <FaArrowRight />
        </a>

        {/* Download Resume */}
        <a
            href="/Ashu_Resume.pdf"
            download
            className="w-52 px-6 py-3 border border-[#FF6B81] text-[#FF6B81] font-semibold rounded-md hover:bg-[#FF6B81] hover:text-white transition flex items-center gap-2 justify-center"
        >
            <span>Resume</span>
            <FaDownload />
        </a>

        {/* Contact Me */}
        <a
            href="#contact"
            className="w-52 px-6 py-3 bg-[#06B6D4] text-white font-semibold rounded-md hover:bg-[#0EA5E9] transition flex items-center gap-2 justify-center"
        >
            <span>Contact Me</span>
            <FaEnvelope />
        </a>
        </motion.div>




      </div>

      {/* Right Side - Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <img
          src={heroIllustration}
          alt="Developer Illustration"
          className="w-80 md:w-[400px] lg:w-[500px]"
        />
      </motion.div>



      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-2xl"
        >
        ⬇
        </motion.div> */}


    </section>
  );
};

export default Home;
