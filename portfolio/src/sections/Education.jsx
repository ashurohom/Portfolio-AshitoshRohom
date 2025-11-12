import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaUniversity, FaCalendar, FaStar, FaLinkedin, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Import certificate images
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.jpeg";
import certificate3 from "../assets/certificate3.png";

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      university: "Savitribai Phule Pune University",
      college: "Sanjivani College Of Engineering, Kopargaon",
      year: "2020 – 2024",
      score: "CGPA: 8.4 / 10",
      icon: <FaGraduationCap className="text-cyan-400" />,
    },
  ];

  const certificates = [
    {
      name: "ET Campus Star",
      platform: "EconomicTimes",
      description:
        "Certificate for exceptional performance in Phase 3 of ET Campus Stars 2022-23, India's largest hunt for brightest engineering minds.",
      image: certificate1,
      featured: true,
    },
    {
      name: "Best Project Completion Certificate",
      platform: "Sanjivani College of Engineering (Sponsored by Automation AI)",
      description:
        "Awarded for successfully completing the company-sponsored B.Tech final year project titled 'Corn Leaves Disease Detection Using Deep Learning.'",
      image: certificate2,
      featured: true,
    },
    {
      name: "Django REST Framework Masterclass",
      platform: "ITVedant",
      description:
        "Hands-on course focused on building RESTful APIs using Django and DRF with authentication and deployment.",
      image: certificate3,
      featured: false,
    },
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold mb-4"
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
          >
            My academic journey and professional certifications
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            {/* Education Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                <FaGraduationCap className="text-3xl text-cyan-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
                <p className="text-gray-400">Academic qualifications and journey</p>
              </div>
            </div>

            {/* Education Card */}
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-cyan-500/20 rounded-2xl border border-cyan-400/30">
                      {edu.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                      {edu.degree}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3 text-cyan-400">
                        <FaUniversity className="text-lg" />
                        <div>
                          <p className="font-semibold">{edu.university}</p>
                          <p className="text-gray-300 text-sm">{edu.college}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-purple-400">
                        <FaCalendar className="text-lg" />
                        <div>
                          <p className="font-semibold">{edu.year}</p>
                          <div className="flex items-center gap-2 text-green-400">
                            <FaStar className="text-yellow-400" />
                            <span className="font-bold">{edu.score}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                <FaCertificate className="text-3xl text-purple-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Certificates</h3>
                <p className="text-gray-400">Professional certifications & achievements</p>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 h-full flex flex-col"
                >
                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Certificate Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                      {cert.name}
                    </h4>
                    <p className="text-cyan-400 text-sm font-medium mb-3">
                      {cert.platform}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  <motion.button
                    onClick={() => openCertificate(cert)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl border border-white/20 transition-all duration-300 mt-auto"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.button>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </motion.div>
              ))}
            </div>

            {/* LinkedIn Certificate Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center pt-6 border-t border-white/10"
            >
              <p className="text-gray-400 mb-4">
                I have more certificates available on my LinkedIn profile
              </p>
              <motion.a
                href="https://linkedin.com/in/ashitoshrohom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Popup Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeCertificate}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all duration-300"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Certificate Image */}
              <div className="max-h-[80vh] overflow-auto">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Certificate Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCertificate.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-1">
                  {selectedCertificate.platform}
                </p>
                <p className="text-gray-300 text-sm">
                  {selectedCertificate.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;