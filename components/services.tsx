import React from 'react'




const servi = [  
  {name:"Restaurants"}, 
  {name:"FoodTruck"}, 
  {name:"W.C & Showers"},
  {name:"Pool"} 
]




const Services = () => {
  return (
    <div className='text-center p-4'>
      <h1 className='my-4 underline underline-offset-2 text-xl'>
        Services
      </h1>
      <ul className='flex flex-col md:grid md:grid-cols-2 gap-4'>
      {
        servi.map(
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

export default Services