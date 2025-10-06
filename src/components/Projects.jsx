import React from 'react'
import a from '../assets/a9 (1).png'
import saf from '../assets/safarm.png'
import bl from '../assets/building.png'
import sec from '../assets/security.png'

const Projects = () => {
  const screens = [
    {
      img: saf,
      title: "SaFarm Website",
      link: "https://safarm.netlify.app",
      description: "A fullstack farm website. Backend is available on my GitHub."
    },
    {
      img: a,
      title: "Dog Training Website (Frontend)",
      link: "https://a9dogschoolnetlifyapp.netlify.app",
      description: "A simple frontend for a dog training school."
    },
    {
      img: bl,
      title: "Building Website",
      link: "https://ahconst.netlify.app",
      description: "A company website for a construction business."
    },
    {
      img: sec,
      title: "Security Website (Frontend)",
      link: "https://b-security56.netlify.app",
      description: "A frontend for a security firm website."
    }
  ]

  return (
    <div id="projects" className="mt-10 px-6 sm:px-20 py-10">
      <h2 className="text-2xl sm:text-3xl  text-black text-center mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {screens.map((project, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <img 
              src={project.img} 
              alt={project.title} 
              className="rounded-lg shadow-md object-cover w-full h-48" 
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">{project.title}</h3>
            <p className="text-gray-600 text-sm text-center">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-500 text-sm hover:underline text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
