import React from 'react'


const pratrocinadores = [
  {name: "redBlue", icon: ""},
  {name: "redBlue", icon: ""},
  {name: "redBlue", icon: ""},
  {name: "redBlue", icon: ""},
]


const Footer = () => {
  return (
    <div className='text-white absolute bottom-0 w-screen bg-teal-200/90 mt-20
      shadow-teal-500/75 shadow-[_0px_-15px_30px_5px_] flex flex-col 
      md:flex-row'>
      {pratrocinadores.map((patrocinador, index) => {
        return (
          <span key={index}>
            {patrocinador.name}
          </span>
        )
      })}
    </div>
  )
}

export default Footer