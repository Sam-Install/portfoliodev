import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b bg-gray-200 text-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center space-y-4">
        
        <h1 className="text-xl font-semibold text-black">Samy Nderi</h1>

        <p className="text-center text-sm text-gray-600">
          Built with React & Tailwind, deployed on Netlify
        </p>

        {/* Social Links */}
        <div className="flex space-x-5 text-gray-700">
          <a href="https://github.com/Sam-Install"  target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5 hover:text-black" />
          </a>
         
          <a href="mailto:butchercodeske@gmail.com">
            <FaEnvelope className="w-5 h-5 hover:text-red-500" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          © 2025 Samy Nderi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
