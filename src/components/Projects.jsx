import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaReact, FaLaravel, FaShieldAlt, FaServer, FaCheckCircle } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import b from "../assets/butcher.png";
import ti from "../assets/thera.png";
import dg from "../assets/dogtraining.png";
import bk from "../assets/bakery.png";
import sa from "../assets/saas.png";

const allProjects = [
  {
    img: sa,
    title: "KnowCoast",
    link: "https://github.com/Sam-Install",
    description: "A multi-vendor SaaS platform connecting tourists with local tour operators, guides, and Airbnb hosts along the Kenyan coast.",
    tag: "SaaS",
    caseStudy: {
      oneliner: "A purpose-built vendor marketplace for coastal Kenya's tourism economy.",
      status: "UI mostly complete · Backend in active development · Auth layer being refined",
      problem: "Kenya's coastal tourism runs largely on WhatsApp groups and informal referrals. Tour operators, local guides, and Airbnb hosts have no unified platform to list services, manage bookings, or reach tourists directly. Existing platforms like Airbnb or Booking.com are too expensive, too generic, or inaccessible to small local vendors.",
      solution: "KnowCoast gives coastal vendors a professional storefront — purpose-built for the Kenyan market. Vendors register, list services, and manage bookings from a clean dashboard. Tourists discover and book experiences without leaving the platform. Designed for real-world conditions: low-friction onboarding and a mobile-first UI.",
      stack: [
        { icon: FaReact, label: "React", color: "text-sky-500" },
        { icon: SiTailwindcss, label: "Tailwind", color: "text-teal-500" },
        { icon: FaLaravel, label: "Laravel", color: "text-red-500" },
        { icon: FaShieldAlt, label: "Sanctum", color: "text-green-600" },
        { icon: FaServer, label: "REST API", color: "text-gray-600" },
        { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
      ],
      features: [
        "Vendor registration & dashboard",
        "Booking system with real-time notifications",
        "Token-based auth with Laravel Sanctum",
        "Vendor listing management — pricing, availability, descriptions",
        "Role-based access for vendors, tourists, and admins",
        "Fully responsive mobile-first UI",
      ],
      challenges: [
        { title: "API Architecture", desc: "Designing RESTful endpoints that cleanly separate vendor, booking, and auth concerns while keeping the frontend decoupled from business logic." },
        { title: "Secure Auth", desc: "Implementing Sanctum with CSRF protection, token expiry handling, and role guards — ensuring vendors and admins never cross permission boundaries." },
        { title: "State Management", desc: "Coordinating async API responses with local UI state — handling loading, error, and success states consistently across all data-fetching flows." },
        { title: "Non-Technical UX", desc: "Designing a dashboard intuitive for a tour guide or Airbnb host with no technical background." },
      ],
      future: ["M-Pesa & Stripe payments", "Tourist review system", "Vendor analytics dashboard", "Email & SMS notifications", "Public discovery map", "React Native mobile app"],
    },
  },
  { img: ti, title: "Therapy Website", link: "https://therapyi.netlify.app", description: "A full-stack therapy template website. Backend available on GitHub.", tag: "Full Stack" },
  { img: b, title: "Butchery Website", link: "https://butcherweb.vercel.app/", description: "A multipage Next.js butchery website.", tag: "Frontend" },
  { img: dg, title: "Dog Training Website", link: "https://dogweb-pearl.vercel.app/", description: "A dog training website for a startup training academy.", tag: "Frontend" },
  { img: bk, title: "Bakery Website", link: "https://bakery-gamma-liart.vercel.app/", description: "A bakery website template for bakeries.", tag: "Frontend" },
];

const tags = ["All", "SaaS", "Full Stack", "Frontend"];

const counts = {
  All: allProjects.length,
  SaaS: allProjects.filter(function(p) { return p.tag === "SaaS"; }).length,
  "Full Stack": allProjects.filter(function(p) { return p.tag === "Full Stack"; }).length,
  Frontend: allProjects.filter(function(p) { return p.tag === "Frontend"; }).length,
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: function(i) {
    return { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } };
  },
};

const Projects = function() {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = activeTag === "All" ? allProjects : allProjects.filter(function(p) { return p.tag === activeTag; });

  return (
    <section id="projects" className="py-20 border-t border-gray-100 px-4 sm:px-8 md:px-16 lg:px-24">

      <motion.p custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xs uppercase tracking-widest text-amber-600 mb-3 text-center">
        My Work
      </motion.p>

      <motion.h2 custom={1} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Featured <span className="italic font-light">Projects</span>
      </motion.h2>

      {/* Filter — underline tab style with count */}
      <motion.div custom={2} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
        <div className="flex items-end gap-0 border-b border-gray-100 overflow-x-auto">
          {tags.map(function(tag) {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={function() { setActiveTag(tag); }}
                className="relative flex items-center gap-2 px-5 py-3 bg-transparent border-none cursor-pointer flex-shrink-0 group"
              >
                <span className={"text-sm transition-colors duration-200 " + (isActive ? "text-black font-medium" : "text-gray-400 group-hover:text-gray-600")}>
                  {tag}
                </span>
                <span className={"text-xs transition-colors duration-200 " + (isActive ? "text-amber-600" : "text-gray-300 group-hover:text-gray-400")}>
                  {counts[tag]}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                    <span className={"text-xs px-2 py-0.5 rounded-full whitespace-nowrap " + (project.tag === "SaaS" ? "text-purple-600 bg-purple-50" : project.tag === "Full Stack" ? "text-blue-600 bg-blue-50" : "text-amber-600 bg-amber-50")}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-black hover:text-amber-600 transition-colors no-underline font-medium">
                        View Project <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                      {project.caseStudy && (
                        <button onClick={function() { setSelected(project); }} className="text-xs uppercase tracking-widest text-purple-500 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                          Case Study →
                        </button>
                      )}
                    </div>
                    {project.tag === "SaaS" && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-purple-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
                        In Development
                      </span>
                    )}
                  </div>
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && selected.caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-10 px-4"
            onClick={function() { setSelected(null); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-3xl p-8 relative"
              onClick={function(e) { e.stopPropagation(); }}
            >
              <button onClick={function() { setSelected(null); }} className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors bg-transparent border-none cursor-pointer">
                <FaTimes className="w-5 h-5" />
              </button>

              <span className="text-xs uppercase tracking-widest text-purple-500 mb-2 block">Case Study</span>
              <h2 className="text-3xl font-semibold mb-1">{selected.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{selected.caseStudy.oneliner}</p>

              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block flex-shrink-0" />
                <p className="text-xs text-amber-700">{selected.caseStudy.status}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">The Problem</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{selected.caseStudy.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">The Solution</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{selected.caseStudy.solution}</p>
                </div>
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {selected.caseStudy.stack.map(function(item, i) {
                  return (
                    <div key={i} className="flex items-center gap-2 border border-gray-100 rounded-lg px-3 py-2">
                      <item.icon className={"w-4 h-4 " + item.color} />
                      <span className="text-xs text-gray-500">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Key Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {selected.caseStudy.features.map(function(f, i) {
                  return (
                    <div key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{f}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Challenges & Decisions</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {selected.caseStudy.challenges.map(function(c, i) {
                  return (
                    <div key={i} className="border-l-2 border-purple-200 pl-3">
                      <p className="text-xs font-semibold text-black mb-1">{c.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Future Plans</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.caseStudy.future.map(function(item, i) {
                  return (
                    <span key={i} className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{item}</span>
                  );
                })}
              </div>

              <a href={selected.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                <button className="w-full bg-black text-white text-xs uppercase tracking-widest py-3 rounded-sm border-none cursor-pointer hover:opacity-80 transition-opacity">
                  View on GitHub
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;