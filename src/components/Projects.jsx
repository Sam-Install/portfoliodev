import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import {
  TbBrandReact, TbWind, TbBrandLaravel, TbShieldCheck,
  TbServer, TbDatabase, TbPhoto, TbCircleCheck,
  TbBrandGithub, TbExternalLink, TbX,
} from "react-icons/tb";

// ─── IMAGE IMPORTS ────────────────────────────────────────────────
// Uncomment and update these paths to match your actual asset files:
 import sa   from "../assets/saas.png";
 import p1   from "../assets/piza1.png";
 import p2   from "../assets/piza2.png";
import e1   from "../assets/ecom1.png";
 import dg   from "../assets/dg.png";

// Then replace the `imageSrc: null` / `imageSrc1: null` / `imageSrc2: null`
// values in the allProjects array below with the imported variables.
// ─────────────────────────────────────────────────────────────────

const allProjects = [
  {
    id: "knowcoast",
    title: "KnowCoast",
    tag: "SaaS",
    description:
      "A multi-vendor SaaS platform connecting tourists with local tour operators, guides, and Airbnb hosts along the Kenyan coast.",
    link: "https://github.com/Sam-Install",
    inDev: true,
    imageType: "single",
    imageSrc: sa, 
    caseStudy: {
      oneliner: "A purpose-built vendor marketplace for coastal Kenya's tourism economy.",
      status: "UI mostly complete · Backend in active development · Auth layer being refined",
      problem:
        "Kenya's coastal tourism runs largely on WhatsApp groups and informal referrals. Tour operators, local guides, and Airbnb hosts have no unified platform to list services, manage bookings, or reach tourists directly. Existing platforms like Airbnb or Booking.com are too expensive, too generic, or inaccessible to small local vendors.",
      solution:
        "KnowCoast gives coastal vendors a professional storefront — purpose-built for the Kenyan market. Vendors register, list services, and manage bookings from a clean dashboard. Tourists discover and book experiences without leaving the platform. Designed for real-world conditions: low-friction onboarding and a mobile-first UI.",
      stack: [
        { icon: TbBrandReact,   label: "React",    color: "text-sky-500"   },
        { icon: TbWind,         label: "Tailwind",  color: "text-teal-500"  },
        { icon: TbBrandLaravel, label: "Laravel",   color: "text-red-500"   },
        { icon: TbShieldCheck,  label: "Sanctum",   color: "text-green-600" },
        { icon: TbServer,       label: "REST API",  color: "text-gray-500"  },
        { icon: TbDatabase,     label: "MySQL",     color: "text-blue-600"  },
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
        {
          title: "API Architecture",
          desc: "Designing RESTful endpoints that cleanly separate vendor, booking, and auth concerns while keeping the frontend decoupled from business logic.",
        },
        {
          title: "Secure Auth",
          desc: "Implementing Sanctum with CSRF protection, token expiry handling, and role guards — ensuring vendors and admins never cross permission boundaries.",
        },
        {
          title: "State Management",
          desc: "Coordinating async API responses with local UI state — handling loading, error, and success states consistently across all data-fetching flows.",
        },
        {
          title: "Non-Technical UX",
          desc: "Designing a dashboard intuitive for a tour guide or Airbnb host with no technical background.",
        },
      ],
      future: [
        "M-Pesa & Stripe payments",
        "Tourist review system",
        "Vendor analytics dashboard",
        "Email & SMS notifications",
        "Public discovery map",
        "React Native mobile app",
      ],
    },
  },
  {
    id: "pizzeria",
    title: "LaRosa Pizzeria",
    tag: "Full Stack",
    description:
      "A full-stack small pizza restaurant website with online ordering. Backend available on GitHub.",
    link: "https://larosapiza.netlify.app",
    inDev: false,
    imageType: "double",
    imageSrc1: p1, 
    //imageSrc2: p2, 
    caseStudy: null,
  },
  {
    id: "mbogaecom",
    title: "MbogaEcom",
    tag: "Full Stack",
    description:
      "A multipage e-commerce website for fresh produce. Backend available on GitHub.",
    link: "https://mbogaecom.netlify.app/",
    inDev: false,
    imageType: "single",
    imageSrc: e1, 
    caseStudy: null,
  },
  {
    id: "dogweb",
    title: "Dog Training Website",
    tag: "Frontend",
    description:
      "A marketing website for a dog training startup academy. Clean, conversion-focused frontend.",
    link: "https://dogweb-pearl.vercel.app/",
    inDev: false,
    imageType: "single",
    imageSrc: dg, 
    caseStudy: null,
  },
];

const TAGS = ["All", "SaaS", "Full Stack", "Frontend"];

const TAG_STYLES = {
  SaaS:       "bg-purple-50 text-purple-700",
  "Full Stack":"bg-blue-50 text-blue-700",
  Frontend:   "bg-amber-50 text-amber-700",
};

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

// ─── IMAGE AREA ───────────────────────────────────────────────────

function ImagePlaceholder({ label }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 bg-gray-50">
      <TbPhoto className="w-6 h-6 text-gray-300" />
      <span className="text-[10px] text-gray-400 text-center leading-snug px-2">{label}</span>
    </div>
  );
}

function CardImage({ project }) {
  if (project.imageType === "double") {
    return (
      <div className="w-full h-full grid grid-cols-2 gap-px bg-gray-200">
        {project.imageSrc1 ? (
          <img
            src={project.imageSrc1}
            alt={`${project.title} preview 1`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ImagePlaceholder label={"Image 1 — set imageSrc1"} />
        )}
        {project.imageSrc2 ? (
          <img
            src={project.imageSrc2}
            alt={`${project.title} preview 2`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ImagePlaceholder label={"Image 2 — set imageSrc2"} />
        )}
      </div>
    );
  }

  if (project.imageSrc) {
    return (
      <img
        src={project.imageSrc}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  return <ImagePlaceholder label={"Add image via imageSrc"} />;
}

// ─── PROJECT CARD ─────────────────────────────────────────────────

function ProjectCard({ project, index, onCaseStudy }) {
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group border border-gray-100 rounded-2xl overflow-hidden bg-white"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-50">
        <CardImage project={project} />
        <span
          className={`absolute top-2.5 right-2.5 text-[10px] font-medium px-2.5 py-0.5 rounded-full ${TAG_STYLES[project.tag]}`}
        >
          {project.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-sm font-semibold text-black mb-2 leading-snug">{project.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-medium text-black hover:text-[#C8394A] transition-colors no-underline"
            >
              View project <TbExternalLink className="w-3 h-3" />
            </a>
            {project.caseStudy && (
              <button
                onClick={() => onCaseStudy(project)}
                className="text-[11px] uppercase tracking-widest text-purple-500 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer"
              >
                Case study →
              </button>
            )}
          </div>
          {project.inDev && (
            <span className="inline-flex items-center gap-1.5 text-[11px] text-purple-500">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              In development
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── CASE STUDY MODAL ─────────────────────────────────────────────

function CaseStudyModal({ project, onClose }) {
  if (!project || !project.caseStudy) return null;
  const cs = project.caseStudy;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-10 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 36 }}
        transition={{ duration: 0.28 }}
        className="bg-white rounded-2xl w-full max-w-3xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
          aria-label="Close case study"
        >
          <TbX className="w-5 h-5" />
        </button>

        <span className="text-[10px] uppercase tracking-widest text-purple-500 mb-1.5 block">
          Case Study
        </span>
        <h2 className="text-3xl font-semibold text-black mb-1">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-5">{cs.oneliner}</p>

        {/* Status */}
        <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
          <p className="text-xs text-amber-700">{cs.status}</p>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">The Problem</p>
            <p className="text-sm text-gray-500 leading-relaxed">{cs.problem}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">The Solution</p>
            <p className="text-sm text-gray-500 leading-relaxed">{cs.solution}</p>
          </div>
        </div>

        {/* Stack */}
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {cs.stack.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-gray-100 rounded-lg px-3 py-2"
            >
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Key Features</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {cs.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <TbCircleCheck className="w-3.5 h-3.5 text-[#C8394A] mt-0.5 flex-shrink-0" />
              <span className="text-xs text-gray-500">{f}</span>
            </div>
          ))}
        </div>

        {/* Challenges */}
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">
          Challenges & Decisions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {cs.challenges.map((c, i) => (
            <div key={i} className="border-l-2 border-purple-200 pl-3">
              <p className="text-xs font-semibold text-black mb-1">{c.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Future */}
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Future Plans</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {cs.future.map((item, i) => (
            <span
              key={i}
              className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline">
          <button className="w-full bg-black text-white text-xs uppercase tracking-widest py-3 rounded-sm border-none cursor-pointer hover:opacity-80 transition-opacity">
            View on GitHub
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected]   = useState(null);

  const counts = TAGS.reduce((acc, t) => {
    acc[t] = t === "All" ? allProjects.length : allProjects.filter((p) => p.tag === t).length;
    return acc;
  }, {});

  const filtered =
    activeTag === "All" ? allProjects : allProjects.filter((p) => p.tag === activeTag);

  return (
    <section id="projects" className="py-20 border-t border-gray-100 px-4 sm:px-8 md:px-16 lg:px-24">

      <motion.p
        custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-[11px] uppercase tracking-widest text-[#C8394A] mb-2.5 text-center"
      >
        My Work
      </motion.p>

      <motion.h2
        custom={1} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-12"
      >
        Featured <span className="italic font-light">Projects</span>
      </motion.h2>

      {/* Filter tabs */}
      <motion.div
        custom={2} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex items-end gap-0 border-b border-gray-100 overflow-x-auto">
          {TAGS.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={isActive}
                className="relative flex items-center gap-1.5 px-5 py-3 bg-transparent border-none cursor-pointer flex-shrink-0 group"
              >
                <span
                  className={`text-sm transition-colors duration-200 ${
                    isActive ? "text-black font-medium" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {tag}
                </span>
                <span
                  className={`text-xs transition-colors duration-200 ${
                    isActive ? "text-[#C8394A]" : "text-gray-300 group-hover:text-gray-400"
                  }`}
                >
                  {counts[tag]}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onCaseStudy={setSelected}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* GitHub CTA */}
      <motion.div
        custom={8} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <a
          href="https://github.com/Sam-Install"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-black text-black text-[11px] uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors no-underline"
        >
          <TbBrandGithub className="w-4 h-4" />
          See more on GitHub
        </a>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;