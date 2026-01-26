import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-200 text-gray-800 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center space-y-4">
        
        <motion.h1
          className="text-xl font-semibold text-black"
          variants={itemVariants}
        >
          Samy Nderi
        </motion.h1>

        <motion.p
          className="text-center text-sm text-gray-600"
          variants={itemVariants}
        >
          Built with React & Tailwind, deployed on Netlify
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-5 text-gray-700"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/Sam-Install"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
          >
            <FaGithub className="w-5 h-5 hover:text-black transition" />
          </motion.a>

          <motion.a
            href="mailto:butchercodeske@gmail.com"
            whileHover={{ scale: 1.15 }}
          >
            <FaEnvelope className="w-5 h-5 hover:text-red-500 transition" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-slate-200"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          © 2025 Samy Nderi. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
