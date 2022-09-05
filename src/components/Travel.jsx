import React from 'react';
import beach1 from '../photo/beach1.png';
import beach2 from '../photo/beach2.png';
import beach3 from '../photo/beach3.png';
import beach4 from '../photo/beach4.png';
import beach5 from '../photo/beach5.png';


const Travel = () => {
  return (
    <div className='w-full h-full my-4 p-4 max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <div className=''>
        <h1 className='text-2xl text-gray-400 font-extrabold drop-shadow-md'>All-Inclusive Resort</h1>
        <p className='text-lg bg-clip-text font-mono drop-shadow-lg'>On The Caribbean's Best Beaches</p>
      </div>
      <div className='border border-slate-500 rounded-lg px-2 grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 hover:opacity-[70%] hover:translate-x-1 cursor-pointer' src={beach1} alt='/'/>
        <img className='w-full h-full object-cover  hover:opacity-[70%] hover:translate-x-1 cursor-pointer ' src={beach2} alt='/'/>
        <img className='w-full h-full object-cover  hover:opacity-[70%] hover:translate-x-1 cursor-pointer' src={beach3} alt='/'/>
        <img className='w-full h-full object-cover  hover:opacity-[70%] hover:translate-x-1 cursor-pointer' src={beach4} alt='/'/>
        <img className='w-full h-full object-cover  hover:opacity-[70%] hover:translate-x-1 cursor-pointer' src={beach5} alt='/'/>
      </div>
      
    </div>
  )
}

export default Travel