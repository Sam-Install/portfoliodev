import React from 'react'
import pr from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <div className='mt-2 flex  items-center justify-center'>

        <div className='flex flex-col items-center'>

            <img src={pr} alt="portfolio-image" className='w-40 h-40 rounded-full object-cover mt-6' />


         

        </div>

      
    </div>
  )
}

export default Hero