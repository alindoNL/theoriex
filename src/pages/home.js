import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className='hero min-h-screen bg-base-200 m-12 flex center justify-center'>
        <div className='text-center hero-content m-8'>
          <div className='max-w-md'>
            <h1 className='text-5xl text font-bold'>
              Gratis theorie examens oefenen
            </h1>
            <p className='py-6 text-xl'>
              hier bij theoeriex.nl gratis theorieexamen oefenen, je kan hier 10
              gratis oefenexamens maken.
            </p>
            <button className='mt-6 sm:m-6'>
              <Link
                className='m-2 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg text-md sm:text-lg   bg-blue-400 hover:opacity-80 p-3 rounded'
                to='/theorieexamens'
              >
                Ga naar de examens
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
