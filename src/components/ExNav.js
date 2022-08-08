import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ico.png'
import {AiOutlineRollback} from 'react-icons/ai'
const ExNav = ({ currentQuestion, vragen,gevaar,counter,kennis, minutes, minutess,seconds,secondss,inzicht }) => {
  return (
    <div className='mt-24'>
      <nav className='h-20 items-center  flex  bg-blue-500 flex-col shadow-md fixed w-full z-10  top-0 '>
        <div className=' self-start bg-blue-400 '>
          <Link to='/theorieexamens'>
          <AiOutlineRollback className='text-5xl flex text-white bg-blue-400   justify-center items-center w-16  h-20 absolute' />
          </Link>
        </div>
        {kennis ? (
          <div className='flex  justify-center items-center'>
            {minutes} : {seconds}
          </div>
        ) : (
          <></>
        )}
        {inzicht ? (
          <div className='flex  justify-center items-center'>
            {minutess} : {secondss}
          </div>
        ) : (
          <></>
        )}
        {gevaar ? (
          <>
            <h3 className='py-2 px-3 mt-4 rounded-2xl'>{counter}</h3>
          </>
        ) : (
          <></>
        )}
      </nav>
      <h1 className='pt-6 flex items-center justify-center'>{vragen.questions[currentQuestion].vraag}</h1>
     
    </div>
  )
}

export default ExNav