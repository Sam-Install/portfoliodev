import React from "react";
import { motion } from "framer-motion";
import a from "../assets/a9 (1).png";
import saf from "../assets/safarm.png";
import bl from "../assets/building.png";
import sec from "../assets/security.png";
import br from "../assets/barber.png";
import gl from "../assets/ganillah.png";

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

const Projects = () => {
  const screens = [
    {
      img: saf,
      title: "SaFarm Website",
      link: "https://safarm.netlify.app",
      description: "A full-stack farm website. Backend available on GitHub.",
    },
    {
      img: a,
      title: "Dog Training Website (Frontend)",
      link: "https://a9dogschoolnetlifyapp.netlify.app",
      description: "A simple frontend for a dog training school.",
    },
    {
      img: bl,
      title: "Building Website",
      link: "https://ahconst.netlify.app",
      description: "A company website for a construction business.",
    },
    {
      img: sec,
      title: "Security Website (Frontend)",
      link: "https://b-security56.netlify.app",
      description: "A frontend website for a security firm.",
    },
    {
      img: br,
      title: "Barbershop Landing Page",
      link: "https://salbarbershop.netlify.app/",
      description: "Frontend landing page, backend coming soon.",
    },
    {
      img: gl,
      title: "Ganillah Waters Website",
      link: "https://ganillahwaters.netlify.app/",
      description: "Website for a water company (drilling & plumbing).",
    },
  ];

  return (
    <motion.div
      id="projects"
      className="mt-10 px-6 sm:px-20 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl text-black text-center mb-10 font-semibold"
        variants={itemVariants}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {screens.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col space-y-3"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 text-sm hover:underline text-center"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        className="flex justify-center mt-12"
        variants={itemVariants}
      >
        <a
          href="https://github.com/Sam-Install"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition"
        >
          See more projects on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
