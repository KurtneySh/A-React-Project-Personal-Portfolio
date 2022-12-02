import React from 'react'
import { useState } from 'react'

const Button = () => {
  const [darkMode, setDarkMode] = useState("Dark Mode")
  
  const buttonHelper = () => {
    const body = document.querySelector("body")

    if (darkMode == "Dark Mode") {
      setDarkMode("Light Mode")
      body.style.color = "white"
      body.style.backgroundColor = "rgb(12, 51, 54)";
    } else {
      setDarkMode("Dark Mode")
      body.style.color = "black"
      body.style.backgroundColor = "white";
    }
  }

  return (
    <div className='button'>
        <button onClick={buttonHelper}>{darkMode}</button>
    </div>
  )
}

export default Button