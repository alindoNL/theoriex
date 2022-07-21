import React from 'react'

function Gevaar({vragen, current, setcurrent,setgevaar, mijngevaararr }) {

  return (
    <>
      <div className=' '>
        <button
          className='bggg rounded p-3 ml-14 m-2 cursor-pointer'
          onClick={() => {
            setgevaar(false)
          }}
        >
          Terug naar overzicht
        </button>
        <h1 className=' flex justify-center items-center'>
          {vragen.questions[current].vraag}
        </h1>
      </div>
      <div className='mt-3 flex justify-center items-center'>
        <img
          className=' m-2 w-140 h-80 rounded'
          src={vragen.questions[current].image}
          alt={`vraag 1`}
        />
      </div>
      {mijngevaararr[current].isCorrect ? (
        <>
          <h1 className='m-2 flex justify-center items-center'>
            goed gedaan het antwoord is juist
          </h1>
          <h2 className='m-2 flex justify-center items-center'>
            waarom is dit goed : {vragen.questions[current].waarom}
          </h2>
        </>
      ) : (
        <div>
          <h1 className='m-2 flex justify-center items-center'>
            het juiste antwoord is : {vragen.questions[current].goodAns}
          </h1>
          <h2 className='m-2 flex justify-center items-center'>
            het gegeven antwoord is : {mijngevaararr[current].submittedanswer}
          </h2>
          <h2 className='m-2 flex justify-center items-center'>
            waarom is dit niet goed : {vragen.questions[current].waarom}
          </h2>
        </div>
      )}
      <div className='mt-3 flex md:mx-36 lg:mx-64 lg:justify-center flex-col'>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          <button
            className={`
                 ${
                   vragen.questions[current].opties[0].isCorrect
                     ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                 ${
                   mijngevaararr[current].submittedanswer === 'niet beantwoord'
                     ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                ${
                  mijngevaararr[current].submittedanswer ===
                    vragen.questions[current].opties[0].ant &&
                  vragen.questions[current].opties[0].isCorrect === false
                    ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }
                ${
                  mijngevaararr[current].submittedanswer ===
                    vragen.questions[current].opties[0].ant &&
                  vragen.questions[current].opties[0].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
          >
            {vragen.questions[current].opties[0].ant}
          </button>
        </div>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          <button
            className={`
                 ${
                   vragen.questions[current].opties[1].isCorrect
                     ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                    ${
                      mijngevaararr[current].submittedanswer ===
                      'niet beantwoord'
                        ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                        : `bggg rounded p-4 m-3 cursor-pointer`
                    }
                ${
                  mijngevaararr[current].submittedanswer ===
                    vragen.questions[current].opties[1].ant &&
                  vragen.questions[current].opties[1].isCorrect === false
                    ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }
                ${
                  mijngevaararr[current].submittedanswer ===
                    vragen.questions[current].opties[1].ant &&
                  vragen.questions[current].opties[1].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
          >
            {vragen.questions[current].opties[1].ant}
          </button>
        </div>
        <div className='mt-3 flex md:mx-12 xl:mx-28 2xl:mx-64 lg:mx-12 lg:justify-center flex-col'>
          {vragen.questions[current].opties[2] ? (
            <>
              <button
                className={`
              ${
                vragen.questions[current].opties[2].isCorrect
                  ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                  : `bggg rounded p-4 m-3 cursor-pointer`
              }
                 ${
                   mijngevaararr[current].submittedanswer === 'niet beantwoord'
                     ? 'bg-red-100 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                 ${
                   mijngevaararr[current].submittedanswer ===
                     vragen.questions[current].opties[2].ant &&
                   vragen.questions[current].opties[2].isCorrect === false
                     ? 'bg-red-400 rounded p-4 m-3 cursor-pointer'
                     : `bggg rounded p-4 m-3 cursor-pointer`
                 }
                ${
                  mijngevaararr[current].submittedanswer ===
                    vragen.questions[current].opties[2].ant &&
                  vragen.questions[current].opties[2].isCorrect
                    ? 'bg-green-100 rounded p-4 m-3 cursor-pointer'
                    : `bggg rounded p-4 m-3 cursor-pointer`
                }`}
              >
                {vragen.questions[current].opties[2].ant}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className='m-7 flex justify-center items-center'>
        {current >= 1 ? (
          <button
            className='rounded bggg p-4 m-4'
            onClick={() => {
              setcurrent(current - 1)
            }}
          >
            vorige vraag
          </button>
        ) : (
          <></>
        )}

        {current < 24 ? (
          <button
            className='rounded bggg p-4 m-4'
            onClick={() => {
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

export default Gevaar
