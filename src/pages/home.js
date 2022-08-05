import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import { GrUnlock, GrUpdate } from 'react-icons/gr'
import { MdOutlineQuiz, MdPhoneIphone } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'
import Navbar from '../components/navbar'
import { pricingPlans } from '../components/data'
import Auto from '.././pictures/auto.png'
function Home() {


  return (
    <>
      <Navbar />
      <section className='bg-blue-100 lg:flex center justify-center py-44'>
        <div className='mx-12 mr-24 py-8 bg-blue-100 '>
          <h1 className='text-4xl w-96 font-semibold bg-blue-100 '>
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
      <div className='h-44 bg-blue-100 '>
        <h3 className='flex font-semibold bg-blue-100 pt-12 text-2xl items-center justify-center'>
          Kies hier onder een pakket en start direct met oefenen
        </h3>
        <p className='flex bg-blue-100 pt-4 text-lg items-center justify-center'>
          Ons platform wordt regelmatig geüpdatet
        </p>
      </div>
      <div className='mx-auto grid max-w-7xl lg:grid-cols-3 gap-12 mt-6  lg:gap-8 pt-12 pb-12 px-4 sm:px-6 lg:px-8'>
        {pricingPlans.map((plan) => (
          <div
            className='border  border-slate-200 p-8 shadow-lg bg-white rounded-2xl relative flex flex-col '
            key={plan.title}
          >
            <h3 className='text-lg font-semibold flex items-center justify-center   leading-5'>
              {plan.title}
            </h3>
            {plan.mostPopular && (
              <p className='absolute -top-3 -translate-y-1/2 bg-blue-600 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md'>
                Meest gekozen
              </p>
            )}
            <div className='mt-4   p-6'>
              {/* <span className='text-xl flex items-center justify-center line-through text-slate-700 ml-2'>
                €{plan.oldPrice},-
              </span> */}
              <p className='text-sm justify-center font-semibold  pt-2 text-slate-500 flex items-center'>
                <span className='text-4xl text-slate-900 ml-2'>
                  €{plan.price}
                </span>
              </p>
            </div>
            <p className='mt-4 text-slate-700 text-sm leading-6'>
              {plan.description}
            </p>
            <ul className='mt-6 space-y-4 flex-1'>
              {plan.features.map((feature) => (
                <li
                  className='text-sm text-slate-700 leading-6 flex'
                  key={feature}
                >
                  <AiOutlineCheck className='h-5 w-5 text-blue-800 shrink-0' />
                  <span className='ml-5'>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to='/aanmelden'
              className={`  block mt-12 px-6 py-4 text-sm font-bold text-center rounded-lg 
            ${
              plan.mostPopular
                ? 'bg-blue-700 text-white hover:bg-blue-400 shadow-md '
                : 'text-white bg-blue-600 hover:bg-blue-400'
            }
            `}
            >
              {plan.cia}
            </Link>
          </div>
        ))}
        <div className=' flex items-center justify-center'>
          <h2 className='text-2xl'>
            {' '}
            twijfel je nog? probeer dan nu onze gratis examen
          </h2>
        </div>
        <div className=' flex items-center justify-center'>
          <button className='p-3 text-xl hover:bg-blue-400 bg-blue-500 rounded-md'>
            Gratis examen proberen
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
