import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocationOn, CalendarToday, Person, Search } from "@mui/icons-material";
import Slider from "react-slick";
import "../Gstyles.css"

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
  const [searchResults, setSearchResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const locations = ["Kuantan", "Kuala Lipis", "Temerloh", "Jerantut"];

  useEffect(() => {
    AOS.init({ duration: 2000 });

    axios
      .get("http://localhost:5000/api/foodfest")
      .then((response) => {
        setFoodfests(response.data);
        setSearchResults(response.data); // Initialize searchResults with all foodfests
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterFoodFests = () => {
    const filtered = foodfests.filter((foodfest) => {
      const nameMatch = foodfest.eventname.toLowerCase().includes(eventName.toLowerCase());
      const locationMatch = foodfest.location.toLowerCase().includes(location.toLowerCase());
      return nameMatch && locationMatch;
    });
    setSearchResults(filtered);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
    filterFoodFests(); // Call filter function when event name changes
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    filterFoodFests(); // Call filter function when location changes
  };

  const handleDateChange = (e) => setStartDate(e.target.value);

  const handleViewDetails = (id) => {
    navigate(`/bookingdetails/${id}`);
  };

  const handleSeeMore = () => {
    setVisibleCount(foodfests.length);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleCount(8);
    setShowAll(false);
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
          className="banner overlay-image"
          data-aos="fade-up"
        />
        <div className="container mt-5 mb-5">
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold display-5">Featured Events</h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img
                  className="slider-img foodfest"
                  src="images/poster-4.png"
                  alt="Poster 1"
                />
              </div>
              <div>
                <img
                  className="slider-img foodfest"
                  src="images/poster-5.png"
                  alt="Poster 2"
                />
              </div>
              <div>
                <img
                  className="slider-img foodfest"
                  src="images/poster-14.png"
                  alt="Poster 3"
                />
              </div>
              <div>
                <img
                  className="slider-img foodfest"
                  src="images/1.png"
                  alt="Poster 4"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Search Bar Section */}
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

              <button
                className="btn"
                style={{
                  backgroundColor: "#8e44ad",
                  borderRadius: "50%",
                  padding: "10px",
                  color: "#fff",
                }}
                onClick={filterFoodFests}
              >
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="event-list" data-aos="fade-up">
        <div className="container mt-5 mb-5">
          <div className="row">
            {searchResults.slice(0, visibleCount).map((foodfest) => (
              <div className="col-md-3" key={foodfest._id}>
                <div className="card text-center mb-4 foodfest text-dark">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src={foodfest.image}
                      alt={foodfest.eventname}
                    />
                    <h5 className="card-title text-center mt-2 fs-4">
                      {foodfest.eventname}
                    </h5>
                    {/* <p className="card-text">{foodfest.location}</p> */}
                    <p className="card-text">{foodfest.date}</p>
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
          <div className="text-center mt-4">
            {showAll ? (
              <button className="btn btn-secondary" onClick={handleShowLess}>
                Show Less
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleSeeMore}>
                See More
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoodFest;
