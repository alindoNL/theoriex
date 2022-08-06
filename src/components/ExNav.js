import React from 'react'

const ExNav = ({ currentQuestion, vragen,gevaar,counter,kennis, minutes, minutess,seconds,secondss,inzicht }) => {
  return (
    <div className='mt-24'>
       <nav className='h-20 items-center  flex bg-blue-400 justify-between  shadow-md fixed w-full z-10 top-0 '>


        
       </nav>
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
      <h1>{vragen.questions[currentQuestion].vraag}</h1>
      {gevaar ? (
        <div>
          <div>
            <div className='flex mt-2 justify-center items-center'>
              {counter}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <h2>vraag {currentQuestion + 1} van 65</h2>
    </div>
  )
}

export default ExNav