import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

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
    }, 5000);
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Hide confirmation popup
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="background-container mx-5">
          <div className="row">

            {/* * Form Column * */}
            <div className="col-lg-6 md-12;">
              <div className="glass-form">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="btn my-3">Submit</button>
                </form>
              </div>
            </div>

            {/* Card Column */}
            <div className="col-lg-6 md-12 my-3">
              <div className="glass-form">
                <img src='./logofav.jpg'
                  className="align-item-center rounded"
                  alt="Company Logo"
                  style={{ width: '200px', height: '175px' }} />
                <div className="card-body"><br></br>
                  <h5 className="card-title">Swiftbook Inc</h5>
                  <p className="card-text">Email: </p>
                  <p className="card-text">Whatsapp/Phone No.: </p>
                  <p className="card-text">Address: </p>
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
      <Footer />
    </div>
  );
}

export default ContactUs;