import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaLaravel, FaShieldAlt, FaServer,
  FaCheckCircle, FaArrowLeft
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql
} from "react-icons/si";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: function(i) {
    return { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } };
  },
};

const stack = [
  { icon: FaReact, label: "React", color: "text-sky-500" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-500" },
  { icon: FaLaravel, label: "Laravel", color: "text-red-500" },
  { icon: FaShieldAlt, label: "Sanctum", color: "text-green-600" },
  { icon: FaServer, label: "REST API", color: "text-gray-700" },
  { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
];

const features = [
  { title: "Vendor Registration & Dashboard", desc: "Vendors onboard through a structured registration flow and manage their listings, availability, and bookings from a centralized dashboard." },
  { title: "Booking System", desc: "Tourists can discover and book experiences directly. Vendors receive real-time booking notifications and can manage confirmations." },
  { title: "Auth with Laravel Sanctum", desc: "Token-based authentication with Sanctum. Separate flows for vendors and admins with protected routes on both frontend and API layer." },
  { title: "Vendor Listing Management", desc: "Vendors create and edit service listings with descriptions, pricing, and availability. Built for non-technical users." },
  { title: "Role-Based Access", desc: "Distinct roles for vendors, tourists, and admins — each with scoped permissions and dedicated UI views." },
  { title: "Responsive UI", desc: "Fully responsive across mobile, tablet, and desktop. Designed for real-world usage in field conditions." },
];

const challenges = [
  { title: "API Architecture", desc: "Designing RESTful endpoints that cleanly separate vendor, booking, and auth concerns while keeping the frontend decoupled from business logic." },
  { title: "Secure Authentication", desc: "Implementing Sanctum with CSRF protection, token expiry handling, and role guards — ensuring vendors and admins never cross permission boundaries." },
  { title: "State Management", desc: "Coordinating async API responses with local UI state — handling loading, error, and success states consistently across all data-fetching flows." },
  { title: "UX for Non-Technical Vendors", desc: "Designing a dashboard that's functional for a developer but intuitive for a tour guide or Airbnb host with no technical background." },
];

const timeline = [
  { phase: "01", label: "Research & Planning", desc: "Mapped out the vendor journey, defined core entities (vendors, listings, bookings), and designed the API schema." },
  { phase: "02", label: "UI Scaffolding", desc: "Used AI-assisted tooling to accelerate initial layout generation, then manually refined every component for consistency, responsiveness, and UX quality." },
  { phase: "03", label: "Frontend Build", desc: "Built the full React frontend — vendor dashboard, booking flows, auth pages — with Tailwind for styling and React Router for navigation." },
  { phase: "04", label: "Backend Development", desc: "Developed the Laravel API layer — authentication, vendor endpoints, booking logic — following RESTful conventions with clean controller separation." },
  { phase: "05", label: "Integration & Testing", desc: "Connected frontend to API, handled edge cases, validated auth flows, and stress-tested booking state transitions." },
];

const future = [
  "M-Pesa & Stripe payments integration",
  "Tourist review and rating system",
  "Vendor analytics dashboard",
  "Email & SMS booking notifications",
  "Public listing discovery map",
  "Mobile app (React Native)",
];

const KnowCoast = function() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview", "features", "process", "challenges"];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-10 font-sans">

      {/* Back */}
      <motion.a
        href="#projects"
        custom={0} variants={fade} initial="hidden" animate="visible"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors no-underline mb-12"
      >
        <FaArrowLeft className="w-3 h-3" /> Back to Projects
      </motion.a>

      {/* Hero */}
      <motion.div custom={1} variants={fade} initial="hidden" animate="visible" className="mb-6">
        <span className="text-xs uppercase tracking-widest text-amber-600">Case Study</span>
      </motion.div>

      <motion.h1 custom={2} variants={fade} initial="hidden" animate="visible" className="text-5xl sm:text-6xl font-semibold tracking-tight mb-4">
        Know<span className="italic font-light">Coast</span>
      </motion.h1>

      <motion.p custom={3} variants={fade} initial="hidden" animate="visible" className="text-xl text-gray-500 max-w-2xl mb-6 leading-relaxed">
        A multi-vendor SaaS platform connecting tourists with local tour operators, guides, and Airbnb hosts along the Kenyan coast.
      </motion.p>

      <motion.div custom={4} variants={fade} initial="hidden" animate="visible" className="flex flex-wrap gap-2 mb-16">
        {["SaaS", "Tourism", "React", "Laravel", "In Development"].map(function(tag) {
          return (
            <span key={tag} className="text-xs uppercase tracking-widest text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
              {tag}
            </span>
          );
        })}
      </motion.div>

      {/* Status Banner */}
      <motion.div custom={5} variants={fade} initial="hidden" animate="visible" className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">Current Status</p>
          <p className="text-sm text-gray-700 font-medium">UI mostly complete · Backend in active development · Auth layer being refined</p>
        </div>
        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-600 font-medium whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
          Active Build
        </span>
      </motion.div>

      {/* Tabs */}
      <motion.div custom={6} variants={fade} initial="hidden" animate="visible" className="flex gap-1 border-b border-gray-100 mb-14">
        {tabs.map(function(tab) {
          return (
            <button
              key={tab}
              onClick={function() { setActiveTab(tab); }}
              className={"px-4 py-3 text-xs uppercase tracking-widest transition-colors border-b-2 -mb-px cursor-pointer bg-transparent " + (activeTab === tab ? "border-black text-black font-medium" : "border-transparent text-gray-400 hover:text-black")}
            >
              {tab}
            </button>
          );
        })}
      </motion.div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mb-20">
            <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Problem</p>
              <h2 className="text-2xl font-semibold mb-4">Tourism vendors are invisible online</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Kenya's coastal tourism economy runs largely on WhatsApp groups, word of mouth, and informal referrals. Tour operators, local guides, and Airbnb hosts have no unified platform to list services, manage bookings, or reach tourists directly.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Existing platforms like Airbnb or Booking.com are either too expensive, too generic, or inaccessible to small local vendors. The gap is real — and costly.
              </p>
            </motion.div>

            <motion.div custom={1} variants={fade} initial="hidden" animate="visible">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Solution</p>
              <h2 className="text-2xl font-semibold mb-4">A purpose-built vendor marketplace</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                KnowCoast gives coastal vendors a professional storefront — purpose-built for the Kenyan market. Vendors register, list services, and manage bookings from a clean dashboard. Tourists discover and book experiences without leaving the platform.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                The platform is designed for real-world conditions: low-friction onboarding, mobile-first UI, and an architecture that scales as vendors grow.
              </p>
            </motion.div>
          </div>

          {/* My Role */}
          <motion.div custom={2} variants={fade} initial="hidden" animate="visible" className="border border-gray-100 rounded-2xl p-8 mb-20">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">My Role</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "System Design", desc: "Designed the full data model, API structure, and user flows from scratch." },
                { label: "Frontend", desc: "Built the entire React UI — vendor dashboard, booking flows, auth pages." },
                { label: "Backend", desc: "Developed the Laravel REST API, database schema, and business logic." },
                { label: "Auth", desc: "Implemented Laravel Sanctum with role-based access for vendors and admins." },
              ].map(function(role, i) {
                return (
                  <div key={i} className="border-l-2 border-amber-400 pl-4">
                    <p className="text-sm font-semibold text-black mb-1">{role.label}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{role.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div custom={3} variants={fade} initial="hidden" animate="visible">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Tech Stack</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {stack.map(function(item, i) {
                return (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors">
                    <item.icon className={"w-7 h-7 " + item.color} />
                    <span className="text-xs text-gray-500">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}

      {/* Features Tab */}
      {activeTab === "features" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(function(f, i) {
            return (
              <motion.div key={i} custom={i} variants={fade} initial="hidden" animate="visible" className="border border-gray-100 rounded-2xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <h3 className="text-sm font-semibold text-black">{f.title}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-7">{f.desc}</p>
              </motion.div>
            );
          })}

          {/* Future */}
          <motion.div custom={6} variants={fade} initial="hidden" animate="visible" className="border border-dashed border-gray-200 rounded-2xl p-6 sm:col-span-2">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Planned Features</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {future.map(function(item, i) {
                return (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}

      {/* Process Tab */}
      {activeTab === "process" && (
        <div>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm text-gray-500 leading-relaxed">
              KnowCoast was built with a structured engineering process. I used AI-assisted tooling to accelerate initial UI scaffolding, then manually refined every component for consistency, responsiveness, and UX quality. Every architectural decision — from API design to auth flow — was made deliberately.
            </p>
          </div>
          <div className="space-y-6">
            {timeline.map(function(step, i) {
              return (
                <motion.div key={i} custom={i} variants={fade} initial="hidden" animate="visible" className="flex gap-6 border border-gray-100 rounded-2xl p-6">
                  <span className="text-3xl font-semibold text-gray-100 flex-shrink-0">{step.phase}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-2">{step.label}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Challenges Tab */}
      {activeTab === "challenges" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map(function(c, i) {
            return (
              <motion.div key={i} custom={i} variants={fade} initial="hidden" animate="visible" className="border border-gray-100 rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest text-amber-600 mb-2">Challenge {i + 1}</p>
                <h3 className="text-sm font-semibold text-black mb-3">{c.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Footer CTA */}
      <motion.div custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24 border-t border-gray-100 pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Interested in this project?</p>
          <p className="text-sm text-black font-medium">Let's talk about what I'm building.</p>
        </div>
        <a href="https://wa.me/254753879163" target="_blank" rel="noopener noreferrer" className="no-underline">
          <button className="bg-black text-white text-xs uppercase tracking-widest px-6 py-3 rounded-sm hover:opacity-80 transition-opacity border-none cursor-pointer">
            Get In Touch
          </button>
        </a>
      </motion.div>

    </div>
  );
};

export default KnowCoast;