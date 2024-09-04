import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mastercard from "./Assets/mastercard-old-3-svgrepo-com.svg";
import visa from "./Assets/visa-4-logo-svgrepo-com.svg";
import axios from "axios";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  // State management for each input field
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handlePayNowClick = () => {
    // Validation check for empty fields
    if (
      !cardNumber ||
      !expirationMonth ||
      !expirationYear ||
      !cvv ||
      !cardName
    ) {
      alert("Please fill in all the payment details.");
      return;
    }

    if (window.confirm("Are you sure you want to proceed with the payment?")) {
      // You can use bookingData.bookingId for further API calls or processing
      
      navigate("/bookingsummary", { state: bookingData });
    }
  };

  return (
    <div>
      <section className="pt-4 pt-lg-5">
        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-xl-8">
              <div className="card bg-transparent p-0">
                <div className="card-header bg-transparent p-0">
                  <h5 className="card-title mb-0 p-3">
                    Enter Your Payment Details
                  </h5>
                </div>

                <div className="card-body p-0 mt-3">
                  <form className="bg-light rounded-3 p-4">
                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                      <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <img
                            src={visa}
                            style={{ width: "40px", height: "auto" }}
                            alt="Visa"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src={mastercard}
                            style={{ width: "40px", height: "auto" }}
                            alt="MasterCard"
                          />
                        </li>
                      </ul>
                    </div>

                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label">
                          <span className="h6 fw-normal">Card Number *</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            maxLength="14"
                            placeholder="XXXX XXXX XXXX XXXX"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                          <img
                            src={visa}
                            style={{ width: "30px", height: "auto" }}
                            className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                            alt="Visa"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          <span className="h6 fw-normal">
                            Expiration date *
                          </span>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            maxLength="2"
                            placeholder="Month"
                            value={expirationMonth}
                            onChange={(e) => setExpirationMonth(e.target.value)}
                          />
                          <input
                            type="text"
                            className="form-control"
                            maxLength="4"
                            placeholder="Year"
                            value={expirationYear}
                            onChange={(e) => setExpirationYear(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          <span className="h6 fw-normal">CVV / CVC *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="3"
                          placeholder="XXX"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          <span className="h6 fw-normal">Name on Card *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="name of card holder"
                          placeholder="Enter card holder name"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          type="button"
                          className="btn btn-primary w-100 mb-0"
                          onClick={handlePayNowClick}
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <aside className="col-xl-4">
              <div className="row g-4">
                {/* Booking summary START */}
                <div className="col-md-6 col-xl-12">
                  <div className="card bg-light rounded-2">
                    <div className="card-header border-bottom bg-light">
                      <h5 className="card-title mb-0">Booking Summary</h5>
                    </div>

                    <div className="card-body">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="h6 fw-normal mb-0">
                            Booking Price
                          </span>
                          <span className="fs-5">RM {bookingData?.price}</span>
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
                          RM {(bookingData?.price || 0) + 10.99}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Booking summary END */}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
