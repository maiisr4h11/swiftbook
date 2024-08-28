import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './FoodFest.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LocationOn, CalendarToday, Person, Search } from '@mui/icons-material';

function FoodFest() {
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [foodfests, setFoodfests] = useState([]);
    const navigate = useNavigate();

    const locations = ['San Jacinto, USA', 'Los Angeles, USA', 'New York, USA']; // Example locations

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 2000, // Customize the duration if needed
        });

        // Fetch foodfest data from backend using Axios
        axios.get('http://localhost:5000/api/foodfest')
            .then(response => setFoodfests(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleEventNameChange = (e) => setEventName(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleDateChange = (e) => setStartDate(e.target.value);

    const handleViewDetails = (id) => {
        navigate(`/booking-details/${id}`);
    };

    return (
        <div>
            <section className='header'>
                <img className='banner' src='images/upcoming-events (3).png' alt='food-fest-banner' />
                <img src="images/upcoming-events (2).png" alt="Overlay" className="overlay-image" data-aos="fade-up" />
            </section>
            <section className='search' data-aos="fade-up">
                <div className='container mt-5 mb-5'>
                    <div className='col-md-12 text-center'>
                        <h2 className='font-weight-bold display-5'>Discover more events</h2>
                        <p className='text-muted mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="search-box p-3 d-flex align-items-center" style={{ backgroundColor: '#2c2c2c', borderRadius: '20px', width: '100%', maxWidth: '1000px' }}>
                            <div className="input-group me-3">
                                <span className="input-group-text" style={{ backgroundColor: '#2c2c2c', border: 'none' }}>
                                    <Person style={{ color: '#808080' }} />
                                </span>
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="What are you looking for?"
                                    value={eventName}
                                    onChange={handleEventNameChange}
                                    style={{ 
                                        backgroundColor: '#2c2c2c', 
                                        color: '#fff', 
                                        border: 'none',
                                        '::placeholder': { color: '#fff' }
                                    }}
                                />
                            </div>
                            <div className="input-group me-3">
                                <span className="input-group-text" style={{ backgroundColor: '#2c2c2c', border: 'none' }}>
                                    <LocationOn style={{ color: '#808080' }} />
                                </span>
                                <select
                                    className="form-select"
                                    value={location}
                                    onChange={handleLocationChange}
                                    style={{ backgroundColor: '#2c2c2c', color: '#fff', border: 'none' }}
                                >
                                    <option value="" disabled>Select location</option>
                                    {locations.map((loc, index) => (
                                        <option key={index} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group me-3">
                                <span className="input-group-text" style={{ backgroundColor: '#2c2c2c', border: 'none' }}>
                                    <CalendarToday style={{ color: '#808080' }} />
                                </span>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={startDate}
                                    onChange={handleDateChange}
                                    style={{ backgroundColor: '#2c2c2c', color: '#fff', border: 'none' }}
                                />
                            </div>
                            <button
                                className="btn"
                                style={{ backgroundColor: '#8e44ad', borderRadius: '50%', padding: '10px', color: '#fff' }}
                            >
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='event-list'>
                <div className='container mt-5 mb-5'>
                    <div className="row" data-aos="fade-up">
                        {foodfests.map((foodfest) => (
                            <div className="col-md-3" key={foodfest._id}>
                                <div className="card text-center mb-4 foodfest">
                                    <div className="card-body">
                                        <img className='card-img-top' src={foodfest.image} alt={foodfest.eventname}></img>
                                        <h5 className="card-title text-center mt-2 fs-4">{foodfest.eventname}</h5>
                                        <p className="card-text">{foodfest.date}</p> {/* Add more p tags as needed */}
                                        <button
                                            className='btn btn-primary text-center'
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
