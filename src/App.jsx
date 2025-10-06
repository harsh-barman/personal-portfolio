import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import HeroSection from './components/pages/herosection/herosection'
import Navbar from './components/Layout/Navbar'
import ScrollToTop from "./components/styles/ScrollToTop"
import About from './components/pages/About/About'
import Projects from './components/pages/Projects/Projects'
import Home from './components/pages/Home/Home'

export default function App() {
  return (
    <Router>
     <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </Router>
  )
}