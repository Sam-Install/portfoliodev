import React from "react";
import { motion } from "framer-motion";
import pr from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={pr}
          alt="portfolio-image"
          className="w-40 h-40 rounded-full object-cover mt-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
