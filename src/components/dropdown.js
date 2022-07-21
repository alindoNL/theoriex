import React from 'react'

import { Link } from 'react-router-dom'
function Dropdown({ toggle, isOpen }) {


  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3  text-center items-center text-white bg-blue-900'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className='p-5 bggg hover:bg-blue-600' to='/'>
        home
      </Link>
      <Link className='p-5 bggg hover:bg-blue-600' to='/theorieexamens'>
        theorieexamens
      </Link>
      <Link className='p-5 bggg hover:bg-blue-600' to='/contact'>
        contact
      </Link>
     
   
    </div>
  )
}

export default Dropdown
