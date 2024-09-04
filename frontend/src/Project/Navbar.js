import React from 'react';
import { Link } from 'react-router-dom';
import '../Gstyles.css';



function Navbar({ user, handleLogout }) {
    return (
        <div>
            <div className='container my-3 rounded'>
                <nav className='navbar navbar-expand-md'>
                    <div className='container-fluid'>
                        <Link className='navbar-brand' to='/'>
                            <img
                                src='/logofav.jpg'
                                alt='Logo'
                                style={{ width: '40px', height: '40px', borderRadius: '100%', border: '3px solid black' }}
                            />
                        </Link>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item nav-custom'>
                                    <Link className='nav-link active' aria-current='page' to='/home'>Home</Link>
                                </li>
                                <li className='nav-item nav-custom'>
                                    <Link className='nav-link' to='/foodfest'>Food Fest</Link>
                                </li>
                                <li className='nav-item nav-custom'>
                                    <Link className='nav-link' to='/eventspace'>Event Space</Link>
                                </li>
                                <li className='nav-item nav-custom'>
                                    <Link className='nav-link' to='/aboutus'>About Us</Link>
                                </li>
                                <li className='nav-item nav-custom'>
                                    <Link className='nav-link' to='/contactus'>Contact Us</Link>
                                </li>
                            </ul>
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                                <li className='nav-item dropdown nav-custom'>
                                    <Link
                                        className='nav-link dropdown-toggle'
                                        to='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        {user ? user.name : 'Guest'}
                                    </Link>
                                    <ul className='dropdown-menu dropdown-menu-end'>
                                        <li><Link className='dropdown-item nav-custom' to='/setting'>Profile</Link></li>
                                        <li><Link className='dropdown-item nav-custom' to='/security'>Security</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link className='dropdown-item nav-custom' to='/login' onClick={handleLogout}>Log Out</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
