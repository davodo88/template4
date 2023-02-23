import React from 'react'

const Ubication = () => {
  return (
    <section className='bg-neutral-100/40 rounded my-4 md:m-4 py-10 md:p-4'>
      <p className='font-bold text-center m-4'>- Were we are? -</p>
      <div className='flex flex-col md:flex-row bg-neutral-100/10 p-4'>
        <div className='md:w-1/2 text-center md:text-justify p-4 gap-2 flex flex-col'>
          <span className='font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis. Inventore 
            beatae officia totam. Praesentium impedit modi a magnam reprehenderit.
          </span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, cupiditate.
          </span>
          <span className='font-title'>
            CP: 2098122
          </span>
        </div>
        <div className='md:w-1/2 md:pl-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63876.96397707028!
        2d-0.4012537754563586!3d39.503386023345364!2m3!1f0!2f0!3f0!3m2!1
        i1024!2i768!4f13.1!3m3!1m2!1s0xd605ba92cb6e0e1%3A0x3f631d0982d84972!2sLa%20Vallesa!5e0!3m2!1ses!2ses!
        4v1676881120654!5m2!1ses!2ses"  loading="lazy"
            className='rounded-lg w-full h-full' >
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default Ubication