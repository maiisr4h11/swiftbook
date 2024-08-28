import React from "react";


function Payment() {
  return (
    <div>
      <section className="pt-4 pt-lg-5">
        <div className="container">
          <div className="row g-4 g-xl-5">
            {/* Left Content START */}
            <div className="col-xl-8">
              <div className="card bg-transparent p-0">
                {/* Card header START */}
                <div className="card-header bg-transparent p-0">
                  <h1 className="card-title fs-2 mb-0 p-3">
                    Enter Your Payment Details
                  </h1>
                </div>
                {/* Card header END */}

                {/* Card body START */}
                <div className="card-body p-0 mt-3">


                  <form className="bg-light rounded-3 p-4">
                    {/* Card options */}
                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                      <h6 className="mb-2 mb-sm-0">We Accept:</h6>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                           <img src="" className="h-30px" alt="Visa" /> 
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src=""
                              className="h-30px"
                              alt="MasterCard"
                            />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src=""
                              className="h-30px"
                              alt="American Express"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Form START */}
                    <div className="row g-3">
                      {/* Card number */}
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
                          />
                          <img
                            src=""
                            className="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                            alt="Visa"
                          />
                        </div>
                      </div>
                      {/* Expiration Date */}
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
                          />
                          <input
                            type="text"
                            className="form-control"
                            maxLength="4"
                            placeholder="Year"
                          />
                        </div>
                      </div>
                      {/* CVV code */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <span className="h6 fw-normal">CVV / CVC *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          maxLength="3"
                          placeholder="XXX"
                        />
                      </div>
                      {/* Card name */}
                      <div className="col-12">
                        <label className="form-label">
                          <span className="h6 fw-normal">Name on Card *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="name of card holder"
                          placeholder="Enter card holder name"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="col-12">
                        <button className="btn btn-primary w-100 mb-0">
                          Pay Now
                        </button>
                      </div>
                    </div>
                    {/* Form END */}
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Left Content END */}

            {/* Right content START */}
            <aside className="col-xl-4">
              <div className="row g-4">
                {/* Booking summary START */}
                <div className="col-md-6 col-xl-12">
                  <div className="card bg-light rounded-2">
                    {/* card header */}
                    <div className="card-header border-bottom bg-light">
                      <h5 className="card-title mb-0">Booking Summary</h5>
                    </div>

                    {/* Card body */}
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
                          <span className="fs-5">RM 56.00</span>
                        </li>
                        
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="h6 fw-normal mb-0">
                            Service Tax
                          </span>
                          <span className="fs-5">RM 10.99</span>
                        </li>
                      </ul>
                    </div>

                    {/* Card footer */}
                    <div className="card-footer border-top bg-light">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 fw-normal mb-0">Total Price</span>
                        <span className="h5 fw-normal mb-0">RM66.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Booking summary END */}

                
              </div>
            </aside>
            {/* Right content END */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
