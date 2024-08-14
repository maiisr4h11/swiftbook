import React from 'react';
import Navbar from './Build/Navbar';
import Home from './Build/Home'
import Footer from './Build/Footer';
import Darkmode from './Build/Darkmode'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      {/* <Darkmode/> */}
    </div>
  );
}

export default App;
