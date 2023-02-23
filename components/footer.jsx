import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faPizzaSlice, faPlaneUp, faStore } from '@fortawesome/free-solid-svg-icons'
import Insta from './atoms/insta'
import Youtube from './atoms/youtube'
import Twitter from './atoms/twitter'







const pratrocinadores = [
  {name: "redBlue", icon: faBeer},
  { name: "SkyFly", icon: faPlaneUp },
  {name: "YuStore", icon: faStore},
  {name: "Pizzolino", icon: faPizzaSlice},
]


const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row bg-gradient-to-b from-transparent to-neutral-500 w-screen h-max text-black p-4'>
      <div className=' p-6 min-w-max md:w-1/3 '>
        <h2 className='text-lg text-purple-700 font-bold text-center'>
          Our Sponsors
        </h2>
        <ul className=' w-max mx-auto text-center my-2'>
          {
            pratrocinadores.map((sponsor, index) => {
              return (
                <li key={index}
                className="flex">
                  <span className='font-bold' >{sponsor.name}</span>
                  <FontAwesomeIcon icon={sponsor.icon} className="ml-2 w-4 md:w-5" />
                </li>
              )
            })
          }
        </ul>
        <div className='flex mx-auto md:gap-2 w-max'>
          <Insta />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className='p-6 min-w-max md:w-1/3 '>
        <h2 className='text-lg font-bold text-center underline'>
          Some Links
        </h2>
        <ul className='text-center mt-2'>
          <li className='hover:underline'>
            F.A.Q
          </li>
          <li className='hover:underline'>
            Cookies Police
          </li>
          <li className='hover:underline'>
            Terms Of Service
          </li>
          <li className='hover:underline'>
            Support
          </li>
          <li className='hover:underline'>
            Contact
          </li>
        </ul>
      </div>
      <div className='p-6 min-w-max md:w-1/3 '>
        <h2 className='text-lg font-bold text-center underline text-white'>
          Newsletter
        </h2>
        <form className='flex flex-col w-2/3 md:w-1/3 rounded
          gap-y-3 mx-auto my-4'>
          <input type="email" placeholder='Your Email Here' 
            className='h-max py-3'
          />
          <button type='submit'
            className='h-max py-3 bg-purple-600 rounded'>
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer