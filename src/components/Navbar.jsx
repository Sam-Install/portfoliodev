import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = ["home", "about", "skills", "projects"];

  return (
    <>
      {/* Navbar */}
      <motion.div
        className="flex items-center justify-between font-medium py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-black">Samy Nderi</h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-4 text-sm text-black">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="flex flex-col items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="capitalize">{item}</p>
              <hr className="w-2/4 border-none bg-amber-500 h-[1.5px] hidden" />
            </motion.a>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex gap-2 items-center">
          <CiMenuBurger
            className="text-2xl sm:hidden cursor-pointer"
            onClick={() => setVisible(true)}
          />

          <a
            href="https://wa.me/254753879163"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-white border border-black text-black px-3 py-2 text-sm rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 bg-white z-50 w-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col text-gray-950">
              <div className="flex items-center gap-4 p-4">
                <FaArrowLeft
                  className="text-2xl cursor-pointer"
                  onClick={() => setVisible(false)}
                />
                <p>Back</p>
              </div>

              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setVisible(false)}
                  className="py-3 pl-6 border-b"
                  whileHover={{ scale: 1.05, backgroundColor: "#fef3c7" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
