import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Avatar } from '@mui/material';
import "../Gstyles.css"

const ReservationSummary = () => {
  const { id } = useParams(); // Get the reservation ID from the URL
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reservations/${id}`);
        setReservation(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load reservation details.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  const handleCancel = async () => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      try {
        await axios.delete(`http://localhost:5000/api/reservations/${id}`);
        setReservation(null); // Update state to reflect the cancellation
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to cancel reservation.');
      }
    }
  };

  const handleGoToEventSpace = () => {
    navigate('/eventspace'); // Redirect to event space page
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  if (error) return <div className="alert alert-danger text-center mt-5">{error}</div>;

  if (!reservation) return (
    <div className="text-center mt-5">
      <div className="alert alert-info">You don't have any reservation.</div>
      <button className="btn btn-primary mt-3" onClick={handleGoToEventSpace}>Browse Event Spaces</button>
    </div>
  );

  return (
    <div className="container mt-5 reservation-summary-container">
      <div className="d-flex align-items-center mb-4">
        <Avatar alt="Logo" src="logofav.jpg" sx={{ width: 56, height: 56 }} />
        <h1 className="ms-3">Reservation Summary</h1>
      </div>
      <div className="card shadow-lg rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h5 className="card-title mb-3">Reservation Information</h5>
              <p><strong>Customer Name:</strong> {reservation.customer_name}</p>
              <p><strong>Reference Number:</strong> {reservation.reference_number}</p>
              <p><strong>Event Space:</strong> {reservation.name_event_space.name_event_space}</p>
              <p><strong>Date:</strong> {new Date(reservation.date_reservation).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {reservation.time_reservation}</p>
            </div>
            <div className="col-md-4 button-group">
              <button className="btn btn-primary btn-sm" onClick={handleGoToEventSpace}>Event Space</button>
              <button className="btn btn-danger btn-sm mb-2" onClick={handleCancel}>Cancel Reservation</button>
              <div className="mt-4 cancellation-policy">
                <h6>Cancellation Policy:</h6>
                <p>Please note that cancellations made within 24 hours of the reservation time may be subject to a fee. We recommend contacting us as soon as possible if you need to cancel or reschedule your reservation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;