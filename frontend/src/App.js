import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reserve from './components/Reserve';
import EventSpaceDetails from './components/Details';
import EventSpaces from './components/Eventspace';
import ReservationSummary from './components/ReservationSummary'; // Import the new component

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/eventspace" element={<EventSpaces />} />
        <Route path="/eventspace/:event_space_ID" element={<EventSpaceDetails />} />
        <Route path="/reservation-summary/:id" element={<ReservationSummary />} /> {/* Add route for ReservationSummary */}
      </Routes>
    </Router>
  );
};

export default App;
