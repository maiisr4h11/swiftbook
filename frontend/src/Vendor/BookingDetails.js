import React from "react";
import { Link } from "react-router-dom";
import "./BookVendor.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlarmIcon from "@mui/icons-material/Alarm";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function BookingDetails() {
  return (
    <div>
      <section className="py-0">
        <div className="container mt-5 mb-4">
          {/* Card START */}
          <div className="card bg-light overflow-hidden px-sm-5">
            <div className="row align-items-center g-4">
              {/* Content */}
              <div className="col-sm-9">
                <div className="card-body">
                  {/* Breadcrumb */}
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
                  {/* Title */}
                  <h1 className="m-0 h2 card-title mt-2" id="title">
                    Vendor Booking Details
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Card END */}
        </div>
        {/* left side content */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow rounded-2">
                {/* card header  */}
                <div className="card-header border-bottom d-flex align-items-center">
                  <CalendarTodayIcon
                    fontSize="medium"
                    style={{ color: "black", marginRight: "10px" }}
                  />
                  <h4 className="card-title mb-0">Event Details</h4>
                </div>
                {/* card body */}
                <div className="card-body">
                  <div className="row align-items-center">
                    {/* Image */}
                    <div className="col-sm-6 col-md-3">
                      <img
                        src="images/poster-1.png"
                        className="card-img w-100"
                        alt="Food Fest 1"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="col-sm-6 col-md-9">
                      <div className="card-body pt-3 pt-sm-0 p-0">
                        {/* Title */}
                        <h5 className="card-title">Street Food Festival</h5>
                        <p className="small mb-2">
                          <LocationOnIcon style={{ marginRight: "4px" }} />
                          Lorong Belakang Maybank, Kuantan, Pahang
                        </p>
                      </div>
                    </div>
                    <div className="row g-4">
                      {/* Item 1 */}
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">Event Date</h6>
                          <h5 className="mb-1">20 & 21 Sept 2024</h5>
                          <small>
                            <AlarmIcon style={{ marginRight: "4px" }} />
                            4:30 pm
                          </small>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">
                            Vendor Available
                          </h6>
                          <h5 className="mb-1">14 vendors</h5>
                          <small>
                            <CheckCircleOutlineIcon
                              style={{ marginRight: "4px" }}
                            />
                            Limited slot
                          </small>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="col-lg-4">
                        <div className="bg-light py-3 px-4 rounded-3">
                          <h6 className="fw-light small mb-1">Booking Price</h6>
                          <h5 className="mb-1">RM 56.00</h5>
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
                {/* Card header */}
                <div className="card-header border-bottom d-md-flex justify-content-md-between">
                  <h5 className="card-title mb-0">
                    What you wil get
                  </h5>
                  <a href="#" className="btn btn-link p-0 mb-0">
                    View Cancellation Policy
                  </a>
                </div>

                {/* Card body */}
                <div className="card-body">
                  <h6>Price Included</h6>
                  {/* List */}
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item h6 fw-light d-flex mb-0">
                      <i className="bi bi-patch-check-fill text-success me-2"></i>
                      
                    </li>
                    <li className="list-group-item h6 fw-light d-flex mb-0">
                      <i className="bi bi-patch-check-fill text-success me-2"></i>
                      Booth size : 3m x 6m
                    </li>
                    <li className="list-group-item h6 fw-light d-flex mb-0">
                      <i className="bi bi-patch-check-fill text-success me-2"></i>
                      Free 3pcs Exhibitor Pass (With Lanyard) 
                    </li>
                    <li className="list-group-item h6 fw-light d-flex mb-0">
                      <i className="bi bi-patch-check-fill text-success me-2"></i>
                      On Cancellation, You will not get any refund.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* right side content  */}
            <div className="col-lg-4">
              <div className="col-md-6 col-xl-12"></div>
              <div className="card shadow rounded-2 booking-details">
                {/* Card Header */}
                <div className="card-header border-bottom">
                  <h5 className="card-title mb-0">Price Summary</h5>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="h6 fw-light mb-0">Booking Price</span>
                      <span className="fs-5">RM56.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="h6 fw-light mb-0">Tax</span>
                      <span className="fs-5">RM2.44</span>
                    </li>
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="card-footer border-top">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">Total Price</span>
                    <span className="h5 mb-0">RM57.44</span>
                  </div>
                  <div className="btn btn-success text-center mt-3">
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingDetails;
