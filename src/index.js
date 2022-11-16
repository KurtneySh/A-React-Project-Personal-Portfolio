import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, About, Projects} from "./pages/index.js"
import Footer from "./components/Footer.js"
import Navbar from "./components/Navbar.js"
import Button from './components/Button.js'
// import "../styles/footer.css"
import "./styles/footer.css"
import "./style.css"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <Button />
      <Footer />
    </div>
  )
}



const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />)
