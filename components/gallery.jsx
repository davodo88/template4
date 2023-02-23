import React from 'react'
import Photo1 from '../images/gallery/bandera.jpg'
import Photo2 from '../images/gallery/escenarioCorona.jpg'
import Photo3 from '../images/gallery/calavera.jpg'
import Photo4 from '../images/gallery/fuegosArtificiales.jpg'
import Photo5 from '../images/gallery/fireArt.jpg'
import Photo6 from '../images/gallery/escenario2.jpg'
import Image from 'next/image'






const Gallery = () => {

  return (
    <div className='h-max text-white'>
      <h1 className=''>Gallery</h1>
      <div className="grid grid-cols-2 bg-purple-600/30 gap-2 
        backdrop-blur-sm p-2">
        <Image src={Photo1} width={1250} height={1250} 
          className="w-max h-full rounded"/>
        <Image src={Photo2} width={1250} height={1250}
          className="w-max h-full rounded" />
        <Image src={Photo3} width={1250} height={1250}
          className="w-max h-full rounded" />
        <Image src={Photo5} width={1250} height={1250} 
          className=" w-max h-full rounded row-span-2"/>
        <Image src={Photo4} width={1250} height={1250} 
          className=" w-max h-full rounded"/>
        <Image src={Photo6} width={1250} height={1250} 
          className=" w-max h-full rounded col-span-2"/>
      </div>
    </div>
  )
}

export default Gallery