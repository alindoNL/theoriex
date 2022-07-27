import React, {useState} from 'react'
import Logo from '../ico.png'
import { Link } from 'react-router-dom'
import Dropdown from './dropdown';
;

function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
   setIsOpen(!isOpen)
 }
 return (
   <>
     <nav className='h-20 items-center justify-between shadow-xl relative flex '>
       <div className=' pl-16 text-xl text font-weight: 700'>
         <Link to='/'>
           <img height={64} width={112} src={Logo} alt='logo' />
         </Link>
       </div>
       <div className='px-12 cursor-pointer md:hidden' onClick={toggle}>
         {isOpen ? (
           <svg
             className='w-8 h-8 text'
             fill='none'
             stroke='currentColor'
             viewBox='0 0 24 24'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth={2}
               d='M4 6h16M4 12h16m-7 6h7'
             />
           </svg>
         ) : (
           <svg
             className='w-8 h-8 text'
             fill='none'
             stroke='currentColor'
             viewBox='0 0 24 24'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth={2}
               d='M4 6h16M4 12h16M4 18h16'
             />
           </svg>
         )}
       </div>
       <div className=' pr-14 md:block hidden  '>
         <Link className='p-5 text-xl text' to='/'>
           home
         </Link>
         <Link className='p-5 text-xl text' to='/prijzen'>
           prijzen
         </Link>
         <Link className='p-5 text-xl text' to='/theorieexamens'>
           theorieexamens
         </Link>
         <Link className='p-5 text-xl text' to='/contact'>
           contact
         </Link>
       </div>
     </nav>
     <Dropdown isOpen={isOpen} toggle={toggle} />
   </>
 )
}

export default Navbar
