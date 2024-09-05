import React, { useState, useEffect } from "react";
import { LocationOn, AttachMoney } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, TextField } from "@mui/material";
import axios from 'axios';
import "../Gstyles.css"

const Home = () => {
  // State variables for search query, card data, and food festivals
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [foodFests, setFoodFests] = useState([]);
  const navigate = useNavigate();

  // Fetch data for event spaces and food festivals on component mount
  useEffect(() => {
    const fetchEventSpaces = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/eventspaces");
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching event spaces data:", error);
      }
    };

    const fetchFoodFests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/foodfest');
        setFoodFests(response.data);
      } catch (error) {
        console.error('Error fetching food fest data:', error);
      }
    };

    fetchEventSpaces();
    fetchFoodFests();
  }, []);

  // Filter event spaces based on search query
  const filteredCardData = cardData.filter(
    (card) =>
      card.name_event_space.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.price <= parseFloat(searchQuery)
  );

  // Determine which cards to show based on 'showMore' state
  const cardsToShow = showMore ? filteredCardData : filteredCardData.slice(0, 3);
  const foodFestsToShow = foodFests.slice(0, 3);

  return (
    <div>
      {/* Carousel section for showcasing images */}
      <div className='container my-3'>
        <div id='carouselExampleInterval' className='carousel slide carousel-fade' data-bs-ride='carousel'>
          <div className='carousel-inner' id='home-carousel'>
            <div className='carousel-item active' data-bs-interval='1000'>
              <img src="images/poster-2.png" className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item' data-bs-interval='1000'>
              <img src='https://splidejs.com/images/slides/image-slider/02.jpg' className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item' data-bs-interval='1000'>
              <img src='https://splidejs.com/images/slides/crop/06.jpg' className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item' data-bs-interval='1000'>
              <img src="images/poster-4.png" className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item' data-bs-interval='1000'>
              <img src="https://noorevents.com/wp-content/upload/2022/03/NOOR-WeddingPromotion-Spring2022-1024-1.jpg" className='d-block w-100' alt='...' />
            </div>
          </div>
          <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      {/* Sticky search bar for filtering event spaces */}
      <div className="search-bar mb-5 p-0 bg-light rounded" style={{border:"2px solid #d0a98f"}}>
        <TextField
          fullWidth
          placeholder="Search by name, location, or price..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Main content section */}
      <div className="container">
        <div className="text-center mb-5 mt-5">
          <Typography variant="h2">Collab Your Idea of Planning with Us</Typography>
          <Typography variant="body1">
            Discover unforgettable experiences at our website! Explore versatile event spaces for your special occasions and indulge in exciting food festivals. Join us for the ultimate blend of events and culinary delights!
          </Typography>
        </div>

        {/* Event spaces display */}
        <div className="row">
          {cardsToShow.length > 0 ? (
            cardsToShow.map((card) => (
              <div className="col-md-4 mb-3" key={card.event_space_ID}>
                <Card className="event-card">
                  <CardMedia component="img" image={card.image1} alt={card.name_event_space} />
                  <CardContent>
                    <Typography variant="h6">{card.name_event_space}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      <LocationOn /> {card.location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <AttachMoney /> Starting price RM{card.price} per day
                    </Typography>
                    {/* <div className="btn btn-primary">
                      <Link to={`/eventspace/${card.event_space_ID}`}
                        style={{ textDecoration: "none", color:"black", fontWeight:"550" }}>
                        Reserve Now
                      </Link>
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <div className="col-12">
              <Typography>No event spaces found matching your search criteria.</Typography>
            </div>
          )}
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/eventspace')} style={{ width: "100%", fontWeight: "bold", color:"black" }}>
          Explore More Event Spaces
        </button>

        {/* Featured Food Festivals display */}
        <div className="mt-5">
          <Typography variant="h4" className="text-center mb-4">Featured Food Festivals</Typography>
          <div className="row">
            {foodFestsToShow.length > 0 ? (
              foodFestsToShow.map((foodfest) => (
                <div className="col-md-4 mb-3" key={foodfest._id}>
                  <Card className="event-card">
                    <CardMedia component="img" image={foodfest.image} alt={foodfest.eventname} />
                    <CardContent>
                      <Typography variant="h6">{foodfest.eventname}</Typography>
                      <Typography variant="body2" color="textSecondary">{foodfest.date}</Typography>
                      {/* <button className="btn btn-primary" onClick={() => navigate(`/bookingdetails/${foodfest._id}`)} style={{ width: "100%", color:"black", fontWeight:"550" }}>
                        View Details
                      </button> */}
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <Typography>No food festivals found.</Typography>
            )}
          </div>
        </div>

        {/* Explore more food festivals */}
        <button className="btn btn-primary" onClick={() => navigate('/foodfest')} style={{ width: "100%", fontWeight: "bold", color:"black" }}>
          Explore More Food Festivals
        </button>

        {/* Contact section for adding event spaces */}
        <div className="text-center my-5">
          <Typography variant="h5">Want to Add Your Event Space?</Typography>
          <Typography>If you're interested in adding your event space to our platform or want to discuss marketing opportunities, please email us at:</Typography>
          <Typography>
            <Link to="mailto:swifbookiomarketing@gmail.com" style={{ color: "#007bff" }}>
              swifbookiomarketing@gmail.com
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
