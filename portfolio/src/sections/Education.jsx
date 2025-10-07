import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      university: "Savitribai Phule Pune University",
      college: "Sanjivani College Of Engineering, Kopargaon",
      year: "2020 – 2024",
      score: "CGPA: 8.4 / 10",
    },
  ];

  const certificates = [
    {
      name: "ET Campus Star",
      platform: "EconomicTimes",
      description:
        "certificate for exceptional performance in Phase 3 of ET Campus Stars 2022-23, India's largest hunt for brightest engineering minds.",
      link: "#",
    },
    {
    name: "Best Project Completion Certificate",
    platform: "Sanjivani College of Engineering (Sponsored by Automation AI)",
    description:
        "Awarded for successfully completing the company-sponsored B.Tech final year project titled 'Corn Leaves Disease Detection Using Deep Learning.",
    link: "#",
    },


    {
      name: "Django REST Framework Masterclass",
      platform: "ITVedant",
      description:
        "Hands-on course focused on building RESTful APIs using Django and DRF with authentication and deployment.",
      link: "#",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] px-6 lg:px-20 py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Education & Certificates
      </motion.h2>

      <div className="flex flex-col gap-16">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-pink-500" /> Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-lg"
              >
                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                <p className="text-gray-400 mt-2">{edu.university}</p>
                <p className="text-gray-300">{edu.college}</p>
                <p className="text-cyan-400 mt-1">{edu.year}</p>
                <p className="text-gray-400 mt-1">{edu.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <FaCertificate className="text-cyan-400" /> Certificates
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-lg"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-cyan-400 text-sm mb-2">{cert.platform}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-gradient-to-r from-pink-500 to-cyan-400 px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
