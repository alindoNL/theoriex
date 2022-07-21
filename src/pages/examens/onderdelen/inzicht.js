import React from 'react'

function Inzicht({ mijninzichtarr, vragen,setinzicht, current, setcurrent,currquestion, setcurrquestion }) {


  return (
    <>
      <div className=' '>
        <button
          className='bggg rounded ml-14 p-3 m-2 cursor-pointer'
          onClick={() => {
            setinzicht(false)
          }}
        >
          Terug naar overzicht
        </button>
        <h1 className='flex justify-center items-center'>
          {vragen.questions[currquestion].vraag}
        </h1>
      </div>
      <div className='mt-3 flex justify-center items-center'>
        <img
          className=' m-2 w-140 h-80 rounded'
          src={vragen.questions[currquestion].image}
          alt={`vraag 1`}
        />
      </div>
      {mijninzichtarr[current].isCorrect ? (
        <>
          <h1 className='m-2 flex justify-center items-center'>
            goed gedaan het antwoord is juist
          </h1>
          <h2 className='m-2 flex justify-center items-center'>
            waarom is dit goed : {vragen.questions[currquestion].waarom}
          </h2>
        </>
      ) : (
        <div>
          <h1 className='m-2 flex justify-center items-center'>
            het juiste antwoord is : {vragen.questions[currquestion].goodAns}
          </h1>
          <h2 className='m-2 flex justify-center items-center'>
            het gegeven antwoord is : {mijninzichtarr[current].submittedanswer}
          </h2>
          <h2 className='m-2 flex justify-center items-center'>
            waarom is dit niet goed : {vragen.questions[currquestion].waarom}
          </h2>
        </div>
      )}
      <div className='mt-3 flex md:mx-36 lg:mx-64 lg:justify-center flex-col'>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          <button
            className={`
                 ${
                   vragen.questions[currquestion].opties[0].isCorrect
                     ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                 ${
                   mijninzichtarr[current].submittedanswer === 'niet beantwoord'
                     ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[0].ant &&
                  vragen.questions[currquestion].opties[0].isCorrect === false
                    ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[0].ant &&
                  vragen.questions[currquestion].opties[0].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
          >
            {vragen.questions[currquestion].opties[0].ant}
          </button>
        </div>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          <button
            className={`
                 ${
                   vragen.questions[currquestion].opties[1].isCorrect
                     ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                 ${
                   mijninzichtarr[current].submittedanswer === 'niet beantwoord'
                     ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[1].ant &&
                  vragen.questions[currquestion].opties[1].isCorrect === false
                    ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[1].ant &&
                  vragen.questions[currquestion].opties[1].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
          >
            {vragen.questions[currquestion].opties[1].ant}
          </button>
        </div>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          {vragen.questions[currquestion].opties[2] ? (
            <>
              <button
                className={`
                 ${
                   vragen.questions[currquestion].opties[2].isCorrect
                     ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                 ${
                   mijninzichtarr[current].submittedanswer === 'niet beantwoord'
                     ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[2].ant &&
                  vragen.questions[currquestion].opties[2].isCorrect === false
                    ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }
                ${
                  mijninzichtarr[current].submittedanswer ===
                    vragen.questions[currquestion].opties[2].ant &&
                  vragen.questions[currquestion].opties[2].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
              >
                {vragen.questions[currquestion].opties[2].ant}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className='m-7 flex justify-center items-center'>
        {currquestion > 37 ? (
          <button
            className='rounded bggg p-4 m-4'
            onClick={() => {
              setcurrquestion(currquestion - 1)
              setcurrent(current - 1)
            }}
          >
            vorige vraag
          </button>
        ) : (
          <></>
        )}

        {currquestion < 64 ? (
          <button
            className='rounded bggg p-4 m-4'
            onClick={() => {
              setcurrquestion(currquestion + 1)
              setcurrent(current + 1)
            }}
          >
            volgende vraag
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Inzicht
