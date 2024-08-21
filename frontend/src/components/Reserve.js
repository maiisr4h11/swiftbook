import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/Reserve.css'; // Ensure this CSS file contains necessary styles

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { eventSpace, date } = location.state || {};

  // State variables for contact details and modal visibility
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!eventSpace || !date) {
    return <div>Reservation details are missing.</div>;
  }

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleConfirmReservation = () => {
    // Simulate a successful payment confirmation
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate('/payment-history');
    }, 2000); // Redirect to PaymentHistoryPage after 2 seconds
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="content-wrapper col-12 col-md-12 col-lg-10">
        <div className="reserveContent p-4 border rounded bg-light shadow">
          <h1 className="text-center mb-4">Reserve {eventSpace.title}</h1>
          <div className="text-center mb-4">
            <img src={eventSpace.carouselImages[0]} className="img-fluid" alt={eventSpace.title} />
          </div>

          <h2 className="mb-3">Event Space Details</h2>
          <p>{eventSpace.description}</p>
          <p><strong>Price:</strong> {eventSpace.price} (per day)</p>
          <p><strong>Selected Date:</strong> {date.toDateString()}</p>

          <div className="form-group mt-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="policies mt-4">
            <h3>Payment and Cancellation Policies</h3>
            <ul>
              <li><strong>Payment:</strong> A deposit of 20% is required at the time of booking. The remaining balance is due 14 days before the event date.</li>
              <li><strong>Cancellation:</strong> Cancellations made at least 30 days before the event will receive a full refund. Cancellations made between 15 and 30 days before the event will incur a 50% cancellation fee. Cancellations made within 14 days of the event are non-refundable.</li>
            </ul>
          </div>

          <div className="text-center mt-4">
            <button 
              className="btn btn-primary w-100" 
              onClick={handleCheckout}
              disabled={!name || !email || !phone} // Disable button if any field is empty
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content p-4 border rounded bg-light shadow" onClick={e => e.stopPropagation()}>
            <h1 className="text-center mb-4">Checkout</h1>
            <div className="text-center mb-4">
              <img src={eventSpace.carouselImages[0]} className="img-fluid" alt={eventSpace.title} />
            </div>

            <div className="reservation-details p-4 border rounded bg-white mb-4">
              <h2 className="mb-3">Reservation Details</h2>
              <div className="detail-item">
                <span className="detail-label">Event Space:</span>
                <span className="detail-value">{eventSpace.title}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Price:</span>
                <span className="detail-value">{eventSpace.price} (per day)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Selected Date:</span>
                <span className="detail-value">{date.toDateString()}</span>
              </div>
            </div>

            <div className="contact-details p-4 border rounded bg-white mb-4">
              <h3 className="mb-3">Contact Details</h3>
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone Number:</span>
                <span className="detail-value">{phone}</span>
              </div>
            </div>

            <div className="text-center mt-4">
              <button 
                className="btn btn-success w-100"
                onClick={handleConfirmReservation}
              >
                Confirm and Pay {eventSpace.price}
              </button>
              <button 
                className="btn btn-secondary w-100 mt-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div className="success-backdrop">
          <div className="success-content p-4 border rounded bg-light shadow">
            <div className="text-center">
              <h1 className="mb-4">Payment Successful!</h1>
              <div className="success-icon mb-4">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
                  <path d="M7 12l3 3 5-5" stroke="#4CAF50" strokeWidth="2" />
                </svg>
              </div>
              <p>Your payment was successful. Redirecting to your payment history...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reserve;





