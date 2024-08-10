import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodFest from './Event/FoodFest'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div>
       <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<FoodFest/>}/>
       </Routes>
      </Router>
      </div>
  )
}

export default App