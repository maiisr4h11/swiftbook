import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Details.css";
import Calendar from 'react-calendar';

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
    axios.get(`http://localhost:5000/api/eventspaces/${event_space_ID}`)
      .then(response => {
        setEventSpace(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error.response ? error.response.data : "Error fetching event space details.");
      });
  }, [event_space_ID]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setFormData({ ...formData, reservation_date: date });
  };

  const handleBooking = e => {
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

  const isDateReserved = date => {
    return eventSpace && eventSpace.reservedDates && eventSpace.reservedDates.includes(date.toISOString().split("T")[0]);
  };

  const tileClassName = ({ date }) => {
    if (isDateReserved(date)) return 'reserved';
    if (date.toDateString() === selectedDate.toDateString()) return 'selected';
    return null;
  };

  if (error) return <div>{typeof error === 'object' ? JSON.stringify(error) : error}</div>;
  if (!eventSpace) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow rounded-2 mb-4">
            <div className="card-header border-bottom">
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
                  <p><LocationOnIcon /> {eventSpace.location}</p>
                  <p><CalendarTodayIcon /> {eventSpace.highlight}</p>
                  <p><AttachMoneyIcon /> ${eventSpace.price}</p>
                  <p>Capacity: {eventSpace.capacity} guests</p>
                  <p>Office Number: {eventSpace.office_number}</p>
                  <p>{eventSpace.description}</p>
                  <a href="#" className="btn btn-outline-primary" onClick={() => alert('More details feature coming soon!')}>View More Details</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow rounded-2 mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5>Reservation Policy</h5>
                  <p>{eventSpace.reservation_policy || "Reservations require at least 24 hours' notice. Cancellations must be made within 48 hours for a full refund."}</p>
                  <h5>Full Cancellation Policy</h5>
                  <p>{eventSpace.full_policy_cancellation || "Cancellations within 24 hours will incur a 50% charge of the total booking cost. No refunds for cancellations made on the day of the event."}</p>
                </div>
                <div className="col-md-6">
                  <h5><ShareIcon /> Share this Space</h5>
                  <div className="d-flex flex-column">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mb-2"
                    >
                      Share on Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      Share on Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 sticky-top">
          <div className="card shadow rounded-2">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Book This Space</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleBooking}>
                <div className="mb-3">
                  <label htmlFor="customer_name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer_name"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="customer_email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="customer_email"
                    name="customer_email"
                    value={formData.customer_email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="customer_phone" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="customer_phone"
                    name="customer_phone"
                    value={formData.customer_phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="reservation_date" className="form-label">Reservation Date</label>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()}
                    tileClassName={tileClassName}
                    tileDisabled={({ date }) => isDateReserved(date)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="reservation_time" className="form-label">Reservation Time</label>
                  <select
                    id="reservation_time"
                    name="reservation_time"
                    className="form-select"
                    value={formData.reservation_time}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Time</option>
                    <option value="6am-12pm">Half Day: 6am - 12pm</option>
                    <option value="12pm-6pm">Half Day: 12pm - 6pm</option>
                    <option value="6pm-12am">Night: 6pm - 12am</option>
                    <option value="6am-12am">Full Day: 6am - 12am</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Proceed to Reservation</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpaceDetails;
