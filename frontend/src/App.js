import { react, useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AuthSlider from './components/AuthSlider';


function App() {

  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthSlider setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
