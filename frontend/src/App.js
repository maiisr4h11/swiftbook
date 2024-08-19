import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodFest from './Event/FoodFest'
import Navbar from './Navbar/Navbar'
import BookVendor from './Vendor/BookVendor';

function App() {
  return (
    <div>
       <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<FoodFest/>}/>
         <Route path='/vendor' element={<BookVendor/>}/>
       </Routes>
      </Router>
      </div>
  )
}

export default App