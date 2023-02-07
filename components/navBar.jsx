import Link from 'next/link'
import React, {  useState } from 'react'
import { classNames } from '@/utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const options = [
  {id: 'Home', src:"/home"},,
  {id: 'Info', src:"/home"},,
  {id: 'Artists', src:"/home"},,
  {id: 'Buy Tickets', src:"/"},,
]




const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [iconMenu, setIconMenu] = useState(false)

  const handleShow = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
    iconMenu ? setIconMenu(false) : setIconMenu(true)
  }


  return (
    <nav className='text-black pt-[10%] md:pt-0 px-2 md:px-0'>
      <div 
      className={classNames("flex flex-col md:hidden backdrop-blur rounded text-center justify-around shadow-[inset_0px_0px_15px_10px_rgba(0,0,0,0.3)] w-[1/2] text-white"
      ,showMenu == false ? 
      "backdrop-blur-none shadow-none" : "" 
      )}
      >
        <button onClick={handleShow}
          className={classNames("ml-4 w-auto mt-2 text-4xl flex",)}>
            <FontAwesomeIcon icon={faBars}
              className={classNames("flex text-black w-[15%] ",
                iconMenu ? "rotate-90" : "")} />
        </button>
        {showMenu && (
          <ul className='flex flex-col my-20 gap-y-8'>
            {options.map((option, index) => {
              return (
                <li key={index} className="text-2xl text-black hover:underline">
                  <Link href={option.src}>
                    {option.id}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className='hidden md:flex bg-black/30 backdrop-blur-lg'>
        <ul className='flex py-5 w-screen justify-evenly'>
          {options.map((option, index) => {
            return (
              <li key={index}
              className="text-2xl uppercase hover:underline underline-offset-8 ">
                <Link href={option.src}>
                  {option.id}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar