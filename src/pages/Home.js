import React from 'react'
import pic from "../media/Xintong Du.jpeg"
import html from "../media/html.png"
import css from "../media/css.png"
import javascript from "../media/javascript.png"
import react from "../media/react.png"
import nodejs from '../media/nodejs.png'
import java from '../media/java.png'
import python from '../media/python.png'
import golang from '../media/golang.png'
import solidity from '../media/solidity.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='opening'>
        <img src={pic} alt="selfie"/>
        <div className='title'>
          <p>Hi, I am <span style={{color: "#8B0000"}}>Xintong Du</span></p>
          <p>A Software Engineer</p>
        </div>
        <div style={{fontSize: "20px"}}>
          <div>
            I am curently stuying Information Systems at <b><a href='https://www.northeastern.edu/' target="_blank">Northeastern University</a></b>
          </div>
          <div>
            And I am always willing to learn new things
          </div>
        </div>
      </div>
      
      <div className='about'>
        <div>
        <h1>My Skills</h1>
          <hr style={{width: "100%"}}></hr>
          <h3>Front-end</h3>
          <div className='frontend'>
            <div className='skills'>
              <div className='imgBox'>
                <img src={html} />
              </div>
              <div>HTML</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={css} />
              </div>
              <div>CSS</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={javascript} />
              </div>
              <div>JavaScript</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={react} />
              </div>
              <div>React</div>
            </div>
          </div>

          <h3>Back-end</h3>
          <div className='backend'>
            <div className='skills'>
              <div className='imgBox'>
                <img src={nodejs} />
              </div>
              <div>Node.js</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={java} />
              </div>
              <div>Java</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={python} />
              </div>
              <div>Python</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={golang} />
              </div>
              <div>Go</div>
            </div>
            <div className='skills'>
              <div className='imgBox'>
                <img src={solidity} />
              </div>
              <div>Solidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home