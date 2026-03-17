import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

const menuItems = ["home", "about", "skills", "projects"];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <motion.div
        className="flex items-center justify-between py-5 font-medium border-b border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-black font-semibold tracking-tight">Samy Nderi</h1>

        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {menuItems.map((item) => (
            <motion.li key={item} whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href={"#" + item} className="text-sm capitalize text-gray-400 hover:text-black transition-colors no-underline">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <CiMenuBurger
            className="text-2xl sm:hidden cursor-pointer"
            onClick={() => setVisible(true)}
          />
          <a href="https://wa.me/254753879163" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-black text-white px-4 py-2 text-xs uppercase tracking-widest rounded-sm border-none cursor-pointer"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 bg-white z-50 w-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3 p-5 border-b border-gray-100">
              <FaArrowLeft className="text-xl cursor-pointer text-gray-400 hover:text-black" onClick={() => setVisible(false)} />
              <span className="font-semibold tracking-tight">Samy Nderi</span>
            </div>

            <div className="flex flex-col mt-2">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={"#" + item}
                  onClick={() => setVisible(false)}
                  className="py-4 px-6 text-sm capitalize text-gray-500 hover:text-black border-b border-gray-100 no-underline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 6, color: "#000" }}
                >
                  {item}
                </motion.a>
              ))}

              <div className="px-6 mt-6">
                <a href="https://wa.me/254753879163" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-black text-white text-xs uppercase tracking-widest py-3 rounded-sm border-none cursor-pointer">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;