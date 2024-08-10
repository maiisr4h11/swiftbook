import React, { useEffect } from 'react';
import './FoodFest.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FoodFest() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1200, // Customize the duration if needed
        });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div>
            <section className='header'>
                <img className='banner' src='images/upcoming-events (3).png' alt='food-fest-banner' />
                <img src="images/upcoming-events (2).png" alt="Overlay" className="overlay-image" data-aos="fade-up" />
            </section>
            <section className='search' data-aos="fade-up">
                <div className='container mt-5 '>
                    <div className='col-md-12 text-center'>
                        <h2 className='font-weight-bold display-5' >Discover more events</h2>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className='event-list'>
                <div className='container mt-5 mb-5'>
                    <div class="row" data-aos="fade-up">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Item 1</h5>
                                    <p class="card-text">Some text for item 1</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Item 2</h5>
                                    <p class="card-text">Some text for item 2</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Item 3</h5>
                                    <p class="card-text">Some text for item 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default FoodFest;