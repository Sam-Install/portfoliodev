import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import b from "../assets/butcher.png";
import ti from "../assets/thera.png";
import dg from "../assets/dogtraining.png";
import bk from "../assets/bakery.png";

const allProjects = [
  { img: ti, title: "Therapy Website", link: "https://therapyi.netlify.app", description: "A full-stack therapy template website. Backend available on GitHub.", tag: "Full Stack" },
  { img: b, title: "Butchery Website", link: "https://butcherweb.vercel.app/", description: "A multipage Next.js butchery website.", tag: "Frontend" },
  { img: dg, title: "Dog Training Website", link: "https://dogweb-pearl.vercel.app/", description: "A dog training website for a startup training academy.", tag: "Frontend" },
  { img: bk, title: "Bakery Website", link: "https://bakery-gamma-liart.vercel.app/", description: "A bakery website template for bakeries.", tag: "Frontend" },
];

const tags = ["All", "Full Stack", "Frontend"];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: function(i) {
    return { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } };
  },
};

const Projects = function() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? allProjects : allProjects.filter(function(p) { return p.tag === activeTag; });

  return (
    <section id="projects" className="py-20 border-t border-gray-100 px-4 sm:px-8 md:px-16 lg:px-24">

      <motion.p custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xs uppercase tracking-widest text-amber-600 mb-3 text-center">
        My Work
      </motion.p>

      <motion.h2 custom={1} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold text-center mb-8">
        Featured <span className="italic font-light">Projects</span>
      </motion.h2>

      {/* Filter Tabs */}
      <motion.div custom={2} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center gap-2 mb-12">
        {tags.map(function(tag) {
          return (
            <button
              key={tag}
              onClick={function() { setActiveTag(tag); }}
              className={"text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors cursor-pointer " + (activeTag === tag ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black")}
            >
              {tag}
            </button>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filtered.map(function(project, i) {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group border border-gray-100 rounded-2xl overflow-hidden"
              >
                <div className="overflow-hidden h-56">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-black leading-snug">{project.title}</h3>
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full whitespace-nowrap">{project.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-black hover:text-amber-600 transition-colors no-underline font-medium">
                    View Project <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <motion.div custom={8} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center mt-14">
        <a href="https://github.com/Sam-Install" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black text-black text-xs uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors no-underline">
          <FaGithub className="w-4 h-4" />
          See more on GitHub
        </a>
      </motion.div>

    </section>
  );
};

export default Projects;