import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";


const Navbar = () => {

    const [visible , setVisible] = useState(false);

  return (
    <div className='flex items-center  justify-between font-medium py-5 '>

        <h1 className='text-black items-center '>Samy Nderi</h1>

        <ul className='hidden sm:flex gap-4 text-sm text-black'>

           <a href='#home' className='flex flex-col items-center gap-1'>

            <p>Home</p>
            <hr className='w-2/4 border-none bg-amber-500 h-[1.5px] hidden' />

           </a>


              <a href='#about' className='flex flex-col items-center gap-1'>

            <p>About</p>
            <hr className='w-2/4 border-none bg-amber-500 h-[1.5px] hidden' />

           </a>


            <a href='#skills' className='flex flex-col items-center gap-1'>

            <p>Skills</p>
            <hr className='w-2/4 border-none bg-amber-400 h-[1.5px] hidden' />

           </a>

            <a href='#projects'  className='flex flex-col items-center gap-1'>

            <p>Projects</p>
            <hr className='w-2/4 border-none bg-amber-500 h-[1.5px] hidden' />

           </a>

        </ul>

    
<div className='flex gap-2 items-center justify-between'>


    <CiMenuBurger className='text-2xl sm:hidden' onClick={()=>setVisible(true)} />
       <a href="https://wa.me/254753879163" target="_blank">
    <button className='bg-white border border-black text-black px-3 py-2 text-sm rounded'>ContactMe</button>

           </a>

</div>


<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>

    <div className='flex flex-col text-gray-950'>

        <div className='flex items-center gap-4 p-3'>

<FaArrowLeft className='text-2xl' onClick={()=>setVisible(false)} />
<p>back</p>

        </div>

        <a  onClick={()=>setVisible(false)} href='#home' className='py-2 pl-6 border'>Home</a>
        <a onClick={()=>setVisible(false)} href='#about' className='py-2 pl-6 border'>About</a>
        <a onClick={()=>setVisible(false)} href='#skills' className='py-2 pl-6 border'>Skills</a>
        <a onClick={()=>setVisible(false)} href='#projects' className='py-2 pl-6 border'>Projects</a>

    </div>

</div>




    </div>

    
  )
}

export default Navbar
