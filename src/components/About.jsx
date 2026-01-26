import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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

const About = () => {
  return (
    <motion.div
      id="about"
      className="mt-2 px-6 sm:px-20 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-2xl text-center font-semibold"
        variants={itemVariants}
      >
        Hello World! I’m Samy Nderi
      </motion.h1>

      <motion.p
        className="text-center mt-4 leading-relaxed"
        variants={itemVariants}
      >
        A passionate full-stack developer focused on building modern, responsive,
        and user-friendly web applications. I enjoy working with technologies like
        <span className="text-yellow-600"> Laravel</span>,{" "}
        <span className="text-blue-600"> React</span>,{" "}
        <span className="text-teal-600"> Tailwind CSS</span>,{" "}
        <span className="text-red-500"> Next.js</span>, and{" "}
        <span className="text-orange-400"> WordPress</span>.
      </motion.p>

      <motion.p
        className="text-black text-center leading-relaxed mt-4"
        variants={itemVariants}
      >
        My journey in web development is driven by curiosity and the excitement of
        turning ideas into functional products. I enjoy solving real-world problems
        through code, collaborating with others, and continuously sharpening my
        skills. Currently, I’m learning{" "}
        <span className="font-medium">Python</span> to expand my backend and
        problem-solving capabilities.
      </motion.p>

      {/* Contact Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-6 text-gray-700"
        variants={itemVariants}
      >
        <motion.a
          href="https://github.com/Sam-Install"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
        >
          <FaGithub className="w-6 h-6 hover:text-black transition" />
        </motion.a>

        <motion.a
          href="mailto:butchercodeske@gmail.com"
          whileHover={{ scale: 1.15 }}
        >
          <FaEnvelope className="w-6 h-6 hover:text-red-500 transition" />
        </motion.a>

        <motion.a
          href="https://wa.me/254753879163"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
        >
          <FaWhatsapp className="w-6 h-6 hover:text-green-600 transition" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
