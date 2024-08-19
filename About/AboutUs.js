import React from 'react';
import './AboutUs.css'; // Import the custom CSS file

const AboutUs = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container" id='top'>
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h3 className="fs-5 mb-2 text-secondary text-uppercase fade-in">
              About
            </h3>
            <h2 className="display-5 mb-4 slide-in-left">
            Our journey began with a dream of redefining how the world perceives design.
            </h2>
            <button
              type="button"
              className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5 slide-in-up">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-6">
            <article>
              <div
                className="card border-0 slide-in-up">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src="about-us.jpg"
                  alt="Our Vision"
                  height={"100px"}
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Vision
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    From sleek modernism to timeless elegance, we infuse every creation with a touch of our artistic ingenuity. As a design agency, great design can shape perceptions, inspire action, and leave an indelible mark on the world.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="card mb-1 mt-2 slide-in-up" id="card2" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="background.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

