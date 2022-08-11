import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import { pricingPlans } from '../components/data'
import { AiOutlineCheck } from 'react-icons/ai'
const Prijzen = () => {

  return (
    <>
      <Navbar />
      <div className='mx-auto  grid max-w-7xl lg:grid-cols-3 gap-12 mt-24  lg:gap-8 pt-12 pb-12 px-4 sm:px-6 lg:px-8'>
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
    </>
  )
}

export default Prijzen