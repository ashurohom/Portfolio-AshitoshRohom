import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { SiPeerlist } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "ashitosh.rohom@gmail.com",
      link: "mailto:ashitosh.rohom@gmail.com",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Phone",
      value: "+91 9309585720",
      link: "tel:+919309585720",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Pune, Maharashtra, India",
      link: "#",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "+91 9309585720",
      link: "https://wa.me/919309585720",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/ashurohom",
      name: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://linkedin.com/in/ashitoshrohom",
      name: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com/ashitoshrohom",
      name: "Twitter",
      color: "hover:text-sky-400"
    },
    { icon: <SiPeerlist />, 
      url: "https://peerlist.io/ashitoshrohom", 
      name: "Peerlist", 
      color: "hover:text-blue-400"
    },
    { 
      icon: <FaEnvelope />, 
      url: "mailto:ashitosh.rohom@gmail.com",
      name: "Email",
      color: "hover:text-red-400"
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-20 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-20 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
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
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities and exciting projects.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4 text-center">Follow Me</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-2xl bg-white/10 text-gray-400 ${link.color} transition-all duration-300 border border-white/10 hover:border-white/20 text-xl`}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-6 border border-cyan-400/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-white font-semibold">Currently Available</h4>
                  <p className="text-cyan-400 text-sm">Ready for new projects and opportunities</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Send Message</h3>
              <p className="text-gray-400 mb-8">
                Let's start a conversation about your next project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 text-sm text-center mt-6"
              >
                I typically respond within 24 hours
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Made with ❤️ by Ashitosh Rohom • © 2024 All rights reserved
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;