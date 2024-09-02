import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function BookVendor() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section id="vendor">
                <div className='container bg-dark text-light shadow rounded-3 p-4 mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <h1>Book Vendor Now!</h1>
                            <form className="mt-4">
                                <div className="mb-4 form-control-bg-light ">
                                    <label className="form-label">Your name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control bg-secondary text-light" />
                                </div>
                                <div className="mb-4 form-control-bg-light">
                                    <label className="form-label">Phone Number<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control bg-secondary text-light" />
                                </div>
                                <div className="mb-4 form-control-bg-light">
                                    <label className="form-label">Email address <span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control bg-secondary text-light" />
                                </div>
                                <div className="mb-4 form-control-bg-light">
                                    <label className="form-label">Message <span className='text-danger'>*</span></label>
                                    <textarea className="form-control bg-secondary text-light" rows="4"></textarea>
                                </div>

                                <div>
                                    <button className="btn btn-lg mb-0" type="button">Proceed to Payment</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <img src='images/poster-1.png' alt='' className='img-fluid rounded-5 w-60'></img>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default BookVendor