import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaTools } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "DREAMWAREZ",
      role: "Software Developer (Python Backend)",
      duration: "Jan 2025 – Present",
      description:
        "Contributing to backend development at a growing startup. Designed, developed, and optimized multiple ERP modules and custom business applications.",
      highlights: [
        "Developed and deployed 3 major backend projects; currently working on the 4th.",
        "Awarded 'Performer of the Month' for exceptional delivery and teamwork.",
        "Integrated RESTful APIs and automated workflows for business processes.",
        "Collaborated in a full software lifecycle — from design to deployment."
      ],
      technologies: ["Python", "Odoo ERP", "PostgreSQL", "XML", "Git"],
      icon: <FaCode className="text-pink-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] px-6 lg:px-20 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="absolute -top-5 left-6 bg-white/10 p-3 rounded-full">
              {exp.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-white mt-4">{exp.role}</h3>
            <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
            <p className="text-cyan-400 mb-4 font-medium">{exp.duration}</p>

            <p className="text-gray-300 mb-4">{exp.description}</p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-pink-500/20 to-cyan-400/20 text-cyan-300 text-sm px-3 py-1 rounded-full border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
