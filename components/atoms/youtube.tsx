import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai';


const Youtube = () => {
  return (
    <div className='flex w-max rounded-full group h-8 transition-all hover:px-2
        hover:border-2 hover:border-gray-800 hover:bg-gray-500 hover:text-white'>
          <a href="https://www.youtube.com">
            <AiOutlineYoutube className='w-8 h-6'/>
          </a>
          <span className='hidden md:group-hover:inline-flex'>
            YOUTUBE
          </span> 
        </div>
  )
}

export default Youtube