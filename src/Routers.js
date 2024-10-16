import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function Routers() {
  return (
    <Router>
    <Routes>
     
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  </Router>
  )
}

export default Routers
