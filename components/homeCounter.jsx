import Link from 'next/link'
import React from 'react'
import Timer from '../components/atoms/timer'


const HomeCounter = () => {
  return (
    <div className='flex flex-col h-[75%] w-[75%] m-auto gap-y-10 '>
      <h1 className='text-6xl text-white text-center tracking-wide'>
        Welcome To The FinalFest!
      </h1>
      <Timer duration={ 10 * 24 * 60 * 60 * 1000 }/>
      <button type='button'
        className="animate-pulse
        w-max m-auto flex rounded-xl border-2 border-[#b436b8] 
        px-6 py-3 text-[#bc1fb9] shadow-[inset_0px_0px_5px_1px_]
        shadow-fuchsia-500">
        <Link href="/home">
          Go In!
        </Link>
      </button>
    </div>
  )
}

export default HomeCounter