import React from "react"
import "../Gstyles.css"

function Footer() {
    return (
        <div>
            {/* Footer section */}
            <div>
                <div>
                    <div className='footer my-3'>
                        <div className='container mt-5 p-5'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h5>About Us</h5>
                                    <ul className='text-muted'>
                                        <li><a href="#" className="text-secondary text-decoration-none">Our Story</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">Our Team</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">Our Mission</a></li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><a href="#" className="text-secondary text-decoration-none">Home</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">About</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                    <h5>Contact Us</h5>
                                    <ul>
                                        <li><a href="#" className="text-secondary text-decoration-none">Email: example@example.com</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">Phone: 123-456-7890</a></li>
                                        <li><a href="#" className="text-secondary text-decoration-none">Address: 123 Main St, Anytown, USA</a></li>
                                    </ul>
                                </div>
                            </div><hr></hr>
                            <div className='container'>
                                <div className='d-flex justify-content-center'>
                                    <p>&copy; 2024 My Company. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer