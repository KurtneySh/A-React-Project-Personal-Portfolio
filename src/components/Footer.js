import React from 'react'
import linkedin from "../media/linkedin.png"
import github from "../media/github.png"
import envelope from "../media/envelope.png" 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact'>
        <a href='https://www.linkedin.com/in/eric-du-962a44245/' target='_blank'><img src={linkedin} /></a>
      </div>
      <div className='contact'>
        <a href='https://github.com/KurtneySh' target='_blank'><img src={github} /></a>
      </div>
      <div className='contact'>
        <a href='mailto:du.xint@northeastern.edu' target='_blank'><img src={envelope} /></a>
      </div>
    </div>
  )
}

export default Footer