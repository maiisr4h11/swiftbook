import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import Login from './Project/Login';
import Signup from './Project/Signup';
import Home from './Project/Home';
import AboutUs from './Project/AboutUs';
import ContactUs from './Project/ContactUs';
import Setting from './Project/Setting';
import Security from './Project/Security';
import FoodFest from './Project/FoodFest';
import BookVendor from './Project/BookVendor';
import BookingDetails from './Project/BookingDetails';
import BookingSummary from './Project/BookingSummary';
import Payment from './Project/Payment';
import Reserve from './Project/Reserve';
import EventSpaceDetails from './Project/Details';
import EventSpaces from './Project/Eventspace';
import ReservationSummary from './Project/ReservationSummary';
import ProtectedRoute from './Project/ProtectedRoute';
import Layout from './Project/Layout';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          userId: decoded.userId,
          name: decoded.name
        });
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
        setUser(null); // Ensure state is cleared if token is invalid
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        
        {/* Protected routes will use Layout */}
        <Route element={<Layout user={user} setUser={setUser} />}>
          {/* Define protected routes inside Layout */}
          <Route path="/home" element={<ProtectedRoute element={Home} user={user} />} />
          <Route path="/foodfest" element={<ProtectedRoute element={FoodFest} user={user} />} />
          <Route path="/bookvendor" element={<ProtectedRoute element={BookVendor} user={user} />} />
          <Route path="/bookingdetails/:id" element={<ProtectedRoute element={BookingDetails} user={user} />} />
          <Route path="/payment" element={<ProtectedRoute element={Payment} user={user} />} />
          <Route path="/bookingsummary" element={<ProtectedRoute element={BookingSummary} user={user} />} />
          <Route path="/reserve" element={<ProtectedRoute element={Reserve} user={user} />} />
          <Route path="/eventspace" element={<ProtectedRoute element={EventSpaces} user={user} />} />
          <Route path="/eventspace/:event_space_ID" element={<ProtectedRoute element={EventSpaceDetails} user={user} />} />
          <Route path="/reservation-summary/:id" element={<ProtectedRoute element={ReservationSummary} user={user} />} />
          <Route path="/setting" element={<ProtectedRoute element={Setting} user={user} />} />
          <Route path="/security" element={<ProtectedRoute element={Security} user={user} />} />
          <Route path="/aboutus" element={<ProtectedRoute element={AboutUs} user={user} />} />
          <Route path="/contactus" element={<ProtectedRoute element={ContactUs} user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
