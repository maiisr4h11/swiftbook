import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Gstyles.css";

export default function AboutUs() {
  // Handle scroll events
  const handleScroll = () => {
    const header = document.getElementById("head");
    if (header) {
      header.style.top = "0px";
      header.style.position = "sticky";
    }
  };

  // Handle reveal on scroll
  const handleReveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    reveals.forEach((reveal) => {
      const top = reveal.getBoundingClientRect().top;
      const revealPoint = 100;
      if (top < windowHeight - revealPoint) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  };

  // Set up and clean up scroll event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleReveal);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleReveal);
    };
  }, []);

  return (
    <div className="App">
      <main className="container">
        {/* Introduction Section */}
        <section id="front" className="text-center reveal py-5">
          <h1 id="title" className="display-4">Welcome to Swift Book</h1>
          <img
            src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725437110/swiftbook_logo_2_fz9hcv.jpg"
            alt="Company Logo"
            style={{
              width: '400px',
              height: 'auto',
              marginBottom: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              border: '2px solid grey',
              borderRadius: '5px'
            }} />
          <p className="lead">
            "At Swift Book, our goal is to provide exceptional event management
            services that exceed our clients' expectations. We strive to create
            personalized and impactful events that reflect our clients' unique
            styles and objectives."
          </p>
        </section>

        {/* Our Mission Section */}
        <section id="first" className="reveal py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 text-center">
                <h1 className="mb-4">Our Mission</h1>
                <p className="mb-4">
                  Swift Book is committed to crafting unforgettable experiences through creativity and meticulous planning. Our experienced team provides personalized solutions for all types of events.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <h2 className="mb-2">Event Planning</h2>
                    <img
                      src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725438359/Venue_bd1jqp.png"
                      alt="Event Planning"
                      className="img-fluid"
                      style={{
                        width: '300px',
                        height: 'auto',
                        border: '2px solid grey',
                        borderRadius: '5px'
                      }}
                    />
                  </li>
                  <li className="mb-4">
                    <h2 className="mb-2">Venue Selection</h2>
                    <img
                      src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725438357/view_jb0smq.png"
                      alt="Venue Selection"
                      className="img-fluid"
                      style={{
                        width: '300px',
                        height: 'auto',
                        border: '2px solid grey',
                        borderRadius: '5px'
                      }}
                    />
                  </li>
                  <li>
                    <h2 className="mb-2">Vendor Coordination</h2>
                    <img
                      src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725437130/event1_r8yly7.jpg"
                      alt="Vendor Coordination"
                      className="img-fluid"
                      style={{
                        width: '300px',
                        height: 'auto',
                        border: '2px solid grey',
                        borderRadius: '5px'
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Event Management Section */}
        <section id="fourth" className="reveal text-center py-5 bg-dark text-white rounded">
          <h2 className="mb-3">EVENT MANAGEMENT</h2>
          <h1 className="mb-4">Professional Planning for Unforgettable Experiences</h1>
          <div id="fourth_cards" className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4 col-lg-2">
                <div className="card bg-secondary text-white text-center">
                  <img
                    src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725433411/event_n88otr.png"
                    alt="Event Planning"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Event Planning</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="card bg-secondary text-white text-center">
                  <img
                    src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725433656/concert_ysdxlw.png"
                    alt="Venue Selection"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Venue Selection</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="card bg-secondary text-white text-center">
                  <img
                    src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725433779/street-food_k8dxel.png"
                    alt="Vendor Coordination"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Vendor Coordination</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="card bg-secondary text-white text-center">
                  <img
                    src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725433975/guests_hj3rls.png"
                    alt="Guest Management"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Guest Management</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="card bg-secondary text-white text-center">
                  <img
                    src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725434216/puzzle_v2jmr4.png"
                    alt="Creative Solutions"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Creative Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovative Solutions Section */}
        <section id="second" className="reveal py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://res.cloudinary.com/dkwbhhn9e/image/upload/v1725436166/camping_event_1_dfceh5.jpg"
                alt="Event Management Solutions"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <h1>WE OFFER INNOVATIVE EVENT MANAGEMENT SOLUTIONS</h1>
              <p>
                Our team is dedicated to creating memorable events tailored to
                your needs. With expertise in event planning, vendor coordination,
                and venue selection, we bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="third" className="reveal text-center py-5">
          <h1>SUCCESS STORIES</h1>
          <p>
            We’ve had the privilege of working with some incredible clients to
            bring their visions to life. From intimate gatherings to large-scale
            productions, we’ve done it all. Here are just a few of our success
            stories.
          </p><br></br>
          <div id="testimonials" className="container test">
            <blockquote className="blockquote">
              <p className="mb-3">
                "Swift Book handled our wedding planning from start to finish,
                and it was absolutely perfect! They listened to our vision and
                executed it flawlessly."
              </p>
              <footer className="blockquote-footer mb-4">
                Jane Doe, Bride
              </footer>
            </blockquote>
            <blockquote className="blockquote">
              <p className="mb-3">
                "Our corporate event was a huge success thanks to Swift Book's
                meticulous planning and coordination. Highly recommended!"
              </p>
              <footer className="blockquote-footer mb-4">
                John Smith, CEO
              </footer>
            </blockquote>
            <blockquote className="blockquote">
              <p className="mb-3">
                "Swift Book’s team went above and beyond to ensure our event
                was a hit. Their attention to detail and creativity were
                remarkable."
              </p>
              <footer className="blockquote-footer mb-4">
                Sarah Lee, Event Organizer
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
}
