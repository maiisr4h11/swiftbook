import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/BookVendor.css";
import "../CSS/Modal.css"; // Import Modal CSS
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Modal from "./Modal"; // Import the Modal component
import { useNavigate } from "react-router-dom";

function BookingDetails() {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/foodfest/${id}`)
      .then((response) => setEventDetails(response.data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  if (!eventDetails) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border " role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
  const handleBookNow = () => {
    navigate("/book-vendor", { state: eventDetails }); 
  };
  return (
    <div>
      <section className="py-0">
        <div className="container mt-5 mb-4">
          <div className="card bg-light overflow-hidden px-sm-5">
            <div className="row align-items-center g-4">
              <div className="col-sm-9">
                <div className="card-body">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">
                          <i className="bi bi-house me-1"></i> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">Food Fest</li>
                      <li className="breadcrumb-item active">Booking</li>
                    </ol>
                  </nav>
                  <h1 className="m-0 h2 card-title mt-2" id="title">
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
              <div className="card shadow rounded-2">
                <div className="card-header border-bottom d-flex align-items-center">
                  <CalendarTodayIcon
                    fontSize="medium"
                    style={{ color: "black", marginRight: "10px" }}
                  />
                  <h4 className="card-title mb-0">Event Details</h4>
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
                      <div className="card-body pt-3 pt-sm-0 p-0">
                        <h5 className="card-title">{eventDetails.eventname}</h5>
                        <p className="small mb-2">
                          <LocationOnIcon style={{ marginRight: "4px" }} />
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
                            <AlarmIcon style={{ marginRight: "4px" }} />
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
                              style={{ marginRight: "4px" }}
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
                            <AttachMoneyIcon style={{ marginRight: "4px" }} />
                            10% off for early birds
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border mt-4 mb-4">
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h4 className="card-title mb-0">About this event</h4>
                </div>
                <div className="container list-group list-group-borderless">
                  <div className="col-md-12 p-3 ">
                    {/* <h4>Event Details</h4> */}

                    <p className="text-align-justify">
                      {eventDetails.eventdetails}
                    </p>
                    {/* <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item h6 fw-light d-flex mb-0">
                      <i className="bi bi-patch-check-fill text-success me-2 fs-5"></i>
                      {eventDetails.eventdetails}
                    </li>
                  </ul> */}
                  </div>
                </div>
              </div>
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

            <div className="col-lg-4">
              <div className="card shadow rounded-2 booking-details ">
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

export default BookingDetails;
