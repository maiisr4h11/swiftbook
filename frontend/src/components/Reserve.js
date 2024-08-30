import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/Reserve.css'; // Ensure this CSS file contains necessary styles

const generateReferenceNumber = () => {
  return 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { eventSpace, reservationDate, reservationTime, customerName, customerEmail, customerPhone } = location.state || {};

  const formattedReservationDate = reservationDate ? new Date(reservationDate).toISOString().split('T')[0] : '';
  const [remarks, setRemarks] = useState('');
  const [reference_number, setReferenceNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [eventSpaceName, setEventSpaceName] = useState('');
  const [reservationId, setReservationId] = useState('');

  useEffect(() => {
    setReferenceNumber(generateReferenceNumber());
  }, []);

  useEffect(() => {
    // Set the event space name from the eventSpace prop
    if (eventSpace) {
      setEventSpaceName(eventSpace.name_event_space);
    }
  }, [eventSpace]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/reservations/create', {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        date_reservation: formattedReservationDate,
        time_reservation: reservationTime,
        name_event_space: eventSpace._id, // Use the ObjectId from the eventSpace object
        remarks,
        reference_number,
      });

      const reservation = response.data;
      setReservationId(reservation._id); // Save the reservation ID
      setEventSpaceName(reservation.name_event_space.name_event_space); // Update event space name
      setShowModal(true);
    } catch (err) {
      setError(err.response?.data?.error || 'Reservation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (reservationId) {
      navigate(`/reservation-summary/${reservationId}`); // Redirect to Reservation Summary page
    } else {
      navigate('/eventspace'); // Fallback if reservationId is not set
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="reserveForm">
            <h1>Reserve <strong>{eventSpaceName}</strong></h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="customer_name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="customer_name"
                  value={customerName}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="customer_email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="customer_email"
                  value={customerEmail}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="customer_phone" className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="customer_phone"
                  value={customerPhone}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date_reservation" className="form-label">Reservation Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date_reservation"
                  value={formattedReservationDate}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="time_reservation" className="form-label">Reservation Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="time_reservation"
                  value={reservationTime}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="remarks" className="form-label">Remarks</label>
                <textarea
                  className="form-control"
                  id="remarks"
                  rows="3"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Confirm Reservation and Pay'}
              </button>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>

            {/* Success Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content text-dark">
                  <div className="modal-header">
                    <h5 className="modal-title">Reservation and Payment Successful</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>Your reservation has been confirmed for <strong>{eventSpaceName}</strong>.</p>
                    <p>Your reference number is <strong>{reference_number}</strong>.</p>
                    <p>We will contact you soon with further details.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
