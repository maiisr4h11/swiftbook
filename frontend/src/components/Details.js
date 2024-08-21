import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/Details.css'; // Ensure this CSS file contains necessary styles
import Calendar from 'react-calendar'; // You can use any calendar library you prefer

// Static data
const eventSpaces = [
  {
    id: 1,
    title: 'Elegant Ballroom',
    address: '123 Celebration Ave, Event City',
    distance: 'Prime location – 200m from downtown',
    highlight: 'Book this space for an event over $500 and receive a complimentary decoration package!',
    price: '$1,200',
    description: 'The Elegant Ballroom offers a blend of classic elegance and modern amenities. Ideal for weddings, corporate events, and large social gatherings, this venue provides a luxurious and spacious setting.',
    carouselImages: [
      'https://via.placeholder.com/800x400?text=Event+Space+1',
      'https://via.placeholder.com/800x400?text=Event+Space+2',
      'https://via.placeholder.com/800x400?text=Event+Space+3'
    ],
    capacity: '200 guests',
    suggestedEvents: ['Wedding', 'Corporate Meeting', 'Food Festival', 'Charity Event'],
    utilities: ['AV Equipment', 'Wi-Fi', 'Catering Services', 'Decorations'],
    reservedDates: ['2024-08-25', '2024-09-10'], // Sample reserved dates
  },
  // Add more event spaces as needed
];

const EventSpaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUrl = window.location.href; // URL to share
  const [date, setDate] = useState(null);

  const eventSpace = eventSpaces.find(space => space.id === parseInt(id));

  if (!eventSpace) {
    return <div>Event Space not found</div>;
  }

  const handleBackToEventSpaces = () => {
    navigate('/eventspace');
  };

  const handleBookNow = () => {
    navigate('/reserve', { state: { eventSpace, date } });
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnInstagram = () => {
    alert('Instagram sharing is not supported via URL. Please share directly from the app.');
  };

  // Check if the selected date is available
  const isDateAvailable = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return !eventSpace.reservedDates.includes(formattedDate);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-8">
          {/* Logo */}
          <div className="text-center mb-4">
            <img src="https://via.placeholder.com/150x50?text=Your+Logo" alt="Logo" className="logo" />
          </div>

          {/* Back to Event Spaces Button */}
          <button className="btn btn-primary mb-4" onClick={handleBackToEventSpaces}>
            Back to Event Spaces
          </button>

          {/* Details Content */}
          <div className="detailsContent">
            {/* Main Details */}
            <div className="detailsSection">
              <h1 className="detailsTitle text-center">{eventSpace.title}</h1>
              
              <div className="text-center mb-3">
                <span className="locationIcon">📍</span>
                <span className="detailsAddress">{eventSpace.address}</span>
              </div>
              
              <span className="text-center d-block detailsDistance">{eventSpace.distance}</span>

              <div className="row mt-4">
                {eventSpace.carouselImages.map((photo, i) => (
                  <div className="col-md-4 mb-0" key={i}>
                    <img
                      src={photo}
                      className="img-fluid gallery-img"
                      alt={`Event space view ${i + 1}`}
                      data-bs-toggle="modal"
                      data-bs-target={`#imageModal${i}`}
                    />
                    {/* Modal for larger view */}
                    <div className="modal fade" id={`imageModal${i}`} tabIndex="-1" aria-labelledby={`imageModalLabel${i}`} aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id={`imageModalLabel${i}`}>Image View</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <img src={photo} className="img-fluid full-page-img" alt={`Enlarged view ${i + 1}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="detailsDescription mt-4">
                <h2>About the Event Space</h2>
                <p>{eventSpace.description}</p>
                
                <div className="text-justify mt-4">
                  <h4>Capacity:</h4>
                  <p>{eventSpace.capacity}</p>
                </div>
                
                <div className="text-justify mt-4">
                  <h4>Utilities Provided:</h4>
                  <div className="row inline-list">
                    {eventSpace.utilities.map((utility, index) => (
                      <div className="col-auto" key={index}>
                        <span className="inline-item">{utility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <h2>Price:</h2>
                <h3>{eventSpace.price} (per day)</h3>
              </div>

              <div className="detailsPrice text-center mt-4">
                <button 
                  className="btn btn-primary w-100" 
                  onClick={handleBookNow} 
                  disabled={!date || !isDateAvailable(date)}
                >
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Calendar, Reviews, and Share */}
        <div className="col-md-4">
          <div className="sidebarSection">
            {/* Calendar */}
            <div className="calendarSection mb-4">
              <h2>Check Availability</h2>
              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={({ date }) => 
                  eventSpace.reservedDates.includes(date.toISOString().split('T')[0]) ? 'reserved' : null
                }
              />
              {date && (
                <p className="mt-2">
                  Selected Date: {date.toDateString()} 
                  {isDateAvailable(date) ? ' - Available' : ' - Not Available'}
                </p>
              )}
            </div>

            {/* Reviews */}
            <div className="reviewsSection mb-4">
              <h2>Reviews</h2>
              <div className="review">
                <p><strong>Jane Doe:</strong> "Amazing space! Perfect for our wedding. Highly recommend!"</p>
              </div>
              <div className="review">
                <p><strong>John Smith:</strong> "Great location and excellent service. Ideal for corporate events."</p>
              </div>
              {/* Add more reviews as needed */}
            </div>

            {/* Share Section */}
            <div className="shareSection">
              <h2>Share This Space</h2>
              <div className="shareButtons">
                <button className="btn btn-outline-primary me-2" onClick={copyLinkToClipboard}>Copy Link</button>
                <button className="btn btn-outline-success me-2" onClick={shareOnWhatsApp}>Share on WhatsApp</button>
                <button className="btn btn-outline-primary me-2" onClick={shareOnFacebook}>Share on Facebook</button>
                <button className="btn btn-outline-danger" onClick={shareOnInstagram}>Share on Instagram</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpaceDetails;














// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const EventSpaceDetails = () => {
//   const { id } = useParams();
//   const [eventSpace, setEventSpace] = useState(null);

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch(`/api/event-spaces/${id}`)
//       .then(response => response.json())
//       .then(data => setEventSpace(data))
//       .catch(error => console.error('Error fetching event space:', error));
//   }, [id]);

//   if (!eventSpace) {
//     return <div>Loading...</div>;  // Show a loading state while fetching data
//   }

//   return (
//     <div className="container mt-5">
//       {/* Carousel Modal */}
//       <div className="modal fade" id="carouselModal" tabIndex="-1" aria-labelledby="carouselModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="carouselModalLabel">Image Gallery</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div id="carouselExampleControls" className="carousel slide">
//                 <div className="carousel-inner">
//                   {eventSpace.carouselImages.map((photo, index) => (
//                     <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                       <img src={photo} className="d-block w-100" alt={`Event space view ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                   <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                   <span className="visually-hidden">Next</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Details Content */}
//       <div className="detailsContent">
//         <button className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#carouselModal">View Gallery</button>
//         <h1 className="detailsTitle">{eventSpace.title}</h1>
//         <div className="detailsAddress">
//           <span className="locationIcon">📍</span>
//           <span>{eventSpace.address}</span>
//         </div>
//         <span className="detailsDistance">{eventSpace.distance}</span>
//         <span className="detailsPriceHighlight">{eventSpace.highlight}</span>

//         <div className="row mt-4">
//           {eventSpace.carouselImages.map((photo, i) => (
//             <div className="col-md-4 mb-4" key={i}>
//               <div className="card">
//                 <img src={photo} className="card-img-top" alt={`Event space thumbnail ${i + 1}`} data-bs-toggle="modal" data-bs-target="#carouselModal" />
//                 <div className="card-body">
//                   <h5 className="card-title">Image {i + 1}</h5>
//                   <p className="card-text">Click on the image to view in the carousel.</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="detailsDescription">
//           <div className="detailsText">
//             <h1>Host Your Event in Style</h1>
//             <p>{eventSpace.description}</p>
//           </div>
//           <div className="detailsPrice">
//             <h1>Perfect for any occasion!</h1>
//             <span>Located in the heart of Event City, this space has an excellent location score of 9.7!</span>
//             <h2><b>{eventSpace.price}</b> (per day)</h2>
//             <button className="btn btn-primary">Book Now!</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventSpaceDetails;

