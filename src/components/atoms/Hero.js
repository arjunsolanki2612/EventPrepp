import React from 'react'
import { FaCalendar } from 'react-icons/fa';
import '../../App.css'

const Hero = () => {
  return (
    <div className='body flex flex-row items-center justify-center gap-6 p-4 m-2'>
      <div className='text-gray-100'>
        <h1 className='text-4xl font-medium'>Lorem ipsum dolar ruppes</h1>
        <p className='text-base'>something something something</p>
        <div className='flex flex-row items-center gap-4 my-4'>
          <p className='text base'>26th September, 2024</p>
          <FaCalendar className='text-base'/>
        </div>
      </div>
      <div className='flex bg-yellow-400 w-[23rem] h-[23rem] rounded-xl items-end'>
        <div className='flex bg-purple-800 w-[22rem] h-[22rem] rounded-xl items-end'>   
          <img src="https://avatars.githubusercontent.com/u/84636204?v=4" className='rounded-xl w-80 h-80 m-2'/>
        </div>
      </div>
    </div>
  )
}

export default Hero