import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../CSS/FoodFest.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocationOn, CalendarToday, Person, Search } from "@mui/icons-material";
import Slider from "react-slick";
import poster1 from "../Assets/1.png";
import poster2 from "../Assets/poster-4.png";
import poster3 from "../Assets/poster-5.png";
import poster4 from "../Assets/poster-14.png";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

function FoodFest() {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [foodfests, setFoodfests] = useState([]);
  const navigate = useNavigate();

  const locations = ["San Jacinto, USA", "Los Angeles, USA", "New York, USA"]; // Example locations

  useEffect(() => {
    AOS.init({
      duration: 2000, // Customize the duration if needed
    });

    axios
      .get("http://localhost:5000/api/foodfest")
      .then((response) => setFoodfests(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEventNameChange = (e) => setEventName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDateChange = (e) => setStartDate(e.target.value);

  const handleViewDetails = (id) => {
    navigate(`/booking-details/${id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  if (!foodfests) {
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

  return (
    <div>
      <section className="header">
        <img
          className="banner"
          src="images/upcoming-events (3).png"
          alt="food-fest-banner"
        />
        <img
          src="images/upcoming-events (2).png"
          alt="Overlay"
          className="overlay-image"
          data-aos="fade-up"
        />

        <div className="container mt-5 mb-5">
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold display-5">Features Events</h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img className="slider-img" src={poster1} alt="Poster 1"></img>
              </div>
              <div>
                <img className="slider-img" src={poster2} alt="Poster 2"></img>
              </div>
              <div>
                <img className="slider-img" src={poster3} alt="Poster 3"></img>
              </div>
              <div>
                <img className="slider-img" src={poster4} alt="Poster 4"></img>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="search" data-aos="fade-up">
        <div className="container mt-5 mb-5">
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold display-5">Discover more events</h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="container-fluid d-flex justify-content-center">
            <div
              className="search-box p-3 d-flex align-items-center"
              style={{
                backgroundColor: "#2c2c2c",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "1000px",
              }}
            >
              <div className="input-group me-3">
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#2c2c2c", border: "none" }}
                >
                  <Person style={{ color: "#808080" }} />
                </span>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="What are you looking for?"
                  value={eventName}
                  onChange={handleEventNameChange}
                  style={{
                    backgroundColor: "#2c2c2c",
                    color: "#fff",
                    border: "none",
                  }}
                />
              </div>
              <div className="input-group me-3">
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#2c2c2c", border: "none" }}
                >
                  <LocationOn style={{ color: "#808080" }} />
                </span>
                <select
                  className="form-select"
                  value={location}
                  onChange={handleLocationChange}
                  style={{
                    backgroundColor: "#2c2c2c",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <option value="" disabled>
                    Select location
                  </option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group me-3">
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#2c2c2c", border: "none" }}
                >
                  <CalendarToday style={{ color: "#808080" }} />
                </span>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={handleDateChange}
                  style={{
                    backgroundColor: "#2c2c2c",
                    color: "#fff",
                    border: "none",
                  }}
                />
              </div>
              <button
                className="btn"
                style={{
                  backgroundColor: "#8e44ad",
                  borderRadius: "50%",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="event-list" data-aos="fade-up">
        <div className="container mt-5 mb-5 list" data-aos="fade-up">
          <div className="row" data-aos="fade-up">
            {foodfests.map((foodfest) => (
              <div className="col-md-4" key={foodfest._id}>
                <div className="card text-center mb-4 foodfest">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src={foodfest.image}
                      alt={foodfest.eventname}
                    ></img>
                    <h5 className="card-title text-center mt-2 fs-4">
                      {foodfest.eventname}
                    </h5>
                    <p className="card-text">{foodfest.date}</p>{" "}
                    {/* Add more p tags as needed */}
                    <button
                      className="btn btn-primary text-center"
                      onClick={() => handleViewDetails(foodfest._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoodFest;
