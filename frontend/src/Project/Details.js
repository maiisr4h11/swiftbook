import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShareIcon from "@mui/icons-material/Share";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "../Gstyles.css"


const EventSpaceDetails = () => {
  const { event_space_ID } = useParams();
  const navigate = useNavigate();
  const [eventSpace, setEventSpace] = useState(null);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    reservation_date: new Date(),
    reservation_time: "",
  });
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/eventspaces/${event_space_ID}`)
      .then((response) => {
        setEventSpace(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(
          error.response
            ? error.response.data
            : "Error fetching event space details."
        );
      });
  }, [event_space_ID]);

  const [showImages, setShowImages] = useState(false);
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setShowImages((prevShowImages) => !prevShowImages); // Toggle the visibility
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    const today = new Date();
    if (date < today) {
      alert("You cannot select a past date.");
      return;
    }
    setSelectedDate(date);
    setFormData({ ...formData, reservation_date: date });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    navigate("/reserve", {
      state: {
        eventSpace,
        reservationDate: formData.reservation_date,
        reservationTime: formData.reservation_time,
        customerName: formData.customer_name,
        customerEmail: formData.customer_email,
        customerPhone: formData.customer_phone,
      },
    });
  };

  const isDateReserved = (date) => {
    return (
      eventSpace &&
      eventSpace.reservedDates &&
      eventSpace.reservedDates.includes(date.toISOString().split("T")[0])
    );
  };

  const tileClassName = ({ date }) => {
    if (isDateReserved(date)) return "reserved";
    if (date.toDateString() === selectedDate.toDateString()) return "selected";
    return null;
  };

  if (error)
    return (
      <div className="text-center text-danger mt-5">
        {typeof error === "object" ? JSON.stringify(error) : error}
      </div>
    );
  if (!eventSpace) return <div className="text-center  mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow rounded-2 mb-4">
            <div className="card-header">
              <h2 className="card-title mb-0">{eventSpace.name_event_space}</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={eventSpace.image1}
                    className="img-fluid rounded mb-3"
                    alt={eventSpace.name_event_space}
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    <LocationOnIcon className="icon" /> {eventSpace.location}
                  </p>
                  <p>
                    <CalendarTodayIcon className="icon" /> {eventSpace.highlight}
                  </p>
                  <p>
                    <AttachMoneyIcon className="icon" /> RM{eventSpace.price}
                  </p>
                  <p>Capacity: {eventSpace.capacity} guests</p>
                  <p>Office Number: {eventSpace.office_number}</p>
                  <p>{eventSpace.description}</p>
                  <div>
                    <Link
                      to="#"
                      className="btn btn-outline-dark"
                      onClick={handleClick}
                    >
                      {showImages ? "View Less" : "View More Images"}
                    </Link>

                    {showImages && (
                      <div className="mt-3">
                        <img
                          src={eventSpace.image2}
                          alt="Image 2"
                          className="img-fluid mb-3"
                        />
                        <img
                          src={eventSpace.image3}
                          alt="Image 3"
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow rounded-2 mb-4 policy-share-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5>Reservation Policy</h5>
                  <p>
                    {eventSpace.reservation_policy ||
                      "Reservations require at least 24 hours' notice. Cancellations must be made within 48 hours for a full refund."}
                  </p>
                  <h5>Full Cancellation Policy</h5>
                  <p>
                    {eventSpace.full_policy_cancellation ||
                      "Cancellations within 24 hours will incur a 50% charge of the total booking cost. No refunds for cancellations made on the day of the event."}
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>
                    <ShareIcon className="icon" /> Share this Space
                  </h5>
                  <div className="d-flex flex-column">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark mb-2"
                    >
                      Share on Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      Share on Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div
            className="card shadow rounded-2 sticky-top"
            style={{ top: "1rem" }}
          >
            <div className="card-header">
              <h5 className="mb-0">Book Now</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleBooking}>
                <div className="form-group mb-3">
                  <label htmlFor="customer_name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer_name"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="customer_email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="customer_email"
                    name="customer_email"
                    value={formData.customer_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="customer_phone">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="customer_phone"
                    name="customer_phone"
                    value={formData.customer_phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="reservation_date">Date</label>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileClassName={tileClassName}
                    minDate={new Date()}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="reservation_time">Time</label>
                  <div className="d-flex flex-column">
                    <div className="form-check">
                      <input
                        type="radio"
                        id="time_6am_12pm"
                        name="reservation_time"
                        value="6am-12pm"
                        className="form-check-input"
                        checked={formData.reservation_time === "6am-12pm"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="time_6am_12pm" className="form-check-label">
                        Half Day: 6am - 12pm
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="time_12pm_6pm"
                        name="reservation_time"
                        value="12pm-6pm"
                        className="form-check-input"
                        checked={formData.reservation_time === "12pm-6pm"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="time_12pm_6pm" className="form-check-label">
                        Half Day: 12pm - 6pm
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="time_6pm_12am"
                        name="reservation_time"
                        value="6pm-12am"
                        className="form-check-input"
                        checked={formData.reservation_time === "6pm-12am"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="time_6pm_12am" className="form-check-label">
                        Night: 6pm - 12am
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="time_6am_12am"
                        name="reservation_time"
                        value="6am-12am"
                        className="form-check-input"
                        checked={formData.reservation_time === "6am-12am"}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="time_6am_12am" className="form-check-label">
                        Full Day: 6am - 12am
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpaceDetails;