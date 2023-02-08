import NavBar from '../components/navBar'
import Footer from '../components/footer'
import React from 'react'

const Home = () => {
  return (
    <div className=' text-black bg-gradient-to-b from-sky-200 to-sky-600
    w-screen h-screen'>
      <NavBar />
      <section className='border-2 border-black px-4 m-4'>
        <h1 className='flex text-2xl justify-center mx-auto'>
          The FinalFest
        </h1> 
        <h2 className='text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, illum!
        </h2>
      </section>   
      <Footer /> 
    </div>
  )
}

export default Home