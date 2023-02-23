import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Escenario from '../images/escenario.jpg'
import Ubication from '../components/atoms/ubication'
import Footer from '../components/footer'
import NavBar from '../components/navBar'
import Camping from '../components/camping'
import Services from '../components/services'



const Info = () => {
  return (
    <section className='bg-InfoColors w-screen bg-cover bg-center'>
      <Head>
        <title>The FinalFest</title>
        <link rel="icon" href="/party.ico" />
      </Head>
    <NavBar />
      <h1 className='flex text-4xl font-title my-10 text-violet-600 justify-center mx-auto'>
        The FinalFest
      </h1> 
      <div className='flex flex-col p-4 my-10 md:mx-4 
      lg:flex-row rounded-lg bg-neutral-100/40'>
        <div className='group lg:w-1/2 relative m-auto'>
          <Image
            src={Escenario}
            width={1000}
            height={1000}
            alt="Escenarion Principal"
            className=' rounded-lg my-auto' />
          <span className='text-white absolute bottom-2 transition-all
        left-2 bg-white/25 px-2 rounded-md hidden group-hover:flex'>
            Pincipal scenary
          </span>
        </div>
        <p className="md:w-2/3 m-auto md:max-h-60 lg:max-h-96 overflow-scroll 
        text-justify p-4 rounded-lg text-lg lg:overflow-visible">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas a perspiciatis
          voluptatum quaerat placeat hic, nemo explicabo vitae eos vero officiis esse totam ipsum,
          minima similique laborum quos. Expedita unde iste quas. Quisquam facilis quidem tempore sequi
          exercitationem ipsum iusto fugiat, voluptatibus blanditiis id mollitia ipsam dolores consectetur
          deleniti perspiciatis velit cum voluptatum sunt a dolorem? Eius reiciendis accusantium deserunt iste
          expedita itaque laboriosam, at aperiam? Minus eveniet quo eligendi reprehenderit suscipit adipisci
          a vitae eos explicabo autem consectetur fugit commodi, impedit officia dolorum, eum neque delectus porro.
          Quas sapiente dolorum amet laboriosam veritatis exercitationem, a omnis nostrum explicabo?
        </p>
      </div>
      <div className='flex flex-col divide-y-2 my-10 md:divide-x-2 md:mx-4
        md:divide-y-0 divide-slate-300 gap-y-4 md:grid md:grid-cols-2 bg-neutral-100/40 rounded-lg'>
        <Camping />
        <Services />
      </div>
      <Ubication />
      <Footer />
    </section>
  )
}

export default Info