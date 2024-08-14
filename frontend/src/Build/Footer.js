import './Build.css';

function Footer() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <div className='card' style={{ padding: '20px' }}>
                        <div className='row g-0'>
                            <div className='col-md-4 logo-custom'>
                                <img
                                    src='/Img/Logofav.jpg'
                                    className='img-fluid rounded-circle'
                                    alt='Logo'
                                    style={{ borderRadius: '100%', border: '3px solid black', margin: '10px' }}
                                />
                                <h3 className='card-title'>SwiftBook</h3>
                            </div>
                            <div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5>Events</h5>
                                        <ul>
                                            <li>Food Fest</li>
                                            <li>Vendor Lock</li>
                                        </ul>
                                    </div>
                                    <div className='card-body'>
                                        <h5>About Us</h5>
                                        <p>Information about us goes here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Us Form */}
                <div className='col-md-6 mb-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Contact Us</h5>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'>Name</label>
                                    <input type='text' className='form-control' id='name' placeholder='Your Name' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email</label>
                                    <input type='email' className='form-control' id='email' placeholder='Your Email' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='message' className='form-label'>Message</label>
                                    <textarea className='form-control' id='message' rows='3' placeholder='Your Message'></textarea>
                                </div>
                                <button type='submit' className='btn'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;