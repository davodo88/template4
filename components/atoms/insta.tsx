import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';



const Insta = () => {
  return (
        <div className='flex w-max rounded-full h-8 group hover:px-2 transition-all
        hover:border-2 hover:border-gray-800 hover:bg-gray-500 hover:text-white'>
          <a href="https://www.instagram.com">
          <AiOutlineInstagram
            className="w-6 h-6" />
          </a>
          <span className='hidden group-hover:inline-flex'>
            INSTAGRAM
          </span> 
        </div>
    )
}

export default Insta