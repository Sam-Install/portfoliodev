import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="mt-10 px-6 sm:px-20 py-10 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-700">Frontend</h3>
          <p className="text-gray-600">
            React, Tailwind CSS, JavaScript (ES6+), HTML, CSS, Next.js
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-700">Backend</h3>
          <p className="text-gray-600">
            Laravel, PHP, REST APIs
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-700">Database</h3>
          <p className="text-gray-600">
            MySQL, MongoDB
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-700">Tools</h3>
          <p className="text-gray-600">
            Git & GitHub, Postman, Vercel, Netlify
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
