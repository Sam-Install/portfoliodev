import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="mt-10 px-6 sm:px-20 py-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Skills
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Frontend</h3>
          <p className="text-gray-600">React, TailwindCSS, JavaScript (ES6+), HTML, CSS</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Backend</h3>
          <p className="text-gray-600">Laravel, PHP, REST APIs</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Database</h3>
          <p className="text-gray-600">MySQL MongoDB</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Tools</h3>
          <p className="text-gray-600">Git & GitHub, Postman, Vercel / Netlify</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
