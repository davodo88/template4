import React, { useState } from 'react'
import Image from 'next/image'




const Targets = ( { name, music, avatar, time } ) => {

  const [info, setInfo] = useState(false)


  const showInfo = () => {
    info ? setInfo(false) : setInfo(true)
  }

  return (
    <div className='w-screen md:w-1/2 my-10 gap-5 flex flex-col md:flex-row 
    bg-gradient-to-r from-cyan-600 to-purple-500 
    shadow-md shadow-black rounded-2xl mx-auto group'>
      <div className='w-1/2 mx-auto '>
        <Image src={avatar}
          width={200}
          height={200}
          alt="Avatar"
          className="w-max h-max mx-auto md:mx-0 rounded-2xl"
        />
      </div>
      <div className=' md:w-1/2 h-full relative flex flex-row md:flex-col 
      transition-all md:justify-evenly'>
        <div className='flex flex-col w-max h-max mx-auto'>
          <p className='w-max flex m-auto text-xl font-semibold'> 
            {name} 
          </p>
          <p className='w-max flex m-auto'> 
            - {music} - 
          </p>
        </div>
        {info && (
          <div className='flex mx-auto'>
            {`The show starts at ${time} AM`}
          </div>
          )
        }
        <button onClick={showInfo}
        className="absolute bottom-4 right-7 w-max h-4 animate-pulse flex flex-row">
          <span className='hidden md:inline'>INFO</span> +
        </button>
      </div>
    </div>
  )
}

export default Targets