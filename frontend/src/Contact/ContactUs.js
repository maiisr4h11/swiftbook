import React, { useState } from 'react';
import './ContactUs.css'; // Make sure to import your CSS file

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Show confirmation popup
  };

  const handleConfirm = () => {
    setShowPopup(true); // Show the success message
    setShowConfirmation(false);

    // Simulate sending message
    setTimeout(() => {
      setShowPopup(false); // Hide the success message after 3 seconds
    }, 10000);
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Hide confirmation popup
  };

  return (
    <div className="background-container">
      <div className="container">
        <div className="row">
          {/* * Form Column * */}
          <div className="col-md-6">
            <div className="glass-form">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          {/* Card Column */}
          <div className="col-md-6">
            <div className="glass-form">
              <img src="Swiftbook logo.jpg" className="img-fluid rounded-start" alt="Company Logo" style={{ width: '200px', height: '175px', display: 'block', marginBottom: "10px", marginLeft: "auto", marginRight: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">Swiftbook Inc</h5>
                <p className="card-text">Email: </p>
                <p className="card-text">Whatsapp/Phone No.: </p>
                <p className="card-text">Address: </p>
                <a href="#" className="btn btn-primary">Back to Homepage</a>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Confirmation */}
        {showConfirmation && (
          <div className="top-popup">
            <div className="popuptext show" id="popupConfirmation">
              <p>Confirm message submission?</p>
              <button className="btn btn-success" onClick={handleConfirm}>Yes</button>
              <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}

        {/* Popup Message */}
        {showPopup && (
          <div className="top-popup">
            <div className="popuptext show" id="popupMessage">
              <p>Message sent.</p>
              <p>Thanks for contacting us.</p>
              <p>We'll try to reply to your enquiry within 1 business day. If you need to speak to us urgently, please refer to the Contact Us page for our telephone numbers.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
