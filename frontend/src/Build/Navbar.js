import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    // State to manage the logged-in user
    const [user, setUser] = useState(null);

    // Function to simulate user login
    const handleLogin = () => {
        // Simulate setting the user after login
        setUser({ username: 'JohnDoe' });
    };

    // Function to handle user log out
    const handleLogout = () => {
        // Simulate clearing the user session
        setUser(null);
        // Add any additional logout logic here, such as API calls to invalidate the session
        // Example: fetch('/api/logout').then(() => setUser(null));
    };

    return (
        <div>
            <div>
                <div className='container'>
                    <nav className="navbar navbar-expand-md bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
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
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item nav-custom">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item dropdown nav-custom">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Events
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item nav-custom" href="#">Food Fest</a></li>
                                            <li><a className="dropdown-item nav-custom" href="#">Vendor Lock</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-custom">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item nav-custom">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-right mb-2 mb-lg-0">
                                    <li className="nav-item dropdown nav-custom">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {user ? `Hi, ${user.username}` : 'Login'}
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            {user ? (
                                                <>
                                                    <li><a className="dropdown-item nav-custom" href="#">Profile</a></li>
                                                    <li><a className="dropdown-item nav-custom" href="#">Setting</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item nav-custom" href="#" onClick={handleLogout}>Log Out</a></li>
                                                </>
                                            ) : (
                                                <li><a className="dropdown-item nav-custom" href="#" onClick={handleLogin}>Log In</a></li>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
