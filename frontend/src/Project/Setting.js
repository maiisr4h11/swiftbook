import React from 'react';
import { Link } from 'react-router-dom';
import "../Gstyles.css";

function Setting({ user }) {
  return (
    <div className="container-xl px-4 mt-4">
      <nav className="nav nav-borders">
        <Link className="nav-link active ms-0" to="/setting">Profile</Link>
        <Link className="nav-link" to="/security">Security</Link>
      </nav>
      <hr className="mt-0 mb-4" />
      <div className="row">
        {/* Additional content or components can go here */}
      </div>
      <div className="col-xl-8">
        <div className="card mb-4">
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <p><strong>Name:</strong> {user ? user.name : 'Guest'}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
