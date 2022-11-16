import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar