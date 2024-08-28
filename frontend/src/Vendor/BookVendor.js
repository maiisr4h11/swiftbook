import React from "react";
import "./BookVendor.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
function BookVendor() {
  return (
    <div>
      <section id="vendor">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow rounded-2">
                {/* card header  */}
                <div className="card-header border-bottom d-flex align-items-center">
                  <h4 className="card-title mb-0">Enter Your Details</h4>
                </div>

                {/* card body */}
                <div className="card-body">
                  <form className="mt-4">
                    <div className="mb-4 form-control-bg-light ">
                      <label className="form-label">
                        Your name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Phone Number<span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">
                        Email address <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="4"></textarea>
                    </div>
                  </form>
                  {/* Proceed to Payment Button */}
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow rounded-2">
                {/* card header  */}
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
                      <span className="h6 fw-normal mb-0">Service Tax</span>
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

              {/* New div under Booking Summary */}
              <div className="card mt-4 shadow rounded-2">
                {/* card header  */}
                <div className="card-header border-bottom bg-light">
                  <h5 className="card-title mb-0">Booking Details</h5>
                </div>
                {/* card body */}
                <div className="card-body">
                  <div className="row align-items-center">
					{/* Title */}
					<h5 className="card-title">Street Food Festival</h5>
                    {/* Image */}
                    <div className="col-sm-6 col-md-3">
                      <img
                        src="images/poster-1.png"
                        className="card-img custom-img-size"
                        alt="Food Fest 1"
                      />
                    </div>

                    <div className="col-sm-6 col-md-9">
						
                      <div className="card-body pt-3 pt-sm-0 p-0">
						
                        <div className="d-flex align-items-center small mb-2">
                          <LocationOnIcon style={{ marginRight: "8px" }} />
                          <span>Lorong Belakang Maybank, Kuantan, Pahang</span>
                        </div>

                        <div className="d-flex align-items-center small mb-2">
                          <CalendarTodayIcon style={{ marginRight: "8px" }} />
                          <span>20 & 21 September 2024</span>
                        </div>

                        <div className="d-flex align-items-center small mb-2">
                          <AccessTimeIcon style={{ marginRight: "8px" }} />
                          <span>19.00 - 21.00</span>
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
    </div>
  );
}

export default BookVendor;
