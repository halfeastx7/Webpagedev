import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './ReactTask1/Home'
import About from './ReactTask1/About'
import Contact from './ReactTask1/Contact'
import Navbar from './ReactTask1/Navbar'
import Footer from './ReactTask1/Footer'
import Services from './ReactTask1/Services'

function App() {
return (
<div>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/abt' element={<About />} />
      <Route path='/serv' element={<Services />} />
      <Route path='/cn' element={< Contact />} />
    </Routes>
    <Footer />
  </Router>
</div>
}export default App;

//-----------------------------------------------------------------------



