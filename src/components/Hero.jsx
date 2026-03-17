import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import pr from "../assets/profile.jpeg";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const Hero = () => {
  return (
    <div id="home" className="px-4 sm:px-8 md:px-16 lg:px-24 gap-4">

      <div className="flex flex-col sm:flex-row items-center justify-between gap-12 py-20">

        {/* Left — Text */}
        <div className="flex-1">

          <motion.p
            custom={0} variants={fade} initial="hidden" animate="visible"
            className="text-xs uppercase tracking-widest text-amber-600 mb-3"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            custom={1} variants={fade} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl font-semibold leading-tight mb-4"
          >
            Hello, I'm <br />
            <span className="italic font-light">Samy Nderi</span>
          </motion.h1>

          <motion.p
            custom={2} variants={fade} initial="hidden" animate="visible"
            className="text-gray-400 text-sm leading-relaxed max-w-md mb-3"
          >
            A passionate full-stack developer building modern, responsive and
            user-friendly web apps with{" "}
            <span className="text-black font-medium">Laravel</span>,{" "}
            <span className="text-black font-medium">React</span>,{" "}
            <span className="text-black font-medium">Tailwind CSS</span>,{" "}
            <span className="text-yellow-400 font-medium">Python</span>,{" "}
            <span className="text-black font-medium">Next.js</span> and{" "}
            <span className="text-black font-medium">WordPress</span>.
          </motion.p>

          <motion.p
            custom={3} variants={fade} initial="hidden" animate="visible"
            className="text-gray-400 text-sm leading-relaxed max-w-md mb-8"
          >
            Driven by curiosity and a love for turning ideas into functional
            products. Currently expanding into{" "}
            <span className="text-black font-medium">Python</span> for backend
            and problem-solving. and Data Analytics 
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4} variants={fade} initial="hidden" animate="visible"
            className="flex gap-3 mb-8"
          >
            <a href="#projects">
              <button className="bg-black text-white text-xs uppercase tracking-widest px-5 py-3 rounded-sm border-none cursor-pointer hover:opacity-80 transition-opacity">
                View Projects
              </button>
            </a>
            <a href="#about">
              <button className="bg-white text-black text-xs uppercase tracking-widest px-5 py-3 rounded-sm border border-gray-200 cursor-pointer hover:border-black transition-colors">
                About Me
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            custom={5} variants={fade} initial="hidden" animate="visible"
            className="flex gap-4"
          >
            <a href="https://github.com/Sam-Install" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="mailto:butchercodeske@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaEnvelope className="w-4 h-4" />
            </a>
            <a href="https://wa.me/254753879163" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Right — Image */}
        <motion.div
          custom={2} variants={fade} initial="hidden" animate="visible"
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-gray-100">
              <img src={pr} alt="Samy Nderi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-60 h-60 sm:w-72 sm:h-72 rounded-2xl border border-gray-200 -z-10" />
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default Hero;