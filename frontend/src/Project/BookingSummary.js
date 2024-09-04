import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function BookingSummary() {
  const location = useLocation(); // Get the location object from React Router
  const navigate = useNavigate(); // Hook for navigation
  const bookingDetails = location.state; // Retrieve passed booking details
  console.log(bookingDetails); // Debugging: Check if bookingDetails is defined

  // Function to handle booking cancellation
  const handleCancelBooking = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/book-vendor/booking/vendor/${bookingDetails._id}`
      );
      if (response.status === 200) {
        alert("Booking cancelled!"); // Notify user of successful cancellation
        navigate("/"); // Redirect to homepage or desired page after cancellation
      }
    } catch (error) {
      console.error(
        "Error cancelling booking:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to cancel the booking. Please try again."); // Notify user of failure
    }
  };

  // Function to navigate back to home
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-12 ml-5 mr-5">
              <div className="card shadow rounded-2">
                <div className="card-header border-bottom d-flex align-items-center">
                  <h4 className="card-title mb-0">Booking Successful</h4> {/* Header for the booking summary */}
                </div>
                <div className="card-body p-3">
                  {/* Display booking details */}
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">Event Name</label>
                    <p className="form-control">{bookingDetails?.eventname}</p>
                  </div>
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">First Name</label>
                    <p className="form-control">{bookingDetails?.firstname}</p>
                  </div>
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">Last Name</label>
                    <p className="form-control">{bookingDetails?.lastname}</p>
                  </div>
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">Phone Number</label>
                    <p className="form-control">{bookingDetails?.phonenum}</p>
                  </div>
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">Email</label>
                    <p className="form-control">{bookingDetails?.email}</p>
                  </div>
                  <div className="mb-4 form-control-bg-light">
                    <label className="form-label">Message</label>
                    <p className="form-control">{bookingDetails?.message}</p>
                  </div>
                  {/* Button to go back to the home page */}
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleBack}
                    >
                      Back to Home
                    </button>
                  </div>
                  {/* Uncomment if you want to add cancellation or update functionality */}
                  {/* <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleCancelBooking}
                    >
                      Cancel Booking
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={handleUpdateBooking}
                    >
                      Update Booking
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingSummary;
