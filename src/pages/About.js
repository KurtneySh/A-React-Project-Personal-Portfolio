import React from 'react'
import freshmenCupChampion from "../media/Freshmen Cup Champion.jpg"
import managerCupChampion from "../media/Manager Cup Champion.jpg"
import graduationCupChampion from "../media/Graduation Cup Champion.jpg"
import layup from "../media/layup.jpg"
import meWearingATentJacket from "../media/Me wearing a tent jacket.jpg"
import aJacketCanTurnIntoATent from "../media/A jacket can turn into a tent.jpg"
import wearingACostumeWithFriends from "../media/Wearing a costume with friends.jpg"
import street1 from "../media/Street1.jpg"
import street2 from "../media/Street2.jpg"

const About = () => {
  return (
    <div className="aboutMe">
      <img src={freshmenCupChampion} />
      <img src={managerCupChampion} />
      <img src={graduationCupChampion} />
      <img src={layup} />
      <img src={meWearingATentJacket} />
      <img src={aJacketCanTurnIntoATent} />
      <img src={wearingACostumeWithFriends} />
      <img src={street1} />
      <img src={street2} />
      
      <div style={{margin: "30px 100px", fontSize: "25px"}} >
        I am also a huge fan of basketball and I spend a lot of time on it. I really enjoy playing basketball with my bros and I do miss them very much.
        I like to wear some interesting costumes or fashion clothes for pictures. My girlfriend always says it is wierd but I am still into it.
      </div>
    </div>
  )
}

export default About