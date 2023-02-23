import NavBar from '../components/navBar'
import Footer from '../components/footer'
import React from 'react'
import Avatar1 from '../images/avatars/avatar1.jpg'
import Avatar2 from '../images/avatars/avatar2.jpg'
import Avatar3 from '../images/avatars/avatar3.jpg'
import Avatar4 from '../images/avatars/avatar4.jpg'
import Avatar5 from '../images/avatars/avatar5.jpg'
import Avatar6 from '../images/avatars/avatar6.jpg'
import Head from 'next/head'
import Targets from '../components/atoms/targets'



const Artist = () => {




  return (
    <>
    <Head>
      <title>The FinalFest</title>
      <link rel="icon" href="/party.ico" />
    </Head>
    <body className='bg-gradient-to-b from-slate-50 to-slate-200 text-black w-screen h-max'>
      <NavBar />
        <p className='font-title text-purple-700  text-5xl mx-auto w-max my-10'>Artists invited</p>
      <section className=' flex flex-col md:grid md:grid-rows-3-2 
              md:p-6 md:m-6 gap-y-6 '>
          <Targets name="WillYouThen" music="Dance" avatar={Avatar1} time="00:00" />
          <Targets name="Anastazio" music="Electronic" avatar={Avatar2} time="02:00" />
          <Targets name="Hoyou" music="Tech" avatar={Avatar3} time="03:00" />
          <Targets name="Thinker" music="Hard" avatar={Avatar4} time="04:30" />
          <Targets name="WTfuche" music="Instrumental" avatar={Avatar5} time="06:00" />
          <Targets name="TrueMister" music="NewStyle" avatar={Avatar6} time="08:00" />
      </section>   
      <Footer /> 
    </body>
    </>
  )
}

export default Artist