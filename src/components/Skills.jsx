import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaPhp, FaGitAlt, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMysql, SiMongodb, SiPostman, SiVercel, SiNetlify, SiTypescript } from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-sky-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "WordPress", icon: FaWordpress, color: "text-blue-700" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-600" },
      { name: "REST APIs", icon: SiPostman, color: "text-orange-500" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-black" },
      { name: "Vercel", icon: SiVercel, color: "text-black" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-gray-100 px-4 sm:px-8 md:px-16 lg:px-24">

      <motion.p
        custom={0} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-xs uppercase tracking-widest text-amber-600 mb-3 text-center"
      >
        What I Work With
      </motion.p>

      <motion.h2
        custom={1} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-14"
      >
        Skills & <span className="italic font-light">Technologies</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            custom={ci + 2} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border border-gray-100 rounded-2xl p-6"
          >
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-5">
              {cat.label}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  custom={si} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                >
                  <skill.icon className={"w-7 h-7 " + skill.color} />
                  <span className="text-xs text-gray-500 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;