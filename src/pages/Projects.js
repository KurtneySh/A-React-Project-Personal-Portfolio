import React from 'react'
import ProjectList from "../components/projectlist.json"
import HTMLPage from "../media/HTMLPage.png"
import GoPage from "../media/GoPage.png"
import ToDoList from "../media/ToDoList.png"
import FizzBuzz from "../media/FizzBuzz.png"
import GuessingGame from "../media/GuessingGame.png"
import "../styles/project.css"

const Projects = () => {
  const imageUrl = [
    HTMLPage,
    GoPage,
    ToDoList,
    FizzBuzz,
    GuessingGame
  ]

  for (let i = 0; i < imageUrl.length; i++) {
    ProjectList[i].image = imageUrl[i]
  }

  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {
          ProjectList.map((project) =>{
            return (
              <div className='projectItem'>
                <img src={project.image} className="projectImage" />
                <a href={project.website} target="_blank">
                  <div>{project.name}</div>
                </a>
                <div>language: {project.language}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects