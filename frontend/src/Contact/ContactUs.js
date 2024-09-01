import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Show confirmation popup
  };

  const handleConfirm = async () => {
    setShowPopup(true); // Show the success message
    setShowConfirmation(false);

    try {
      // Send the form data to the server
      await axios.post('http://localhost:5000/api/contacts', { name, email, message });

      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setShowPopup(false);
      alert("There was an error submitting your message. Please try again.");
    }

    // Hide the success message after 10 seconds
    setTimeout(() => {
      setShowPopup(false); // Hide the success message
    }, 10000);
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Hide confirmation popup
  };

  // Handle textarea change and auto-expand
  const handleChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    setMessage(e.target.value); // Update state with new value
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
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control message-box"
                    id="message"
                    placeholder="Your message..."
                    value={message}
                    onChange={handleChange} // Use handleChange function here
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          {/* Card Column */}
          <div className="col-md-6">
            <div className="glass-form">
              <img
                src="Swiftbook logo.jpg"
                className="img"
                alt="Company Logo"
                style={{
                  width: '700px',
                  height: 'auto',
                  marginBottom: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  border: '2px solid black',
                  borderRadius: '8px'
                }} />
              <div className="card-body2">
                <h5 className="card-title">SwiftBook Inc</h5>
                <p className="card-text">Email: swiftbook@org</p>
                <p className="card-text">Whatsapp/Phone No. : +6012 345 6789</p>
                <p className="card-text">Address: Lorong Tun Ismail 10,
                  <span style={{ display: 'block', marginLeft: '70px' }}>
                    25000 Kuantan Pahang
                  </span>
                </p>

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
              <button className="popup-close-btn" onClick={() => setShowPopup(false)}>×</button>
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
