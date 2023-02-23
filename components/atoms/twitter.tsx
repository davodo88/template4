import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';



const Twitter = () => {
  return (
    <div className='flex transition-all w-max rounded-full group h-8
        hover:border-2 hover:px-2 hover:border-gray-800 hover:bg-gray-500 hover:text-white'>
          <a href="https://www.twitter.com">
            <AiOutlineTwitter className='w-6 h-6 flex'/>
          </a>
          <span className='hidden md:group-hover:inline-flex'>
            TWITTER
          </span> 
    </div>
  )
}

export default Twitter