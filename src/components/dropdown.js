import React from 'react'

import { Link } from 'react-router-dom'
function Dropdown({ toggle, isOpen }) {


  return (
    <>
      <div
        className={
          isOpen
            ? 'grid grid-rows-4 bg-gray-300  shadow-md fixed w-full z-10 top-20  text-center items-center  text-white '
            : 'hidden'
        }
        onClick={toggle}
      >
        <Link className='p-5  bg-blue-600' to='/'>
          home
        </Link>
        <Link className='p-5 bg-blue-600' to='/prijzen'>
          prijzen
        </Link>
        <Link className='p-5 bg-blue-600' to='/theorieexamens'>
          theorieexamens
        </Link>
        <Link className='p-5 bg-blue-600' to='/contact'>
          contact
        </Link>
      </div>
    </>
  )
}

export default Dropdown
