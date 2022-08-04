import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { GrUnlock, GrUpdate } from 'react-icons/gr'
import { MdOutlineQuiz, MdPhoneIphone } from 'react-icons/md'
import Navbar from '../components/navbar'
import Auto from '.././pictures/auto.png'
function Home() {


  return (
    <>
      <Navbar />
      <section className='bg-blue-100 lg:flex center justify-center py-44'>
        <div className='mx-12 mr-24 py-8 bg-blue-100 '>
          <h1 className='text-5xl w-96 bg-blue-100 '>
            Theorie examen oefenen en leren.
          </h1>
          <p className='mt-4  w-80 text-slate-800 text-xl bg-blue-100  '>
            Op deze website oefen en leer je voor het auto theorie-examen.
          </p>
          <Link
            to='/'
            className='py-2 mt-6  px-4 inline-flex justify-center items-center gap-2 rounded-sm bg-blue-700 border border-transparent  text-white hover:text-white hover:bg-blue-300 focus:outline-none  ring-offset-white  md:text-xl text-lg dark:focus:ring-offset-gray-800'
          >
            start met een gratis-examen
          </Link>
        </div>
        <div className='mx-4 ml-24 pt-16 bg-blue-100 '>
          <img className='w-80 h-60 bg-blue-100 ' src={Auto} alt='auto' />
        </div>
      </section>
      <div className='h-60  '>
        <div className='flex center justify-center'>
          <div className='mt-12 px-12 flex center justify-center'>
            <GrUnlock className='text-4xl ' />
            <h2 className='ml-4 w-64'>
              Je krijgt automatisch direct toegang tot de oefen theorie-examens.
            </h2>
          </div>
          <div className='flex mt-12 px-12 center justify-center'>
            <GrUpdate className='text-4xl' />
            <h2 className='ml-4 w-64'>Altijd up-to-date.</h2>
          </div>
        </div>
        <div className='flex center justify-center'>
          <div className='mt-12 px-12 flex center justify-center'>
            <MdOutlineQuiz className='text-4xl ' />
            <h2 className='ml-4 w-64'>Alleen realistische examenvragen.</h2>
          </div>
          <div className='flex mt-12 px-12 center justify-center'>
            <MdPhoneIphone className='text-4xl' />
            <h2 className='ml-4 w-64'>
              met onze oefen theorie-examens kun je oefenen via elke browser met
              elk apparaat.
            </h2>
          </div>
        </div>
      </div>
      <div className='h-44 bg-blue-100 '></div>

      <Footer />
    </>
  )
}

export default Home
