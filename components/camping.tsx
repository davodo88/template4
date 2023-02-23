import React from 'react'




const sleep = [  
  {name:"Grapling"}, 
  {name:"WoodHouse"}, 
  {name:"Caravaning"},
  {name:"Hotel"} 
]




const Camping = () => {
  return (
    <div className='text-center p-4'>
      <h1 className='my-4 underline underline-offset-2 text-xl'>
        Camping
      </h1>
      <ul className='flex flex-col md:grid md:grid-cols-2 gap-4'>
      {
        sleep.map(
          (how, index) => {
            return (
              <li key={ index }
              className='hover:underline'>
                {how.name}
              </li>
            )
          }
        )
      }
      </ul>
    </div>
  )
}

export default Camping