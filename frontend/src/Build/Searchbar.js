import React, { useState } from 'react';

function SearchNavbar() {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', eventName, location, searchInput);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Event Finder</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" onSubmit={handleSubmit}>
              <div className="form-group me-2">
                <label for="eventName">Event Name:</label>
                <select
                  className="form-control"
                  id="eventName"
                  value={eventName}
                  onChange={handleEventNameChange}
                >
                  <option value="">Select an event</option>
                  <option value="Concert">Concert</option>
                  <option value="Festival">Festival</option>
                  <option value="Conference">Conference</option>
                </select>
              </div>
              <div className="form-group me-2">
                <label for="location">Location:</label>
                <select
                  className="form-control"
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                >
                  <option value="">Select a location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </div>
              <div className="form-group me-2">
                <label for="searchInput">Search:</label>
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search for events"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
              </div>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SearchNavbar;