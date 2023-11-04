import React, { useState } from 'react'
import {Bars3Icon, SunIcon, PhoneIcon, AtSymbolIcon, XMarkIcon} from "@heroicons/react/24/outline"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-28 h-full flex fixed'>
      <MobileNav isOpen={isOpen}/>
      <FixedNav isOpen={isOpen} setIsOpen={setIsOpen}/>         
    </nav>
  )
}

export default Navbar

function MobileNav({isOpen}){
  return(
        <div className={`${isOpen ? "block" : "hidden"} w-16 p-1 border-2 border-black mr-2`}>
          <ul className='text-xs font-bold flex flex-col gap-y-5 mt-10'>
            <li className='border-b-2 border-black py-2 px-1'>
              <a href="#">Section1</a>
            </li>
            <li className='border-b-2 border-black py-2 px-1'>
              <a href="#">Section2</a>
            </li>
            <li className='border-b-2 border-black py-2 px-1'>
              <a href="#">Section3</a>
            </li>
          </ul>
      </div>
  )
}

function FixedNav({isOpen, setIsOpen}){

  return(
      <div className='w-12 flex flex-col justify-between items-center p-3 border-2 border-black'>
          <button 
          onClick={()=> setIsOpen((is)=> !is)}
          className={`border-2 border-black rounded-full p-1 ${"md:hidden"}`}>
            {
              isOpen ? <XMarkIcon className="w-8 h-8"/> : <Bars3Icon className="w-8 h-8"/>
            }
            </button>
            <button className={`border-2 border-black rounded-full p-1 text-sm hidden ${"md:flex"}`}>LOGO😍</button>
          <ul className='flex flex-col gap-y-2'>
            <li className='border-2 border-black rounded-full p-1'>
              <button><SunIcon className='w-8 h-8'/></button>
            </li>
            <li className='border-2 border-black rounded-full p-1'>
              <a href="#"><PhoneIcon className='w-7 h-7'/></a>
            </li>
            <li className='border-2 border-black rounded-full p-1'>
              <a href="#"><AtSymbolIcon className='w-7 h-7'/></a>
            </li>
          </ul>
      </div> 
  )
}