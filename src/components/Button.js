import React from 'react'
import { useState } from 'react'

const Button = () => {
  const [darkMode, setDarkMode] = useState("")
  const body = document.querySelector("body")
  let buttonText = "dark mode"

  if (darkMode == "darkModeActivate") {
    buttonText = "light mode"
    body.style.color = "white"
    body.style.backgroundColor = "rgb(12, 51, 54)";
  } else {
    buttonText = "dark mode"
    body.style.color = "black"
    body.style.backgroundColor = "white";
  }

  return (
    <div className='button'>
        <button onClick={() => { setDarkMode(darkMode === "" ? "darkModeActivate" : "")}}>{buttonText}</button>
    </div>
  )
}

export default Button