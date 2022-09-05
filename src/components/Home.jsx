import React from 'react';
import beachbg from '../photo/beachbg.png';

const Home = () => {
  return (
    <div className='w-full h-full flex'>
    <div className='w-full h-screen relative'>
    <img src={beachbg} alt='/' className=' opacity-[70%] w-full h-full object-cover'/>
    </div>
    
   
    
        <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30 text-center   '>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 items-center'>
            <h1 className='my-2 text-4xl drop-shadow-lg font-extrabold'>FIRST CLASS TRAVEL</h1>
            <p className='my-2 text-xl drop-shadow-lg font-extrabold'>Top 1% Locations Worldwide</p>
            <input type='search' className='my-2 border w-[400px]  bg-purple-50 rounded-lg text-gray-700 font-bold drop-shadow-lg p-1'></input>
            <button className='my-2 border border-teal-200 w-20  rounded-md bg-teal-200 opacity-[80%] text-white font-extrabold text-sm p-1 drop-shadow-lg hover:bg-green-500'>Search</button>
            </div>
        </div>
       
    </div>

  )
}

export default Home