import React, { useState, useEffect } from 'react'

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration)

  useEffect(()=> {
    setTimeout(() => {
      setTime(time - 1000);
    },1000);
  },[time]);

  const getFormatedTime = (milliseconds) => {
      let total_seconds = parseInt(Math.floor(milliseconds / 1000))
      let total_minutes = parseInt(Math.floor(total_seconds / 60))
      let total_hours = parseInt(Math.floor(total_minutes / 60))
      let days = parseInt(Math.floor(total_hours / 24))

      let seconds = parseInt(total_seconds % 60)
      let minutes = parseInt(total_minutes % 60)
      let hours = parseInt(total_hours % 24)

    return (
      <div className='flex flex-col backdrop-blur-md text-center 
        w-auto h-4/5 p-10 gap-y-5 text-xl md:flex-row md:gap-x-10 md:text-3xl'>
        <span className='text-blue-400 tabular-nums'>{days} Days</span>
        <span className='text-blue-400 tabular-nums'>{hours} Hours</span>
        <span className='text-blue-400 tabular-nums'>{minutes} Minutes</span>
        <span className='text-blue-400 tabular-nums'>{seconds} Seconds</span>
      </div>
    )
  }

  return (
    <div className='flex justify-center m-auto bg-white/10 rounded border-2 border-purple-800'>
      <span className='m-auto g text-white '>
        {getFormatedTime(time)}
      </span>
    </div>
  )
}

export default Timer