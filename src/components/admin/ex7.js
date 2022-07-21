import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from 'firebase/firestore'

function Ex7({ setex7, setda }) {
  const [vraag, setVraag] = useState('')
  const [waarom, setWaarom] = useState('')
  const [ant1, setAnt1] = useState('')
  const [ant2, setAnt2] = useState('')
  const [ant3, setAnt3] = useState('')
  const [img, setImg] = useState('')
  const [isCorrect1, setIsCorrect1] = useState(false)
  const [isCorrect2, setIsCorrect2] = useState(false)
  const [isCorrect3, setIsCorrect3] = useState(false)
  const [vragen, setVragen] = useState([])
  const [progress, setProgress] = useState(0)
  const [submittedans, setsubmittedAns] = useState('')
  const [goodAns, setgoodAns] = useState('')

  const isCorrect1btn = () => {
    setIsCorrect1(true)
    setIsCorrect2(false)
    setIsCorrect3(false)
    setgoodAns(ant1)
    setsubmittedAns(ant1)
  }
  const isCorrect2btn = () => {
    setIsCorrect1(false)
    setIsCorrect3(false)
    setIsCorrect2(true)
    setgoodAns(ant2)
    setsubmittedAns(ant2)
  }
  const isCorrect3btn = () => {
    setIsCorrect1(false)
    setIsCorrect2(false)
    setIsCorrect3(true)
    setgoodAns(ant3)
    setsubmittedAns(ant3)
  }

  const userRef = collection(db, 'vragen')

  useEffect(() => {
    const getVragen = async () => {
      const data = await getDocs(userRef)
      setVragen(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getVragen()
  }, [])

  const [twoquestions, settwoquestions] = useState(false)

  const createQeustion = async () => {
    let myA = [
      {
        goodAns: goodAns,
        vraag: vraag,
        image: img,
        opties: [
          { id: 1, ant: ant1, isCorrect: isCorrect1 },
          { id: 2, ant: ant2, isCorrect: isCorrect2 },
          { id: 3, ant: ant3, isCorrect: isCorrect3 },
        ],
        waarom: waarom,
      },
    ]
    await updateDoc(doc(db, 'vragen', 'examen7'), {
      questions: arrayUnion(...myA),
    })
    window.location.reload()
  }
  const createQeustion2 = async () => {
    let myA = [
      {
        goodAns: goodAns,
        vraag: vraag,
        image: img,
        opties: [
          { id: 1, ant: ant1, isCorrect: isCorrect1 },
          { id: 2, ant: ant2, isCorrect: isCorrect2 },
        ],
        waarom: waarom,
      },
    ]
    await updateDoc(doc(db, 'vragen', 'examen7'), {
      questions: arrayUnion(...myA),
    })
    window.location.reload()
  }

  const formHandler = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    uploadFiles(file)
  }
  const uploadFiles = (file) => {
    if (!file) return
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(prog)
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL)
        })
      }
    )
  }

  return (
    <>
      <div>
        <div className='sm:flex sm:items-center  sm:justify-center'>
          vraag 25 toevoegen dan is gevaarherkenning klaar
        </div>
        <div className='sm:flex sm:items-center  sm:justify-center'>
          vraag 37 toevoegen dan is kennis klaar
        </div>
        <div className='sm:flex sm:items-center  sm:justify-center'>
          vraag 65 toevoegen dan is inzicht klaar klaar
        </div>
        <br />
        <div>
          <div className='sm:flex sm:items-center text-xl  sm:justify-center'>
            je voegt nu vraag :
            {vragen[6] && vragen[6].questions ? (
              vragen[6].questions.length + 1
            ) : (
              <div> 1 </div>
            )}{' '}
            toe
          </div>
          <div className='sm:flex sm:items-center  sm:justify-center'>
            <button
              onClick={isCorrect1btn}
              className='md:mt-6 sm:m-4 bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            >
              antwoord 1
            </button>
            <button
              onClick={isCorrect2btn}
              className='md:mt-6 sm:m-4 bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            >
              antwoord 2
            </button>
            <button
              onClick={isCorrect3btn}
              className={`${
                twoquestions
                  ? 'hidden'
                  : 'md:mt-6 sm:m-4 bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              }`}
            >
              antwoord 3
            </button>
          </div>
          <div className='sm:flex sm:items-center  sm:justify-center'>
            <input
              className={`border-2  md:mt-6 sm:m-4 border-black `}
              placeholder='vraag'
              onChange={(e) => {
                setVraag(e.target.value)
              }}
            />
            <input
              className='hidden'
              placeholder='foto'
              onChange={(e) => {
                setImg(e.target.value)
              }}
            />
            <input
              className='hidden'
              placeholder='foto'
              onChange={(e) => {
                setImg(e.target.value)
              }}
            />
            <input
              className={`border-2  md:mt-6 sm:m-4 border-black ${
                isCorrect1
                  ? 'bg-green-300'
                  : 'border-2  md:mt-6 sm:m-4 border-black'
              }`}
              placeholder='antwoord 1'
              onChange={(e) => {
                setAnt1(e.target.value)
              }}
            />
            <input
              className={`border-2  md:mt-6 sm:m-4 border-black ${
                isCorrect2
                  ? 'bg-green-300'
                  : 'border-2  md:mt-6 sm:m-4 border-black'
              }`}
              placeholder='antwoord 2'
              onChange={(e) => {
                setAnt2(e.target.value)
              }}
            />
            <input
              className={`${
                twoquestions ? 'hidden' : ``
              } border-2  md:mt-6 sm:m-4 border-black ${
                isCorrect3
                  ? 'bg-green-300'
                  : 'border-2  md:mt-6 sm:m-4 border-black'
              }`}
              placeholder='antwoord 3'
              onChange={(e) => {
                setAnt3(e.target.value)
              }}
            />
            <textarea
              rows='4'
              cols='50'
              className='border-2  md:mt-6 sm:m-4 border-black'
              type='textarea'
              placeholder='waarom is de vraag goed'
              onChange={(e) => {
                setWaarom(e.target.value)
              }}
            />
          </div>
          <div className='sm:flex sm:items-center sm:justify-center'>
            <form className='sm:m-4' onSubmit={formHandler}>
              <label>
                kies een foto ::
                <input type='file' className='input' />
              </label>
              <button
                className='sm:m-4 bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                type='submit'
              >
                voeg foto toe
              </button>
            </form>
            <hr />
            <h2>Uploading done {progress}%</h2>
          </div>
          <div className='mt-3 flex justify-center items-center'>
            {twoquestions ? (
              <>
                <button
                  className='bg-blue-500 mt-3 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full'
                  onClick={createQeustion2}
                >
                  {' '}
                  maak vraag met 2 antwoorden
                </button>
              </>
            ) : (
              <div>
                <button
                  className='bg-blue-500 mt-3 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full'
                  onClick={createQeustion}
                >
                  {' '}
                  maak vraag
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            className='bg-blue-500 mt-3 ml-36 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full'
            onClick={() => settwoquestions(!twoquestions)}
          >
            2 antwoorden
          </button>
        </div>
      </div>
      <button
        className=' bg-blue-500 mt-16 ml-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => {
          setex7(false)
          setda(false)
        }}
      >
        ga terug
      </button>
    </>
  )
}

export default Ex7
