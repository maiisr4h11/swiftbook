import React from 'react';
import { Link } from 'react-router-dom';

function Setting() {
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <Link className="nav-link active ms-0" to="/Setting">Profile</Link>
          <Link className="nav-link" to="/Security">Security</Link>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          {/* ... */}
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
