import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import Overzicht from './overzicht'
import ExNav from '../../components/ExNav';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiOutlineRollback } from 'react-icons/ai'
import BottomNav from '../../components/BottomNav';
function Examen2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [vragen, setVragen] = useState([])
  const [Laden, setLaden] = useState(false)
   const [showScore, setShowScore] = useState(false)
  const docRef = doc(db, 'vragen', 'examen2')
  useEffect(() => {
    try {
      
      const getData = async () => {
        await getDoc(docRef).then((doc) => {
          setVragen(doc.data(), doc.id)
        })
      }
      getData()
    } catch (error) {
      console.log(error);
    }
  }, [])
  const [gevaar, setgevaar] = useState(false)
  const [kennis, setkennis] = useState(false)
  const [inzicht, setinzicht] = useState(false)
const [vragengevonden, setvragengevonden] = useState(false)
  const [geva, setgeva] = useState('kennis')
  const [mijngevaararr, setmijngevaararr] = useState([])
  const [mijnkennisarr, setmijnkennisarr] = useState([])
  const [mijninzichtarr, setmijninzichtarr] = useState([])
  const [gevaarscore, setgevaarscore] = useState(0)
  const [kennisscore, setkennisscore] = useState(0)
  const [inzichtscore, setinzichtscore] = useState(0)
  const [nav, setnav] = useState(true)
console.log(mijnkennisarr)
  const submitarr = async (curranswer) => {
    if (currentQuestion < 25) {
      await mijngevaararr.push({
        submittedanswer: curranswer.ant,
        isCorrect: curranswer.isCorrect,
      })
    }
    if (kennis) {
      await mijnkennisarr.push({
        submittedanswer: curranswer.ant,
        isCorrect: curranswer.isCorrect,
      })
    }
    if (inzicht) {
      await mijninzichtarr.push({
        submittedanswer: curranswer.ant,
        isCorrect: curranswer.isCorrect,
      })
    }
  }
  
  
  // const scores = (curranswer) => {
    
  //   if (currentQuestion < 25) {
  //     if (curranswer.isCorrect) {
  //       setgevaarscore(gevaarscore + 1)
  //     }
  //   }
  //   if (kennis) {
  //     if (curranswer.isCorrect) {
  //       setkennisscore(kennisscore + 1)
  //     }
  //   }
  //   if (inzicht) {
  //     if (curranswer.isCorrect) {
  //       setinzichtscore(inzichtscore + 1)
  //     }
  //   }
  // }
  const volgendeVraag = async () => {
    if (currentQuestion < 25) {
      await mijngevaararr.push({
        submittedanswer: 'niet beantwoord',
        isCorrect: false,
      })
    }
    if (kennis) {
      await mijnkennisarr.push({
        submittedanswer: 'niet beantwoord',
        isCorrect: false,
      })
    }
    if (inzicht) {
      await mijninzichtarr.push({
        submittedanswer: 'niet beantwoord',
        isCorrect: false,
      })
    }
  }
  const [counter, setCounter] = React.useState(8)
  const [checked1, setchecked1] = useState(false)
  const [checked2, setchecked2] = useState(false)
  const [checked3, setchecked3] = useState(false)
  const [curranswer, setcurranswer] = useState('')
  
 const goedeAntwoorden =()=>{
 setgevaarscore(mijngevaararr.filter((vraag) => vraag.isCorrect === true))
 setkennisscore(mijnkennisarr.filter((vraag) => vraag.isCorrect === true))
 setinzichtscore(mijninzichtarr.filter((vraag) => vraag.isCorrect === true))
 }
  const volgende = () => {
    if (currentQuestion === 36) {
      setgeva('inzicht')
      setkennis(false)
      setinzicht(true)
      setLaden(false)
    }
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < vragen.questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setCurrentQuestion(0)
      goedeAntwoorden()
      setShowScore(true)
    }
    setCurrentQuestion(nextQuestion)
  }
 
 const vorigeKennis = ()=>{
  setchecked1(false)
  setchecked2(false)
  setchecked3(false)
  setCurrentQuestion(currentQuestion - 1)
  mijnkennisarr.pop()
 }
  const handleSubmit =()=>{
setchecked1(false)
setchecked2(false)
setchecked3(false)
volgende()
// scores(curranswer)
setCounter(8)
if(curranswer !== ''){
submitarr(curranswer)
}else{
  volgendeVraag()
}
setcurranswer('')
  }

const [minutes, setMinutes] = useState(8)
const [seconds, setSeconds] = useState(0)
const [timer, setTimer] = useState(false)
useEffect(() => {
if(timer){
  let myInterval = setInterval(() => {
    if(timer ===false){
      clearInterval(myInterval)
    }
    if (seconds > 0) {
      setSeconds(seconds - 1)
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(myInterval)
      } else {
        setMinutes(minutes - 1)
        setSeconds(59)
      }
    }
  }, 1000)
  
  return () => {
    clearInterval(myInterval)
  }
}
}, [kennis,timer, seconds, minutes])

const [timerr, setTimerr] = useState(false)
const [minutess, setMinutess] = useState(16)
const [secondss, setSecondss] = useState(0)
useEffect(() => {
if(timerr){
  let myInterval = setInterval(() => {
    if (secondss > 0) {
      setSecondss(secondss - 1)
    }
    if (secondss === 0) {
      if (minutess === 0) {
        clearInterval(myInterval)
      } else {
        setMinutess(minutess - 1)
        setSecondss(59)
      }
    }
  }, 1000)
 
  
  return () => {
    clearInterval(myInterval)
  }
}
}, [inzicht,timerr, secondss, minutess])


  useEffect(() => {
    if (gevaar) {
      if (counter <= 0) {
        setchecked3(false)
        setchecked1(false)
        setchecked2(false)
        if (curranswer === '') {
          volgendeVraag()
        } else {
          submitarr(curranswer)
          setcurranswer('')
        }

        let nextQuestion = currentQuestion + 1
        setCounter(8)
        setCurrentQuestion(nextQuestion)
      }
      const timer = setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
      if (currentQuestion === 25) {
        setgevaar(false)
        setkennis(true)
        setLaden(false)
      }

      return () => clearInterval(timer)
    }
  }, [counter, gevaar, currentQuestion])
  const laadVragen = () => {
    setLaden(true)
  }
  if (showScore) {
    
    return (
      <Overzicht
        mijninzichtarr={mijninzichtarr}
        gevaarscore={gevaarscore}
        inzichtscore={inzichtscore}
        kennisscore={kennisscore}
        mijnkennisarr={mijnkennisarr}
        mijngevaararr={mijngevaararr}
        vragen={vragen}
      />
    )
  }

 if (!vragen.questions && vragengevonden ) {
    return (
      <div>
        <button
          onClick={() => window.location.reload()}
          className='m-4  bg-blue-400 p-3 rounded'
        >
          {' '}
          ga terug naar examens
        </button>
        vragen moeten toegevoegd worden
      </div>
    )
  }
  if ( vragengevonden && vragen.questions.length < 1 ) {
    return (
      <div>
        <button
          onClick={() => window.location.reload()}
          className='m-2  bg-blue-400 p-3 rounded'
        >
          {' '}
          ga terug naar examens
        </button>
        vragen moeten toegevoegd worden
      </div>
    )
  }
  return (
    <>
      <nav className='h-20 items-center  flex  bg-blue-500 flex-col shadow-md fixed w-full z-10  top-0 '>
        <div className=' self-start bg-blue-400 '>
          <Link to='/theorieexamens'>
            <AiOutlineRollback className='text-5xl flex text-white bg-blue-400   justify-center items-center w-16  h-20 absolute' />
          </Link>
        </div>
        {kennis ? (
          <>
            <h3 className='py-2 px-3 mt-4 rounded-2xl'>
              {' '}
              {minutes} : {seconds}
            </h3>
          </>
        ) : (
          <></>
        )}
        {inzicht ? (
          <>
            <h3 className='py-2 px-3 mt-4 rounded-2xl'>
              {' '}
              {minutess} : {secondss}
            </h3>
          </>
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

      {Laden ? (
        <>
          <div className='flex justify-center  md:h-96 mt-24 h-80 md:mx-4 mx-2 items-center md:mb-8'>
            <LazyLoadImage
              className=' max-h-full max-w-full rounded shadow-md'
              src={vragen.questions[currentQuestion].image}
              alt={`je hebt geen foto toegevoegd`}
            />
          </div>
          <div className='flex flex-col mx-12 mt-12 md:mx-36 lg:mx-64 2xl:mx-96 '>
            <label className='mx-4 2xl:mx-64 lg:mx-28 rounded-lg bg-gray-200 mb-4 md:p-4 p-3 cursor-pointer'>
              <input
                onChange={() => {}}
                checked={checked1}
                type='radio'
                onClick={() => {
                  const ant = vragen.questions[currentQuestion].opties[0]
                  setcurranswer(ant)
                  setchecked3(false)
                  setchecked1(true)
                  setchecked2(false)
                }}
              />
              <span className=' ml-4 lg:text-md bg-gray-200  '>
                {vragen.questions[currentQuestion].opties[0].ant}
              </span>
            </label>
            <label className=' m-4 2xl:mx-64 lg:mx-28 rounded-lg bg-gray-200 mb-4 md:p-4 p-3 cursor-pointer'>
              <input
                onChange={() => {}}
                checked={checked2}
                type='radio'
                onClick={() => {
                  const ant = vragen.questions[currentQuestion].opties[1]
                  setcurranswer(ant)
                  setchecked3(false)
                  setchecked1(false)
                  setchecked2(true)
                }}
              />
              <span className=' ml-4 lg:text-md  bg-gray-200  '>
                {vragen.questions[currentQuestion].opties[1].ant}
              </span>
            </label>
            {vragen.questions[currentQuestion].opties[2] ? (
              <>
                <label className='m-4 lg:mx-28 2xl:mx-64 rounded-lg bg-gray-200 mb-4 md:p-4 p-3  cursor-pointer'>
                  <input
                    onChange={() => {}}
                    checked={checked3}
                    type='radio'
                    onClick={() => {
                      const ant = vragen.questions[currentQuestion].opties[2]
                      setcurranswer(ant)
                      setchecked3(true)
                      setchecked1(false)
                      setchecked2(false)
                    }}
                  />
                  <span className=' ml-4 lg:text-md bg-gray-200  '>
                    {vragen.questions[currentQuestion].opties[2].ant}
                  </span>
                </label>
              </>
            ) : (
              <></>
            )}
          </div>
          <BottomNav
          kennis={kennis}
          inzicht={inzicht}
          mijnkennisarr={mijnkennisarr}
          mijninzichtarr={mijninzichtarr}
            currentQuestion={currentQuestion}
            handleSubmit={handleSubmit}
            vorigeKennis={vorigeKennis}
          />
        </>
      ) : (
        <div>
          <p className='flex justify-center text-lg lg:text-xl lg:mx-56 items-center mt-32'>
            je hebt 3 onderdelen in de examens: Gevaarherkenning - gaat over het
            herkennen van gevaar en wat je moet doen in een situatie. voor dit
            onderdeel heb je 8 seconden per vraag. Kennis - hier laat je zien
            dat je feiten en regels kunt herkennen en benoemen. voor dit
            onderdeel heb je 8 minuten de tijd. Inzicht - hier laat je zien dat
            je regels kunt toepassen en juiste beslissingen kunt nemen. voor dit
            onderdeel heb je 16 minuten de tijd.
          </p>
          <div className='flex justify-center items-center m-8 text-2xl'>
            {inzicht || kennis ? (
              <div>in dit onderdeel ga je {geva} doen</div>
            ) : (
              <div>in dit onderdeel ga je Gevaarherkenning doen </div>
            )}{' '}
          </div>

          <div className='flex justify-center  items-center'>
            {kennis || inzicht ? (
              <>
                {kennis ? (
                  <>
                    {' '}
                    <button
                      className='m-4  bg-blue-400 p-3 rounded'
                      onClick={() => {
                        setTimer(true)
                        laadVragen()
                      }}
                    >
                      volgende {geva}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className='m-4  bg-blue-400 p-3 rounded'
                      onClick={() => {
                        setTimer(false)
                        setTimerr(true)
                        laadVragen()
                      }}
                    >
                      volgende {geva}
                    </button>
                  </>
                )}
              </>
            ) : (
              <button
                className='m-4  bg-blue-400 p-3 rounded'
                onClick={() => {
                  setgevaar(true)
                  setnav(false)
                  laadVragen()
                  setvragengevonden(true)
                }}
              >
                volgende
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Examen2
