import React from 'react'

const BottomNav = ({handleSubmit ,currentQuestion}) => {
  return (
    <div className='h-20 items-center flex  bg-blue-500 flex-col shadow-md fixed w-full z-10  bottom-0 '>
      <div className='flex absolute bg-blue-500 items-center justify-center'>
        <p className='py-4 bg-blue-500 text-xl my-2 text-white'>
          vraag {currentQuestion + 1} van 65
        </p>
      </div>
      <div
        onClick={() => {
          handleSubmit()
        }}
        className='bg-blue-300 cursor-pointer self-end h-20 '
      >
        <button className='  text-xl mx-3 my-6 text-white  rounded'>
          VOLGENDE
        </button>
      </div>
    </div>
  )
}

export default BottomNav