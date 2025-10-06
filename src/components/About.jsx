import React from 'react'
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className='mt-2 px-6 sm:px-20 py-10'>
      
      <h1 className='text-2xl text-center'>Hello World ! Am Samy Nderi </h1>

      <p className='text-center mt-4 leading-relaxed'>
        A passionate full-stack developer with a focus on building modern, responsive, 
        and user-friendly web applications. I enjoy working with technologies like 
        <span className="text-yellow-600"> Laravel</span>, 
        <span className="text-blue-600"> React</span>, 
        <span className="text-teal-600"> TailwindCSS</span>, 
        and learning the <span className="text-green-600">MERN stack</span>. 
      </p>

      <p className='text-black text-center leading-relaxed mt-4'>
        My journey in web development has been driven by curiosity and the 
        excitement of turning ideas into functional products. I love solving 
        real-world problems through code, collaborating with others, and 
        constantly sharpening my skills to stay updated in the ever-evolving 
        tech world.
      </p>

      {/* Contact Icons */}
      <div className="flex justify-center space-x-6 mt-6 text-gray-700">
        <a 
          href="https://github.com/Sam-Install" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 hover:text-black" />
        </a>

        <a href="mailto:butchercodeske@gmail.com">
          <FaEnvelope className="w-6 h-6 hover:text-red-500" />
        </a>

        <a 
          href="https://wa.me/254753879163" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-6 h-6 hover:text-green-600" />
        </a>
      </div>
    </div>
  )
}

export default About
