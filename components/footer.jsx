import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBottleWater, faPizzaSlice, faPlaneUp, faStore } from '@fortawesome/free-solid-svg-icons'
import Insta from './atoms/insta'
import Youtube from './atoms/youtube'
import Twitter from './atoms/twitter'







const pratrocinadores = [
  {name: "redBlue", icon: faBottleWater},
  { name: "SkyFly", icon: faPlaneUp },
  {name: "YuStore", icon: faStore},
  {name: "Pizzolino", icon: faPizzaSlice},
]


const Footer = () => {
  return (
    <footer className='absolute bottom-0 bg-neutral-200 justify-evenly
        text-center md:flex w-screen h-[190px] md:h-[130px] text-black py-4'>
      <div className='flex-col mx-auto md:mx-0 w-max md:justify-around'>
        <h3>Our Sponsors</h3>
        <div className='flex flex-col flex-wrap md:flex-row
          w-2/3 md:justify-around mx-auto '>
          {pratrocinadores.map((patrocinador, index) => {
            return (
              <div className='w-max flex-col '>
                <span key={index}
                  className="text-black  gap-x-5  ">
                  {patrocinador.name}
                  <FontAwesomeIcon icon={patrocinador.icon}
                    className="mx-2 " />
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex justify-center gap-x-2 my-2 md:w-1/2'>
        <span className='underline'>Follow Us:</span>
          <Insta />
          <Youtube />
          <Twitter />
      </div>
    </footer>
  )
}

export default Footer