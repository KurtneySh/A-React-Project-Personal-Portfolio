import React from 'react'
import ProjectList from "../components/projectlist.json"
import HTMLPage from "../media/HTMLPage.png"
import GoPage from "../media/GoPage.png"
import ToDoList from "../media/ToDoList.png"
import FizzBuzz from "../media/FizzBuzz.png"
import GuessingGame from "../media/GuessingGame.png"
import NFTEngine from "../media/NFTEngine.png"

const Projects = () => {
  const imageUrl = [
    HTMLPage,
    GoPage,
    ToDoList,
    FizzBuzz,
    GuessingGame,
    NFTEngine
  ]

  for (let i = 0; i < imageUrl.length; i++) {
    ProjectList[i].image = imageUrl[i]
  }

  return (
    <div className='projects'>
      <h1 style={{textAlign: "center"}}>My Personal Projects</h1>
      <div className='projectList'>
        {
          ProjectList.map((project) =>{
            return (
              <div className='projectItem'>
                <img src={project.image} />
                <div className='details'>Name: <a href={project.website} target="_blank">{project.name}</a></div>
                <div className='details'>Language: {project.language}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects