import NavBar from '../components/navBar'
import Footer from '../components/footer'
import React from 'react'
import Head from 'next/head'
import Gallery from '../components/gallery'



const Home = () => {
  return (
    <>
    <Head>
        <title>The FinalFest</title>
        <link rel="icon" href="/party.ico" />
      </Head>
    <div className='bg-bgPurple md:bg-disco bg-cover text-black w-screen h-max'>
      <NavBar />
      <section className='p-6'>
        <h1 className='flex text-4xl font-title backdrop-blur-sm bg-white/20 text-violet-600 justify-center mx-auto'>
          The FinalFest
        </h1> 
        <h2 className='text-center italic my-2 backdrop-blur-sm bg-white/20 text-white'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, illum!
        </h2>
        <Gallery />
      </section>   
      <Footer /> 
    </div>
    </>
  )
}

export default Home