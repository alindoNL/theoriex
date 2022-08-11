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
     <nav className='h-20 items-center  flex bg-white justify-between  shadow-md fixed w-full z-10 top-0 '>
       <Link
         className='cursor-pointer hidden md:block   ml-16 lg:ml-32 xl:ml-34 text-xl text-white font-semibold'
         to='/'
       >
         <img
           className=' '
           src={Logo}
           height={30}
           width={150}
           alt='navbar-logo'
         />
       </Link>
       <Link
         className='cursor-pointer md:hidden   ml-12 lg:ml-32 xl:ml-64 text-xl text-white font-semibold'
         to='/'
       >
         <img src={Logo} height={40} width={130} alt='navbar-logo' />
       </Link>
       <div
         className=' mr-16 md:mr-0  md:ml-36  cursor-pointer lg:hidden'
         onClick={toggle}
       >
         {isOpen ? (
           <svg
             className='w-8 h-8 text-blue-800'
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
             className='w-8 h-8 text-blue-800'
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
       <div className=' xl:px-28  2xl:pr-0 lg:block hidden m-2  '>
         <Link to='/' className='p-5  text-lg font-semibold text-blue-800'>
           home
         </Link>
         <Link to='/theorieexamens' className='p-5 text-lg  text-slate-800'>
           theorieexamens
         </Link>
         {/* <Link to='/prijzen' className='p-5 text-lg  text-slate-800'>
           prijzen
         </Link> */}
         <Link to='/' className='p-5 text-lg  text-slate-800'>
           inloggen
         </Link>
       </div>
       <div className=' xl:pr-22  2xl:pr-44 pr-16 sm:block  hidden m-2  '>
         <Link
           to='/'
           type='button'
           className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-700 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-300 focus:outline-none focus:ring-2 ring-offset-white  text-sm dark:focus:ring-offset-gray-800'
         >
           GRATIS THEORIE-EXAMEN
         </Link>
       </div>
     </nav>
     <Dropdown isOpen={isOpen} toggle={toggle} />
   </>
 )
}

export default Navbar
