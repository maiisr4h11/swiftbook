import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';
import Footer from './Footer';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Modal from "./Modal"; // Import the Modal component

function BookingDetails() {
  const { id } = useParams(); // Get the event ID from the URL parameters
  const [eventDetails, setEventDetails] = useState(null); // State to hold event details
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch event details from the backend API
    axios
      .get(`http://localhost:5000/api/foodfest/${id}`)
      .then((response) => setEventDetails(response.data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  // Loading spinner while fetching data
  if (!eventDetails) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  // Handle booking button click
  const handleBookNow = () => {
    navigate("/bookvendor", { state: eventDetails });
  };

  return (
    <div className="text-dark">
      <section className="py-0">
        
        {/* Page Header */}
        <div className="container mt-5 mb-4">
          <div className="card bg-light overflow-hidden px-sm-5">
            <div className="row align-items-center g-4">
              <div className="col-sm-9">
                <div className="card-body">
                  <h1 className="my-0 h2 card-title mt-2" id="title">
                    Vendor Booking Details
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">

              {/* Event Details Section */}
              <div className="card shadow rounded-2">
                <div className="card-header border-bottom d-flex align-items-center">
                  <CalendarTodayIcon
                    fontSize="medium"
                    style={{ color: "black", marginRight: "10px" }}
                  />
                  <h4 className="card-title mb-0 text-dark">Event Details</h4>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-md-3">
                      <img
                        src={eventDetails.image}
                        className="card-img w-100"
                        alt={eventDetails.eventname}
                      />
                    </div>
                    <div className="col-sm-6 col-md-9">
                      <div className="card-body pt-3 pt-sm-0 p-0 text-dark">
                        <h5 className="card-title text-dark">{eventDetails.eventname}</h5>
                        <p className="small mb-2">
                          <LocationOnIcon style={{ marginRight: "4px", color: "black" }} />
                          {eventDetails.location}
                        </p>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">Event Date</h6>
                          <h5 className="mb-1">{eventDetails.date}</h5>
                          <small>
                            <AlarmIcon style={{ marginRight: "4px" , color: "black"}} />
                            {eventDetails.time}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">
                            Vendor Available
                          </h6>
                          <h5 className="mb-1">
                            {eventDetails.totalvendors} vendors
                          </h5>
                          <small>
                            <CheckCircleOutlineIcon
                              style={{ marginRight: "4px", color: "black" }}
                            />
                            Limited slot
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">Booking Price</h6>
                          <h5 className="mb-1">RM {eventDetails.price}</h5>
                          <small>
                            <AttachMoneyIcon style={{ marginRight: "4px" , color: "black"}} />
                            10% off for early birds
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About the Event Section */}
              <div className="card border mt-4 mb-4">
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h4 className="card-title mb-0">About this event</h4>
                </div>
                <div className="container list-group list-group-borderless">
                  <div className="col-md-12 p-3">
                    <p className="text-align-justify">
                      {eventDetails.eventdetails}
                    </p>
                  </div>
                </div>
              </div>

              {/* Organized by Section */}
              <div className="card border mt-4 mb-4">
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h4 className="card-title mb-0">Organized by</h4>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                      <img
                        src={eventDetails.logo}
                        alt={eventDetails.organizer}
                        className="rounded"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <div className="col-md-9">
                      <h5>{eventDetails.organizer}</h5>
                      <p>{eventDetails.organizerdetails}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary Section */}
            <div className="col-lg-4">
              <div className="card shadow rounded-2 booking-details">
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h5 className="card-title mb-0">Price Summary</h5>
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
                      <span className="h6 fw-light mb-0">Booking Price</span>
                      <span className="fs-5">RM {eventDetails.price}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="h6 fw-light mb-0">Tax</span>
                      <span className="fs-5">RM 10.99</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-top">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">Total Price</span>
                    <span className="h5 mb-0">
                      RM {eventDetails.price + 10.99}
                    </span>
                  </div>
                  <div className="btn btn-success text-center mt-3" onClick={handleBookNow}>
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Cancellation Policy */}
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <h3>Cancellation Policy</h3>
          <ul>
            <li>Cancellations can be made 24 hours in advance.</li>
            <li>
              If you cancel your booking after 24 hours, no refund will be
              provided. Please ensure your availability before booking.
            </li>
            <li>
              If the event is cancelled by the organizer, a full refund will be
              issued.
            </li>
            <p>For more information, contact us at 03-123 4567.</p>
          </ul>
        </Modal>
      </section>
    </div>
  );
}

export default BookingDetails;
