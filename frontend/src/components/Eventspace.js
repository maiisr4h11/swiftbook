import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Eventspace.css";
import Slider from "react-slick";
import { LocationOn, AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button, Card, CardMedia, CardContent, Typography, TextField } from "@mui/material";

const CenterMode = ({ topEventSpaces }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 1000,
    arrows: true,
    dots: true,
  };

  return (
    <div className="slider-container">
      <div className="text-content">
        <Typography variant="h3" className="slider-title">
          Top 5 Event Spaces
        </Typography>
        <Typography variant="body1 center" className="slider-description">
          Find the perfect spot for your next major event in Pahang, Malaysia!
          Whether you’re looking for stylish urban settings or beautiful outdoor
          locations, check out our top 5 recommendations for any celebration.
        </Typography>
      </div>
      <Slider {...settings}>
        {topEventSpaces.map((eventSpace, index) => (
          <div className="slide-item" key={eventSpace.event_space_ID}>
            <Link to={`/eventspace/${eventSpace.event_space_ID}`} className="slide-link">
              <div className="slide-content">
                <img src={eventSpace.image_logo} alt={`Logo for ${eventSpace.name_event_space}`} className="slide-img" />
                <div className="rank">{index + 1}</div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const EventSpaces = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [topEventSpaces, setTopEventSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/eventspaces")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setTopEventSpaces(data.slice(0, 5));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCardData = cardData.filter(
    (card) =>
      card.name_event_space.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.price <= parseFloat(searchQuery)
  );

  const cardsToShow = showMore ? filteredCardData : filteredCardData.slice(0, 3);

  return (
    <div className="container">
      {/* Carousel for promotion */}
      <div id="promotionCarousel" className="carousel slide mb-5">
        <div className="carousel-inner">
          {[1, 2, 3].map((num) => (
            <div className={`carousel-item${num === 1 ? " active" : ""}`} key={num}>
              <img src={`https://via.placeholder.com/1200x400?text=Promotion+${num}`} className="d-block w-100" alt={`Promotion ${num}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#promotionCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#promotionCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Top 5 Carousel */}
      <div className="mb-5 mt-5">
        <CenterMode topEventSpaces={topEventSpaces} />
      </div>

      {/* Main content */}
      <div className="text-content text-center mb-5 mt-5">
        <Typography variant="h2" className="main-title">
          Find the Ideal Venue for Your Next Event
        </Typography>
        <Typography variant="body1 center" className="main-description">
          Discover our handpicked collection of premier venues ideal for every occasion. From corporate events and weddings to social gatherings, find the perfect space that aligns with your needs and style.
        </Typography>
      </div>

      {/* Sticky search bar */}
      <div className="search-bar mb-5">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name, location, or price..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="row">
        {cardsToShow.length > 0 ? (
          cardsToShow.map((card) => (
            <div className="col-md-4 mb-3" key={card.event_space_ID}>
              <Card className="event-card">
                <CardMedia component="img" image={card.image1} alt={card.name_event_space} />
                <CardContent>
                  <Typography variant="h6" className="card-title">
                    {card.name_event_space}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <LocationOn /> {card.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <AttachMoney /> Starting price RM{card.price} per day
                  </Typography>
                  <div className="reserve-button-container">
                    <Link to={`/eventspace/${card.event_space_ID}`} style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="primary" fullWidth>
                        Reserve Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-12">
            <Typography variant="body1">
              No event spaces found matching your search criteria.
            </Typography>
          </div>
        )}
      </div>

      {/* Button to toggle "See More" / "See Less" */}
      <div className="text-center mt-3 mb-5">
        {!showMore && filteredCardData.length > 3 && (
          <Typography variant="body1">
            We've got plenty more venues to explore! Click below to see additional event spaces that might be just what you're looking for.
          </Typography>
        )}
        <Button variant="outlined" color="primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? "See Less" : "Want to See More Options?"}
        </Button>
      </div>

      {/* Section for adding new event spaces */}
      <div className="contact-section text-center mb-5">
        <Typography variant="h5">Want to Add Your Event Space?</Typography>
        <Typography variant="body1">
          If you're interested in adding your event space to our platform or want to discuss marketing opportunities, please email us at:
        </Typography>
        <Typography variant="body1" className="email-link">
          <Link to="mailto:swifbookiomarketing@gmail.com" style={{ color: "#007bff" }}>
            swifbookiomarketing@gmail.com
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default EventSpaces;
