import React from 'react'

const Home = () => {
  return (
    <div style={{height: '100%'}} className='home'>
      <div className='about'>
        <h1>Hi, I am Xintong Du</h1>
        <div className='prompt'><p>A Computer Software Engineering students at Northeastern University with a passion for programming</p></div>
        <div className='summary'>
          I am now 24 years old and always willing to try new things. I used to live in megacities in China for the first 20 years of his life, for example, Shanghai, Shenzhen and Guangzhou.
        </div>
        <br></br>
        <div className='skills'>
          <h2>Skills</h2>
          <h3>Front-end</h3>
          <p>HTML, CSS, JavaScript, React</p>
          <h3>Back-end</h3>
          <p>Node.js, Java, Python, Go, Solidty</p>
        </div>
      </div>
    </div>
  )
}

export default Home