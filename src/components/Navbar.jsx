

import React from 'react'
import 'animate.css';
import logo from '../assets/logo.jpeg'; 
import logo2 from '../assets/TKC.png'; 
import logo3 from '../assets/Intutive-Global.png'; 

const Navbar = () => {
  return (
    <div className='animate__animated animate__fadeInDown'>
         {/* Navbar */}
        <nav className="p-6 bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold text-[#ff3130]-800">MyBrand</h1> */}
          <img src={logo3} alt="Logo" className="h-15 w-15" />
          <button className="bg-[#ff3130] text-white px-6 py-2 rounded-lg hover:bg-[#ff3130] transition duration-300">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
