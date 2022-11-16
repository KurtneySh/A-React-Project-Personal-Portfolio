import React from 'react'
import pic from "../media/Xintong Du.jpeg"
import "../styles/about.css"

const About = () => {
  return (
    <div className="about">
      <img style={{borderRadius: '50%', width: 400 }} src={pic} className="selfie" />
      <div style={{fontSize: "25px"}} >
        I am also a huge fan of basketball and I spend a lot of time on it. I really enjoy playing basketball with my bros and I do miss them very much.
        I like to wear some interesting costumes or fashion clothes for pictures. My girlfriend always says it is wierd but I am still into it.
      </div>
    </div>
  )
}

export default About