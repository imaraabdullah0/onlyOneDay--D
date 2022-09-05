import React  from 'react';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaBars
} from 'react-icons/fa';

const Navbar = () => {

const [nav,setNav]=useState(false)

const handleNav = () => {
  setNav (!nav);
}

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-gray-300 bg-opacity-40 bg-opacity-1[60%] '>
      <div>
      <h1 className='cursor-pointer translate-x-6 text-4xl font-extrabold hover:text-teal-100 drop-shadow-md'>BEACHES.</h1>
      </div>
        
          <ul className='mx-3 hidden md:flex  '>
            <li className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700'>HOME</li>
            <li className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700'>TRAVEL</li>
            <li className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700'>BEACHES</li>
            <li className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700'>BOOK</li>
            <li className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700'>RATE</li>
          </ul>
        <div className='hidden md:flex '>
            <BiSearch className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700' size={20}/>
            <BsPerson className='mx-3 cursor-pointer font-bold hover:translate-y-1 hover:text-emerald-700' size={20}/>
        </div>

              {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10 hover:text-emerald-200 drop-shadow-lg'>
        {nav ? <AiOutlineClose className='text-black hover:text-emerald-200 drop-shadow-lg' size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar