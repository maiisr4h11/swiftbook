
import "./AboutUs.css";
import { Link } from 'react-router-dom';

export default function App() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage = "url(#)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage = "url(#)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage = "url(#)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage = "url(#)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage = "url(#";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage = "url(#)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

  return (
    <div className="App">
      <nav>
        <div>
          <a href="http://localhost:3000/contact-us">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/email-1614171-1360523.png"
              alt="Email"
            />
            <span
              style={{
                color: "white",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              swiftbook.com
            </span>
          </a>
          <a href="tel:+6012-345-6789">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/phone-267-918755.png"
              alt="phone logo"
            />
            <span
              style={{
                color: "white",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              +6012 345 6789
            </span>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://t.me">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt="Telegram"
            />
          </a>
        </div>
      </nav>
      <header id="head">
        <a href="/">
          <span>
            <img
              src="https://example.com/logo.png"
              alt="Logo"
            />
          </span>
          <span id="c_name">Swift Book</span>
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/register-sign-in" onMouseOver={gok} onMouseLeave={kog}>
              Register/Sign In
            </a>
            <div id="brr"></div>
          </li>
          <li>
            <a href="/services" onMouseOver={fok} onMouseLeave={kof}>
              Services
            </a>
            <div id="arr"></div>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome to Swift Book</h1>
          <img
            src="Swiftbook logo.jpg"
            alt="About Us"
            style={{
              width: '700px',
              height: 'auto',
              marginBottom: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              border: '2px solid black',
              borderRadius: '8px'
            }} />
          <p>
            "At Swift Book, our goal is to provide exceptional event management services that exceed our clients' expectations. We strive to create personalized and impactful events that reflect our clients' unique styles and objectives. Whether you're planning a corporate event, wedding, or private celebration, we are committed to delivering excellence."
          </p>
        </div>

        <div id="first" className="reveal">
          <div>
            <h1>We Offer Innovative Event Management Solutions</h1>
            <p>
              Elite Event Planners is committed to crafting unforgettable experiences through creativity and meticulous planning. Our experienced team provides personalized solutions for all types of events, ensuring a seamless and memorable experience.
            </p>
            <h2>Event Planning</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Venue Selection</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Vendor Coordination</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "353531" }}>EVENT MANAGEMENT</h2>
          <h1 style={{ color: "353531" }}>
            Professional Planning for Unforgettable Experiences
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/event-planning-2616071-2173024.png"
                alt="Event Planning"
              />
              <p>Event Planning</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/venue-2172023-1812261.png"
                alt="Venue Selection"
              />
              <p>Venue Selection</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/vendor-2172065-1812285.png"
                alt="Vendor Coordination"
              />
              <p>Vendor Coordination</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/guest-management-2172034-1812288.png"
                alt="Guest Management"
              />
              <p>Guest Management</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/creative-2172070-1812316.png"
                alt="Creative Solutions"
              />
              <p>Creative Solutions</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>OUR SERVICES</h1>
              <h2>Comprehensive Event Management</h2>
              <p>
                From planning to execution, Elite Event Planners offers a full range of event management services tailored to your needs. We handle every aspect of your event, ensuring a seamless and stress-free experience.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/event-management-2616069-2173022.png"
              alt="Event Management"
            />
          </div>
          <div className="container">
            <div>
              <h1>GLOBAL REACH</h1>
              <h2>Connecting You with World-Class Vendors</h2>
              <p>
                Our extensive network of vendors and suppliers allows us to deliver top-notch services for any event, anywhere in the world. We leverage our global connections to provide the best options for your needs.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/global-2172076-1812304.png"
              style={{ marginTop: "50px" }}
              alt="Global Reach"
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR VISION</h1>
              <h2>Creating Memorable Moments</h2>
              <p>
                At Elite Event Planners, our vision is to create extraordinary events that leave lasting impressions. We are dedicated to turning your vision into reality with precision and creativity.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/memory-2172071-1812281.png"
              style={{ marginTop: "80px" }}
              alt="Creating Memorable Moments"
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Expertise and Dedication</h2>
              <p>
                Our team is comprised of experienced professionals who are passionate about delivering exceptional events. We combine our expertise with a dedication to customer satisfaction to ensure your event is a success.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/team-2172068-1812296.png"
              alt="Teamwork"
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Expertly Managing Every Detail for Your Event
          </h1>
          <div id="third_cards">
            <div>
              <h2>Customized Event Solutions</h2>
              <p>
                We tailor our event planning services to meet your specific needs and preferences, ensuring a personalized experience.
              </p>
            </div>
            <div>
              <h2>Attention to Detail</h2>
              <p>
                Our meticulous attention to detail ensures that every aspect of your event is flawlessly executed.
              </p>
            </div>
            <div>
              <h2>Seamless Execution</h2>
              <p>
                We handle all aspects of event coordination to ensure a smooth and successful event.
              </p>
            </div>
          </div>
        </div>

        <div id="fifth" className="reveal">
          <h1>Contact Swift Book</h1>
          <div>
            <a href="mailto:info@eliteeventplanners.com">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt="Email"
              />
              <span>
                <h3>Email</h3>
                <p>info@swiftbook.com</p>
              </span>
            </a>
            <a href="tel:+6012-345-6789">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt="Phone"
              />
              <span>
                <h3>Phone</h3>
                <p>+6012 345 6789</p>
              </span>
            </a>
            <a href="https://www.google.com/maps">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/address-45868.png"
                alt="Address"
              />
              <span>
                <h3>Address</h3>
                <p>Lorong Tun Ismail 10,25000 Kuantan Pahang</p>
              </span>
            </a>
          </div>
        </div>
      </main>

      <footer style={{ display: "flex", justifyContent: "space-around" }} id="foote">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div>
          <h2>Connect with Us</h2>
          <span>
            <a href="https://www.instagram.com">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt="Facebook"
              />
            </a>
            <a href="https://wa.me/60123456789">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt="WhatsApp"
              />
            </a>
          </span>
          <span>
            <a href="https://t.me">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt="Telegram"
              />
            </a>
            <a href="https://www.linkedin.com">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt="LinkedIn"
              />
            </a>
          </span>
          <a
            href="tel:+6012-345-6789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +6012 345 6789
          </a>
        </div>
      </footer>
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;<b>Swift Book</b>. All rights reserved. | 
        <a href="terms-of-service.html" target="_blank" rel="noopener noreferrer">Terms of Service</a> | 
        <a href="privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </p>
    </div>
  );
}
