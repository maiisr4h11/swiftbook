import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import "../CSS/BookVendor.css";
import Modal from "./Modal";

import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


function BookVendor() {
  const location = useLocation();
  const eventDetails = location.state; // Retrieve the passed event details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!eventDetails) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          {" "}
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  const handleProceedToPayment = async (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to proceed with the payment?"
    );
    if (isConfirmed) {
      const bookingData = {
        eventId: eventDetails._id,
        eventname: eventDetails.eventname,
        time: eventDetails.time,
        date: eventDetails.date,
        location: eventDetails.location,
        firstname: firstName,
        lastname: lastName,
        phonenum: phoneNum,
        email: email,
        message: message,
        price: eventDetails.price,
        image: eventDetails.image,
      };

      try {
        // Post booking data to the server
        const response = await axios.post(
          "http://localhost:5000/api/book-vendor/booking/vendor",
          bookingData
        );

        // Include the ObjectId in the booking data and navigate to the Payment page
        const bookingId = response.data._id;
        navigate("/payment", { state: { ...bookingData, bookingId } });
      } catch (error) {
        console.error("Error creating booking:", error);
        alert("There was an error processing your booking. Please try again.");
      }
    }
  };

  return (
    <div>
      <section className="py-0">
        <div className="container mt-5 mb-4">
          <div className="card bg-light overflow-hidden px-sm-5 my-0">
            <div className="row align-items-center g-4">
              <div className="col-sm-9">
                <div className="card-body">
                  <h1 className="m-0 h2 card-title mt-2" id="title">
                    Booking Details for {eventDetails?.eventname}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vendor">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow rounded-2">
                <div className="card-header border-bottom d-flex align-items-center">
                  <h4 className="card-title mb-0">Enter Your Details</h4>
                </div>
                <div className="card-body">
                  <form className="mt-4" onSubmit={handleProceedToPayment}>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Event Name <span className="text-danger">*</span>
                      </label>
                      <p className="form-control">{eventDetails?.eventname}</p>
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Your First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Your Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow rounded-2">
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h5 className="card-title mb-0 ">Price Summary</h5>
                  <button
                    className="btn btn-link p-0 mb-0"
                    onClick={() => setShowModal(true)}
                  >
                    View Cancellation Policy
                  </button>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="h6 fw-normal mb-0">
                        Booking Price
                        <a
                          tabIndex="0"
                          data-bs-toggle="popover"
                          data-bs-trigger="focus"
                          data-bs-placement="bottom"
                          data-bs-content="COVID-19 test required. Vaccinated travelers can visit"
                        >
                          <i className="bi bi-info-circle"></i>
                        </a>
                      </span>
                      <span className="fs-5">RM {eventDetails?.price}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="h6 fw-normal mb-0">Service Tax</span>
                      <span className="fs-5">RM 10.99</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-top bg-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 fw-normal mb-0">Total Price</span>
                    <span className="h5 fw-normal mb-0">
                      RM {(eventDetails?.price || 0) + 10.99}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card mt-4 shadow rounded-2">
                <div className="card-header border-bottom bg-light">
                  <h5 className="card-title mb-0">Booking Details</h5>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <h5 className="card-title">{eventDetails?.eventname}</h5>
                    <div className="col-sm-6 col-md-3">
                      <img
                        src={eventDetails?.image}
                        className="card-img custom-img-size"
                        alt={eventDetails?.eventname}
                      />
                    </div>
                    <div className="col-sm-6 col-md-9">
                      <div className="card-body pt-3 pt-sm-0 p-0">
                        <div className="d-flex align-items-center small mb-2">
                          <LocationOnIcon style={{ marginRight: "8px" }} />
                          <span>{eventDetails?.location}</span>
                        </div>
                        <div className="d-flex align-items-center small mb-2">
                          <CalendarTodayIcon style={{ marginRight: "8px" }} />
                          <span>{eventDetails?.date}</span>
                        </div>
                        <div className="d-flex align-items-center small mb-2">
                          <AccessTimeIcon style={{ marginRight: "8px" }} />
                          <span>{eventDetails?.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Cancellation Policy */}
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h3>Cancellation Policy</h3>
        <ul>
          <li>Cancellations can be made 24 hours in advance.</li>
          <li>
            <p>
              If you cancel your booking after 24 hours, no refund will be
              provided. Please ensure your availability before booking.
            </p>
          </li>
          <li>
            <p>
              If the event is cancelled by the organizer, a full refund will be
              issued.
            </p>
          </li>

          <p>For more information, contact us at 03-123 4567.</p>
        </ul>
      </Modal>
    </div>
  );
}

export default BookVendor;
