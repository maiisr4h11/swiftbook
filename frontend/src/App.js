import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Build/Home';
import Searchbar from './Build/Searchbar'
import Content from './Build/Content';
import Footer from './Build/Footer'
import Navbar from './Build/Navbar';
import Setting from './Build/Setting';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Searchbar/>
              <Content />
              <Footer />
            </>
          } />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;