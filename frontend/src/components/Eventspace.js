import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Eventspace.css";
import Slider from 'react-slick';


// Card component
const CardComponent = ({ title, text, imgSrc, link, buttonText }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">
          {buttonText || "Reserve Now"}
        </Link>
      </div>
    </div>
  );
};

// CenterMode carousel
const CenterMode = () => {
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
        <h1>Top 10 Event Spaces</h1>
        <p>Discover the best venues for your next big event! From chic city venues to picturesque outdoor spaces, explore our top 10 picks for every occasion.</p>
      </div>
      <Slider {...settings}>
        {[...Array(10).keys()].map(num => (
          <div className="slide-item" key={num}>
            <div className="slide-content">{num + 1}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const EventSpaces = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);

  const cardData = [
    { id: 1, title: "Event Space 1", text: "Description for space 1", imgSrc: "https://via.placeholder.com/150", link: "/event-space/1" },
    { id: 2, title: "Event Space 2", text: "Description for space 2", imgSrc: "https://via.placeholder.com/150", link: "/event-space/2" },
    { id: 3, title: "Event Space 3", text: "Description for space 3", imgSrc: "https://via.placeholder.com/150", link: "/event-space/3" },
    { id: 4, title: "Event Space 4", text: "Description for space 4", imgSrc: "https://via.placeholder.com/150", link: "/event-space/4" },
    { id: 5, title: "Event Space 5", text: "Description for space 5", imgSrc: "https://via.placeholder.com/150", link: "/event-space/5" },
    { id: 6, title: "Event Space 6", text: "Description for space 6", imgSrc: "https://via.placeholder.com/150", link: "/event-space/6" },
    { id: 7, title: "Event Space 7", text: "Description for space 7", imgSrc: "https://via.placeholder.com/150", link: "/event-space/7" },
    { id: 8, title: "Event Space 8", text: "Description for space 8", imgSrc: "https://via.placeholder.com/150", link: "/event-space/8" },
    { id: 9, title: "Event Space 9", text: "Description for space 9", imgSrc: "https://via.placeholder.com/150", link: "/event-space/9" },
    { id: 10, title: "Event Space 10", text: "Description for space 10", imgSrc: "https://via.placeholder.com/150", link: "/event-space/10" },
    { id: 11, title: "Event Space 11", text: "Description for space 11", imgSrc: "https://via.placeholder.com/150", link: "/event-space/11" },
    { id: 12, title: "Event Space 12", text: "Description for space 12", imgSrc: "https://via.placeholder.com/150", link: "/event-space/12" },
    { id: 13, title: "Event Space 13", text: "Description for space 13", imgSrc: "https://via.placeholder.com/150", link: "/event-space/13" },
    { id: 14, title: "Event Space 14", text: "Description for space 14", imgSrc: "https://via.placeholder.com/150", link: "/event-space/14" },
    { id: 15, title: "Event Space 15", text: "Description for space 15", imgSrc: "https://via.placeholder.com/150", link: "/event-space/15" },
    { id: 16, title: "Event Space 16", text: "Description for space 16", imgSrc: "https://via.placeholder.com/150", link: "/event-space/16" },
  ];

  const filteredCardData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cardsToShow = showMore ? filteredCardData : filteredCardData.slice(0, 8);

  return (
    <div className="container mt-5">
      {/* Carousel for promotion */}
      <div id="promotionCarousel" className="carousel slide mb-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1200x400?text=Promotion+1" className="d-block w-100" alt="Promotion 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x400?text=Promotion+2" className="d-block w-100" alt="Promotion 2" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x400?text=Promotion+3" className="d-block w-100" alt="Promotion 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#promotionCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#promotionCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* CenterMode Carousel */}
      <div className="mb-3">
        <CenterMode />
      </div>

      {/* Sticky search bar */}
      <div className="sticky-search-bar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for event spaces..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main content */}
      <div className="text-content text-center mb-5 mt-5">
        <h2>Discover the Perfect Event Space for Your Next Occasion</h2>
        <p>
          Explore our curated selection of top-notch venues that cater to all types of events. Whether you're planning a corporate gathering, wedding, or social celebration, find the perfect space that fits your needs and style.
        </p>
      </div>

      <div className="row">
        {cardsToShow.length > 0 ? (
          cardsToShow.map((card) => (
            <div className="col-md-3 mb-3" key={card.id}>
              <CardComponent
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
                link={card.link}
                buttonText="Reserve Now"
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No event spaces found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* Button to toggle "See More" / "See Less" */}
      <div className="col-12 text-center mt-3 mb-5">
        {!showMore && filteredCardData.length > 8 && (
          <p>
            We've got plenty more venues to explore! Click below to see additional event spaces that might be just what you're looking for.
          </p>
        )}
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowMore(!showMore)}
          style={{
            border: "none",
            background: "transparent",
            color: "#007bff",
            cursor: "pointer",
          }}
        >
          {showMore ? "See Less" : "Want to See More Options?"}
        </button>
      </div>
    </div>
  );
};

export default EventSpaces;

