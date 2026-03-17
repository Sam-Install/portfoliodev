import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: function(i) {
    return { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } };
  },
};

const Footer = function() {
  return (
    <footer className="border-t border-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-14 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

        <motion.div custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-lg font-semibold tracking-tight text-black mb-1">Samy Nderi</h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest">Full-Stack Developer</p>
        </motion.div>

        <motion.div custom={1} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Get In Touch</p>
          <div className="flex gap-4">
            <a href="https://github.com/Sam-Install" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="mailto:butchercodeske@gmail.com" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaEnvelope className="w-4 h-4" />
            </a>
            <a href="https://wa.me/254753879163" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div custom={2} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-end gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Navigate</p>
          <div className="flex gap-5">
            {["home", "about", "skills", "projects"].map(function(item) {
              return (
                <a key={item} href={"#" + item} className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors no-underline">
                  {item}
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>

      <motion.div custom={3} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400">© 2025 Samy Nderi. All rights reserved.</p>
        <p className="text-xs text-gray-400">Built with React & Tailwind · Deployed on Netlify</p>
      </motion.div>

    </footer>
  );
};

export default Footer;