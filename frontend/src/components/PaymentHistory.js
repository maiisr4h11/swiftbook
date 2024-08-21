import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/PaymentHistory.css'; // Ensure this CSS file contains necessary styles

const paymentHistoryData = [
  {
    id: 1,
    eventSpace: 'Elegant Ballroom',
    date: '2024-08-25',
    amount: '$1,200',
  },
  // Add more payment history as needed
];

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState(paymentHistoryData);
  const navigate = useNavigate();

  const handleCancelReservation = (id) => {
    // Here you would normally perform the cancellation logic (e.g., API call)
    // For demonstration purposes, we'll just filter out the canceled reservation
    setPayments(payments.filter(payment => payment.id !== id));
    alert('Reservation canceled successfully!');
  };

  const handleBackToEventSpaces = () => {
    navigate('/eventspace');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Payment History</h1>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Event Space</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id}>
                  <td>{index + 1}</td>
                  <td>{payment.eventSpace}</td>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelReservation(payment.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleBackToEventSpaces}>
              Back to Event Spaces
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;




