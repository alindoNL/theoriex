import React, { useState } from 'react'

function Footer() {
  
  const [datum, setdatum] = useState(new Date().getFullYear())

  return (
    <>
      <footer className='text-center lg:text-left'>
        <div
          className='text-center text-lg p-4'
        >
          © {datum} Theoriex.nl
      
        </div>
      </footer>
    </>
  )
}

export default Footer
