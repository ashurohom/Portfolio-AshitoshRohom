import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaTools, FaRocket, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

// Ashitosh Experience Section
const Experience = () => {
  const experiences = [
    {
      company: "DREAMWAREZ",
      role: "Software Developer (Python Backend)",
      duration: "1+ Year",//"Jan 2025 – Present",
      description:
        "Contributing to backend development at a growing startup. Designed, developed, and optimized multiple ERP modules and custom business applications.",
      highlights: [
        "Developed and deployed 4 major backend projects.",
        "Awarded 'Performer of the Month' for exceptional delivery and teamwork.",
        "Integrated RESTful APIs and automated workflows for business processes.",
        "Collaborated in a full software lifecycle — from design to deployment."
      ],
      technologies: ["Python", "Odoo ERP", "PostgreSQL", "XML", "Git"],
      icon: <FaCode className="text-cyan-400" />,
      award: true,
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:left-10 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/3 right-4 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-4 sm:left-20 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
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
            className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4"
          >
            Professional experience and career milestones in software development
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Experience Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 shadow-2xl group">
                {/* Header - Stacked on mobile, side by side on larger screens */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:border-cyan-400/50 transition-colors flex-shrink-0">
                      {exp.icon}
                    </div>
                    
                    {/* Title and Company Info */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {exp.role}
                      </h3>
                      
                      {/* Company and Duration - Stacked on mobile, inline on larger screens */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm sm:text-base">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <FaMapMarkerAlt className="text-sm" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-400">
                          <FaCalendar className="text-sm" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Award Badge */}
                  {exp.award && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-3 py-2 sm:px-4 sm:py-2 rounded-2xl border border-yellow-400/30 w-fit"
                    >
                      <FaTrophy className="text-yellow-400 text-sm sm:text-base" />
                      <span className="font-semibold text-xs sm:text-sm">Performer of the Month</span>
                    </motion.div>
                  )}
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-base leading-relaxed mb-6 bg-white/5 rounded-2xl p-4 border border-white/10"
                >
                  {exp.description}
                </motion.p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg sm:text-xl">
                    <FaRocket className="text-cyan-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg sm:text-xl">
                    <FaTools className="text-purple-400" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/10 backdrop-blur-sm text-cyan-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Let's collaborate and create impactful solutions together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
              <FaRocket className="text-sm" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;