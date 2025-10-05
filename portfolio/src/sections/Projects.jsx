import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight, FaCode, FaEye } from "react-icons/fa";
import GE from "../assets/GE.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    name: "Gurudatt Electrical Website",
    description:
      "A modern business portfolio website for an electrical company featuring responsive design, service showcase, and contact management built with pure web technologies.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    live: "https://gurudattelectrical.netlify.app/",
    github: "https://github.com/ashurohom/Gurudatt-Electrical",
    image: GE,
    category: "web",
    featured: true
  },
    {
    name: "Portfolio-Ashitosh",
    description:
"Professional portfolio demonstrating full-stack capabilities through modern design and optimized performance.",
    tech: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
    live: "https://yourportfolio.netlify.app/", // Update with your actual portfolio URL
    github: "https://github.com/ashurohom/Portfolio-AshitoshRohom", 
    image: portfolio,
    category: "frontend",
    featured: true
    },
  {
    name: "Blog API Platform",
    description:
      "RESTful API platform with JWT authentication, user management, and comprehensive blog operations including CRUD, filtering, and search functionality.",
    tech: ["Django REST Framework", "SQLite", "JWT", "Python"],
    github: "https://github.com/ashurohom/blog-api-platform",
    image: "https://via.placeholder.com/400x250/7e22ce/ffffff?text=Blog+API",
    category: "backend"
  },
  {
    name: "Contact Book App",
    description:
      "Full-stack contact management application with intuitive UI, real-time search, and comprehensive CRUD operations for personal and professional use.",
    tech: ["Django", "HTML", "JavaScript", "CSS"],
    github: "https://github.com/ashurohom/contact-book",
    image: "https://via.placeholder.com/400x250/ea580c/ffffff?text=Contact+Manager",
    category: "fullstack"
  },
  {
    name: "Portfolio Website",
    description:
      "Modern responsive portfolio website showcasing projects, skills, and professional journey with smooth animations and optimized performance.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/ashurohom/portfolio",
    image: "https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Portfolio",
    category: "frontend",
    featured: true
  },
  {
    name: "E-commerce Backend",
    description:
      "Scalable e-commerce backend with product management, order processing, and payment integration using Django REST Framework.",
    tech: ["Django", "DRF", "PostgreSQL", "Stripe API"],
    github: "https://github.com/ashurohom/ecommerce-backend",
    image: "https://via.placeholder.com/400x250/d946ef/ffffff?text=E-commerce+API",
    category: "backend"
  },
];

const Projects = () => {
  const sliderRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categories = ["all", "featured", "web", "backend", "frontend", "fullstack"];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || 
    activeFilter === "featured" && project.featured ||
    project.category === activeFilter
  );

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-[#1e1b4b] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development, 
            problem-solving skills, and passion for creating impactful solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-2xl font-semibold capitalize transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Slider Container */}
        <div className="relative">
          {/* Left Arrow - Transparent Design */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={scrollLeft}
                className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 text-white p-4 rounded-full group"                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft className="text-xl group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Projects Slider */}
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth gap-8 pb-8 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 lg:w-96 snap-start"
              >
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl h-full">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-2xl shadow-lg"
                        >
                          <FaEye className="text-lg" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-2xl shadow-lg"
                        >
                          <FaCode className="text-lg" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-cyan-900/30 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - Updated to motion.a for better performance */}
                    <div className="flex gap-3">
                    {project.live && (
                        <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25"
                        >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                        </motion.a>
                    )}
                    {project.github && (
                        <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/20"
                        >
                        <FaGithub />
                        Code
                        </motion.a>
                    )}
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow - Transparent Design */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={scrollRight}
                className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 text-white p-4 rounded-full group"                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight className="text-xl group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span className="animate-bounce">←</span>
            Scroll or use arrows to explore more projects
            <span className="animate-bounce animation-delay-1000">→</span>
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
            >
              Let's Connect
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar for different browsers */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;