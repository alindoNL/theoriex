import React, { useState} from 'react'


import Ex1 from './ex1'
import Ex2 from './ex2'
import Ex3 from './ex3'
import Ex4 from './ex4'
import Ex5 from './ex5'
import Ex6 from './ex6'
import Ex7 from './ex7'
import Ex8 from './ex8'
import Ex9 from './ex9'
import Ex10 from './ex10'
import {auth} from '../../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Navbar from '../navbar'
function Admin() {
 
      const [ex1, setex1] = useState(false)
      const [ex2, setex2] = useState(false)
      const [ex3, setex3] = useState(false)
      const [ex4, setex4] = useState(false)
      const [ex5, setex5] = useState(false)
      const [ex6, setex6] = useState(false)
      const [ex7, setex7] = useState(false)
      const [ex8, setex8] = useState(false)
      const [ex9, setex9] = useState(false)
      const [ex10, setex10] = useState(false)

    const [email, setemail] = useState('')
    const [passwd, setpasswd] = useState('')
    const [user, setuser] = useState({})
    const [loading, setLoading] = useState(false)
    const [da, setda] = useState(false)
      const login = async()=>{
          try {
           
            const user =await signInWithEmailAndPassword(
              auth,
              email,
              passwd
            )
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
      }
      const logout = async ()=>{
          await signOut(auth)
          window.location.reload()
      }
      onAuthStateChanged(auth, (currentuser)=>{
    
        setuser(currentuser)
      })
      
      if(loading){
        return <div>Loading...</div>
      }
  return (
    <div>
      <Navbar />
      {!user ? (
        <div>
          {' '}
          <h3 className='flex justify-center aling-center'>login</h3>
          <div className='flex justify-center aling-center mt-8'>
            <input
              onChange={(e) => {
                setemail(e.target.value)
              }}
              className=' m-2 rounded border-2'
              placeholder='email'
            />
            <input
              onChange={(e) => {
                setpasswd(e.target.value)
              }}
              className='m-2 rounded border-2'
              placeholder='wachtwoord'
            />
          </div>
          <button
            className='m-4 rounded p-4 bg-red-200'
            onClick={() => login()}
          >
            inloggen
          </button>{' '}
        </div>
      ) : (
        <div></div>
      )}

      {user ? (
        <div>
          {' '}
          {!da ? (
            <div>
              <button
                className='m-4 text-2xl bg-red-200 hover:opacity-80 p-3 rounded'
                onClick={() => logout()}
              >
                uit loggen
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex1(!ex1)
                }}
              >
                laat examen 1 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex2(!ex2)
                }}
              >
                laat examen 2 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex3(!ex3)
                }}
              >
                laat examen 3 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex4(!ex4)
                }}
              >
                laat examen 4 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex5(!ex5)
                }}
              >
                laat examen 5 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex6(!ex6)
                }}
              >
                laat examen 6 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex7(!ex7)
                }}
              >
                laat examen 7 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex8(!ex8)
                }}
              >
                laat examen 8 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex9(!ex9)
                }}
              >
                laat examen 9 zien
              </button>
              <button
                className='m-4 text-2xl bg-blue-400 hover:opacity-80 p-3 rounded'
                onClick={() => {
                  setda(true)
                  setex10(!ex10)
                }}
              >
                laat examen 10 zien
              </button>
            </div>
          ) : (
            <div></div>
          )}
          {ex1 ? (
            <Ex1 ex1={ex1} setex1={setex1} da={da} setda={setda} />
          ) : (
            <></>
          )}
          {ex2 ? (
            <>
              <Ex2 ex2={ex2} setex2={setex2} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex3 ? (
            <>
              <Ex3 ex2={ex3} setex3={setex3} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex4 ? (
            <>
              <Ex4 ex2={ex4} setex4={setex4} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex5 ? (
            <>
              <Ex5 ex2={ex5} setex5={setex5} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex6 ? (
            <Ex6 ex1={ex6} setex6={setex6} da={da} setda={setda} />
          ) : (
            <></>
          )}
          {ex7 ? (
            <>
              <Ex7 ex2={ex7} setex7={setex7} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex8 ? (
            <>
              <Ex8 ex2={ex8} setex8={setex8} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex9 ? (
            <>
              <Ex9 ex2={ex9} setex9={setex9} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
          {ex10 ? (
            <>
              <Ex10 ex2={ex10} setex10={setex10} setda={setda} da={da} />
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Admin
