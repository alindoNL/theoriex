import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar';
function Theorieexamens() {
  

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className='lg:m-24  md:m-8 sm:m-4 m-2 lg:flex lg:items-center lg:justify-center flex flex-col items-center '>
        <div className='items-center flex lg:items-center lg:justify-center md:items-center  md:justify-center  '>
          <Link
            className=' m-4 lg:m-10 lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen1'
          >
            examen 1
          </Link>
          <Link
            className='  m-4 lg:m-10 lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen2'
          >
            examen 2
          </Link>

          <Link
            className=' m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen3'
          >
            examen 3
          </Link>
        </div>
        <div className=' items-center flex lg:items-center lg:justify-center md:items-center md:justify-center '>
          <Link
            className='  m-4 lg:m-10 lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen4'
          >
            examen 4
          </Link>
          <Link
            className='  m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen5'
          >
            examen 5
          </Link>
          <Link
            className=' m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen6'
          >
            examen 6
          </Link>
        </div>
        <div className='items-center  flex lg:items-center lg:justify-center md:items-center md:justify-center '>
          <Link
            className='  m-4 lg:m-10 lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen7'
          >
            examen 7
          </Link>
          <Link
            className='  m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen8'
          >
            examen 8
          </Link>
          <Link
            className=' m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen9'
          >
            examen 9
          </Link>
        </div>
        <div className=' flex lg:items-center lg:justify-center md:items-center md:justify-center '>
          <Link
            className=' m-4 lg:m-10  lg:text-2xl md:text-xl text-lg hover:opacity-80 bg-blue-400 p-3 rounded'
            to='/examen10'
          >
            examen 10
          </Link>
        </div>
      </div>
    </>
  )
}

export default Theorieexamens
