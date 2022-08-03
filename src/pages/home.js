import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Auto from '.././pictures/auto.png'
function Home() {

// for(let i = 0; i < 100; i++) {
//     if(i % 3 === 1 && i % 5 === 0) {
//       console.log(`${i} is divisible by 3`);
//     }

//   }
//   console.log(1 % 3 );
  return (
    <>
      <Navbar />
      <section className='bg-blue-100 lg:flex center justify-center py-24'>
        <div className='mx-12 py-8 bg-blue-100 '>
          <h1 className='text-4xl bg-blue-100 '>
            Theorie examen oefenen en leren.
          </h1>
          <p className='mt-4 w-80 text-slate-800 text-lg bg-blue-100  '>
            Op deze website oefen en leer je voor het auto theorie-examen.
          </p>
          <Link
            to='/'
            className='py-2 mt-6  px-4 inline-flex justify-center items-center gap-2 rounded-sm bg-blue-700 border border-transparent  text-white hover:text-white hover:bg-blue-300 focus:outline-none  ring-offset-white  md:text-xl text-lg dark:focus:ring-offset-gray-800'
          >
            start met een gratis-examen
          </Link>
        </div>
        <div className='mx-4 bg-blue-100 '>
          <img className='w-80 h-60 bg-blue-100 ' src={Auto} alt='auto' />
        </div>
      </section>
      <div className='h-44 '></div>
      <div className='h-44 bg-blue-100 '></div>

      <Footer />
    </>
  )
}

export default Home
