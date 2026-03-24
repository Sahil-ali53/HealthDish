 import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Menu, ShoppingCart, User } from "lucide-react";

function Header() {
    const[showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <>
     <header className="  bg-white border-b border-gray-200 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white size-10 rounded-lg flex items-center justify-center">
              <span className="text-xl">🥗</span>
            </div>
            <span className="text-2xl text-gray-900">HealthDish</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Menu
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart  className="size-6 text-gray-700 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs size-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button variant="ghost" className="hidden sm:flex gap-2" >
               <User className="size-5" />
              Sign In
            </button>
            <button className="bg-green-500 rounded-xl py-2 px-1.5 hover:bg-green-700 text-white hidden sm:block">
               
              Sign Up
            </button>
           
           
            <button className="md:hidden p-2">
              <Menu onClick={()=> setShowMobileMenu(true)} className="size-6 text-gray-700 cursor-pointer" />
            </button>
          </div>
        </div>
        <div className= {`md:hidden  ${showMobileMenu ? `fixed w-80` : `h-0 w-0 `}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} >
        <div onClick={()=> setShowMobileMenu(false)} className=" flex justify-end p-6 cursor-pointer transition-all">
            <i className="  text-2xl w-3 fa-regular fa-circle-xmark"></i>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg  font-medium'>
           <button className=' px-4 py-4 rounded-full inline-block cursor-pointer hover:text-blue-500' >Home</button>
           <button className=' px-4 py-4 rounded-full inline-block cursor-pointer hover:text-blue-500' >About</button>
           <button className=' px-4 py-4 rounded-full inline-block cursor-pointer hover:text-blue-500' >Project</button>
           <button className=' px-4 py-4 rounded-full inline-block cursor-pointer hover:text-blue-500' >Testimonails</button>
           <button className='  md:block bg-amber-200 px-8 py-2 rounded-full cursor-pointer'>Sign up</button>
        </ul>
      </div>
      </div>
    </header>

    </>
  )
}

export default Header