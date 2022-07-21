import
 React, {useState, useEffect, useRef} from 'react'
 import Navbar from '../components/navbar'
 import HCaptcha from '@hcaptcha/react-hcaptcha'
import { send } from 'emailjs-com'
function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'theoriex',
    message: '',
    email: '',
  })
  
  const [isarrived, setisarrived] = useState(false)
const [isnotarrived, setisnotarrived] = useState(false)
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }
  const [token, setToken] = useState(null)
 const captchaRef = useRef(null)
 const onLoad = async () => {
   await captchaRef.current.execute()
  }
  const [notverified, setnotverified] = useState(false)
  useEffect(() => {
   if (token) {
     setnotverified(false)
   }
  }, [token])
  const [time, settime] = useState(5)
  const [timeon, settimeon] = useState(false)
  const onSubmit =(e)=>{
    e.preventDefault() 
        send('service_8wzzw3r', 'template_ge4x3kc', toSend, 'tt5jVE9MXBiAXPls6')
          .then(() => {
            setisarrived(true)
            settimeon(true)
          })
          .catch((err) => {

                setisnotarrived(true)
            console.log( err)
          })
           setToSend({
             from_name: '',
             to_name: 'theoriex',
             message: '',
             email: '',
           })
          }
          useEffect(() => {
            if(timeon){
            let myInterval = setInterval(() => {
              if (time > 0) {
                settime(time - 1)
              }
              if (time === 0) {
               
                  clearInterval(myInterval)
                  window.location.reload()
              }
            }, 1000)
            return () => {
              clearInterval(myInterval)
            }
          }
          }, [timeon, time])
          if(isarrived){
            window.location.reload()
          }


  return (
    <>
    <Navbar />
      <div className='max-w-screen-md mx-auto p-5"'>
        <div className='text-center mb-16'>
          <h1 className='mt-5 text-2xl leading-7 text-gray-900 '>
            neem contact met ons op
          </h1>
        </div>

        <form className='w-full' onSubmit={onSubmit}>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-m font-bold mb-2'>
              naam
            </label>
            <input
              className=' block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='from_name'
              placeholder='naam'
              value={toSend.from_name}
              onChange={handleChange}
            />
            <label className='block uppercase  tracking-wide text-gray-700 text-m font-bold mb-2'>
              Email
            </label>
            <input
              className='block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              name='email'
              placeholder='email'
              value={toSend.email}
              onChange={handleChange}
            />
          </div>
          <div className='w-full px-3'></div>

          <div className='w-full px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-m font-bold mb-2'>
              bericht
            </label>
            <input
              className=' block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300'
              type='text'
              name='message'
              placeholder='bericht'
              value={toSend.message}
              onChange={handleChange}
            />
            {token ? (
              <div>
                <button className='bg-gray-200 hover:bg-gray-300 rounded p-3 mt-4'>
                  Versturen
                </button>
              </div>
            ) : (
              <div>
                <button
                  className='bg-gray-200 hover:bg-gray-300 rounded p-3 mt-4'
                  onClick={() => {
                    setnotverified(true)
                  }}
                  type='button'
                >
                  Versturen
                </button>
                {notverified ? (
                  <div>verifieer je zelf eerst </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
          <div className='mt-6 px-4'>
            <HCaptcha
              sitekey='a833176c-f14c-4403-837c-89b71998e9a0'
              ref={captchaRef}
              onVerify={setToken}
              onLoad={onLoad}
            />
          </div>
        </form>

        {isarrived ? <div>je bericht is ontvangen</div> : <div></div>}
        {isnotarrived ? (
          <div>
            je bericht is niet ontvangen je kan ons mailen op theoriex@info.nl
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default Contact
