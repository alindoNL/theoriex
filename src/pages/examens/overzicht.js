import React, { useState } from 'react'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import Gevaar from './onderdelen/gevaar'
import Kennis from './onderdelen/kennis'
import { Link } from 'react-router-dom'
import { AiOutlineRollback } from 'react-icons/ai'
import Inzicht from './onderdelen/inzicht'
function Overzicht({
  vragen,
  gevaarscore,
  inzichtscore,
  kennisscore,
  mijngevaararr,
  mijninzichtarr,
  mijnkennisarr,
}) {
  const [current, setcurrent] = useState(0)
  const [gevaar, setgevaar] = useState(false)
  const [kennis, setkennis] = useState(false)
  const [inzicht, setinzicht] = useState(false)
  const [currquestion, setcurrquestion] = useState(0)


  return (
    <div>
      {gevaar || inzicht || kennis ? (
        <></>
      ) : (
        <>
          <nav className='h-20 items-center  flex  bg-blue-500 flex-col shadow-md fixed w-full z-10  top-0 '>
        <div className=' self-start bg-blue-400 '>
          <Link to='/theorieexamens'>
            <AiOutlineRollback className='text-5xl flex text-white bg-blue-400   justify-center items-center w-16  h-20 absolute' />
          </Link>
        </div>
        </nav>
        </>
      )}

      {gevaar || inzicht || kennis ? (
        <></>
      ) : gevaarscore >= 13 && kennisscore >= 10 && inzichtscore >= 25 ? (
        <div className='flex mt-12  xl:mx-64  md:mx-24 lg:mx-44'>
          <FaThumbsUp className='text-green-600 text-7xl ' />
          <h1 className=' ml-14 mt-6 md:text-2xl'>Geslaagd</h1>
        </div>
      ) : (
        <div className='flex mt-28 xl:mx-64  md:mx-24 lg:mx-44'>
          <FaThumbsDown className='text-red-600 text-7xl ' />
          <h1 className=' ml-14 mt-6 md:text-2xl text-lg'>Gezakt</h1>
        </div>
      )}

      {gevaar ? (
        <>
          <Gevaar
            mijngevaararr={mijngevaararr}
            gevaar={gevaar}
            setgevaar={setgevaar}
            vragen={vragen}
            current={current}
            setcurrent={setcurrent}
          />
        </>
      ) : (
        <div
          className={`${
            kennis || inzicht ? 'hidden' : 'mt-12 xl:mx-64  md:mx-24 lg:mx-44'
          }`}
        >
          <h1 className='lg:mb-2 md:mb-2 md:text-xl'>Gevaar</h1>
          <h2 className='lg:mb-2 md:mb-2'>
            Je hebt : {gevaarscore} van de 25 vragen goed.{' '}
            {gevaarscore >= 13 ? (
              <>Je bent geslaagd voor Gevaarherkenning. </>
            ) : (
              <>Je bent gezakt voor Gevaarherkenning.</>
            )}{' '}
          </h2>
          <button
            onClick={() => {
              setcurrent(0)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[0].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }
            
            `}
          >
            1
          </button>
          <button
            onClick={() => {
              setcurrent(1)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[1].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            2
          </button>
          <button
            onClick={() => {
              setcurrent(2)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[2].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            3
          </button>
          <button
            onClick={() => {
              setcurrent(3)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[3].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            4
          </button>
          <button
            onClick={() => {
              setcurrent(4)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[4].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            5
          </button>
          <button
            onClick={() => {
              setcurrent(5)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[5].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            6
          </button>
          <button
            onClick={() => {
              setcurrent(6)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[6].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            7
          </button>
          <button
            onClick={() => {
              setcurrent(7)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[7].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            8
          </button>
          <button
            onClick={() => {
              setcurrent(8)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[8].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            9
          </button>
          <button
            onClick={() => {
              setcurrent(9)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[9].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            10
          </button>
          <button
            onClick={() => {
              setcurrent(10)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[10].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            11
          </button>
          <button
            onClick={() => {
              setcurrent(11)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[11].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            12
          </button>
          <button
            onClick={() => {
              setcurrent(12)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[12].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            13
          </button>
          <button
            onClick={() => {
              setcurrent(13)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[13].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            14
          </button>
          <button
            onClick={() => {
              setcurrent(14)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[14].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            15
          </button>
          <button
            onClick={() => {
              setcurrent(15)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[15].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            16
          </button>
          <button
            onClick={() => {
              setcurrent(16)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[16].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            17
          </button>
          <button
            onClick={() => {
              setcurrent(17)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[17].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            18
          </button>
          <button
            onClick={() => {
              setcurrent(18)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[18].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            19
          </button>
          <button
            onClick={() => {
              setcurrent(19)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[19].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            20
          </button>
          <button
            onClick={() => {
              setcurrent(20)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[20].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            21
          </button>
          <button
            onClick={() => {
              setcurrent(21)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[21].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            22
          </button>
          <button
            onClick={() => {
              setcurrent(22)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[22].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            23
          </button>
          <button
            onClick={() => {
              setcurrent(23)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[23].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            24
          </button>
          <button
            onClick={() => {
              setcurrent(24)
              setgevaar(true)
            }}
            className={`${
              mijngevaararr[24].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            25
          </button>
        </div>
      )}

      {kennis ? (
        <div>
          <Kennis
            kennis={kennis}
            setkennis={setkennis}
            vragen={vragen}
            mijnkennisarr={mijnkennisarr}
            setcurrquestion={setcurrquestion}
            currquestion={currquestion}
            current={current}
            setcurrent={setcurrent}
          />
        </div>
      ) : (
        <div
          className={`${
            gevaar || inzicht ? 'hidden' : 'lg:m-4 xl:mx-64  md:mx-24 lg:mx-44'
          }`}
        >
          <h1 className='lg:mb-2 md:mb-2 md:text-xl'>Kennis</h1>
          <h2 className='lg:mb-2 md:mb-2'>
            Je hebt : {kennisscore} van de 12 vragen goed.
            {kennisscore >= 10 ? (
              <> Je bent geslaagd voor kennis. </>
            ) : (
              <>Je bent gezakt voor kennis.</>
            )}{' '}
          </h2>
          <button
            onClick={() => {
              setcurrquestion(25)
              setcurrent(0)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[0].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }
            
            `}
          >
            1
          </button>
          <button
            onClick={() => {
              setcurrquestion(26)
              setcurrent(1)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[1].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            2
          </button>
          <button
            onClick={() => {
              setcurrquestion(27)
              setcurrent(2)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[2].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            3
          </button>
          <button
            onClick={() => {
              setcurrquestion(28)
              setcurrent(3)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[3].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            4
          </button>
          <button
            onClick={() => {
              setcurrquestion(29)
              setcurrent(4)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[4].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            5
          </button>
          <button
            onClick={() => {
              setcurrquestion(30)
              setcurrent(5)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[5].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            6
          </button>
          <button
            onClick={() => {
              setcurrquestion(31)
              setcurrent(6)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[6].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            7
          </button>
          <button
            onClick={() => {
              setcurrquestion(32)
              setcurrent(7)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[7].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            8
          </button>
          <button
            onClick={() => {
              setcurrquestion(33)
              setcurrent(8)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[8].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            9
          </button>
          <button
            onClick={() => {
              setcurrquestion(34)
              setcurrent(9)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[9].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            10
          </button>
          <button
            onClick={() => {
              setcurrquestion(35)
              setcurrent(10)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[10].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            11
          </button>
          <button
            onClick={() => {
              setcurrquestion(36)
              setcurrent(11)
              setkennis(true)
            }}
            className={`${
              mijnkennisarr[11].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            12
          </button>
        </div>
      )}

      {inzicht ? (
        <div>
          <Inzicht
            inzicht={inzicht}
            setinzicht={setinzicht}
            vragen={vragen}
            mijninzichtarr={mijninzichtarr}
            setcurrquestion={setcurrquestion}
            currquestion={currquestion}
            current={current}
            setcurrent={setcurrent}
          />
        </div>
      ) : (
        <div
          className={`${
            gevaar || kennis ? 'hidden' : 'lg:m-4 xl:mx-64  md:mx-24 lg:mx-44'
          }`}
        >
          <h1 className='lg:mb-2 md:mb-2 md:text-xl'>Inzicht</h1>
          <h2 className='lg:mb-2 md:mb-2 '>
            Je hebt : {inzichtscore} van de 28 vragen goed.
            {inzichtscore >= 10 ? (
              <> Je bent geslaagd voor inzicht. </>
            ) : (
              <>Je bent gezakt voor inzicht.</>
            )}{' '}
          </h2>
          <button
            onClick={() => {
              setcurrquestion(37)
              setcurrent(0)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[0].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }
            
            `}
          >
            1
          </button>
          <button
            onClick={() => {
              setcurrquestion(38)
              setcurrent(1)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[1].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            2
          </button>
          <button
            onClick={() => {
              setcurrquestion(39)
              setcurrent(2)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[2].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            3
          </button>
          <button
            onClick={() => {
              setcurrquestion(40)
              setcurrent(3)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[3].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            4
          </button>
          <button
            onClick={() => {
              setcurrquestion(41)
              setcurrent(4)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[4].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            5
          </button>
          <button
            onClick={() => {
              setcurrquestion(42)
              setcurrent(5)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[5].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            6
          </button>
          <button
            onClick={() => {
              setcurrquestion(43)
              setcurrent(6)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[6].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            7
          </button>
          <button
            onClick={() => {
              setcurrquestion(44)
              setcurrent(7)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[7].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            8
          </button>
          <button
            onClick={() => {
              setcurrquestion(45)
              setcurrent(8)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[8].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            9
          </button>
          <button
            onClick={() => {
              setcurrquestion(46)
              setcurrent(9)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[9].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            10
          </button>
          <button
            onClick={() => {
              setcurrquestion(47)
              setcurrent(10)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[10].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            11
          </button>
          <button
            onClick={() => {
              setcurrquestion(48)
              setcurrent(11)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[11].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            12
          </button>
          <button
            onClick={() => {
              setcurrquestion(49)
              setcurrent(12)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[12].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            13
          </button>
          <button
            onClick={() => {
              setcurrquestion(50)
              setcurrent(13)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[13].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            14
          </button>
          <button
            onClick={() => {
              setcurrquestion(51)
              setcurrent(14)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[14].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            15
          </button>
          <button
            onClick={() => {
              setcurrquestion(52)
              setcurrent(15)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[15].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            16
          </button>
          <button
            onClick={() => {
              setcurrquestion(53)
              setcurrent(16)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[16].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            17
          </button>
          <button
            onClick={() => {
              setcurrquestion(54)
              setcurrent(17)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[17].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            18
          </button>
          <button
            onClick={() => {
              setcurrquestion(55)
              setcurrent(18)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[18].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            19
          </button>
          <button
            onClick={() => {
              setcurrquestion(56)
              setcurrent(19)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[19].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            20
          </button>
          <button
            onClick={() => {
              setcurrquestion(57)
              setcurrent(20)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[20].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            21
          </button>
          <button
            onClick={() => {
              setcurrquestion(58)
              setcurrent(21)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[21].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            22
          </button>
          <button
            onClick={() => {
              setcurrquestion(59)
              setcurrent(22)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[22].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            23
          </button>
          <button
            onClick={() => {
              setcurrquestion(60)
              setcurrent(23)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[23].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            24
          </button>
          <button
            onClick={() => {
              setcurrquestion(61)
              setcurrent(24)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[24].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            25
          </button>
          <button
            onClick={() => {
              setcurrquestion(62)
              setcurrent(25)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[25].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            26
          </button>
          <button
            onClick={() => {
              setcurrquestion(63)
              setcurrent(26)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[26].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            27
          </button>
          <button
            onClick={() => {
              setcurrquestion(64)
              setcurrent(27)
              setinzicht(true)
            }}
            className={`${
              mijninzichtarr[27].isCorrect
                ? 'bg-green-400 rounded p-3 m-2 cursor-pointer'
                : 'bg-red-400 rounded p-3 m-2 cursor-pointer'
            }`}
          >
            28
          </button>
        </div>
      )}
    </div>
  )
}

export default Overzicht
