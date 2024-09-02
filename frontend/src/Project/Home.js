import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <div>
            {/* Carousel section */}
            <div>
                <div>
                    <div className='container my-3'>
                        <div id='carouselExampleInterval' className='carousel slide carousel-fade' data-bs-ride='carousel'>
                            <div className='carousel-inner' id='home-carousel'>
                                <div className='carousel-item active' data-bs-interval='1000'>
                                    <img src='https://img.reintech.io/variants/11o9c37dv7lwetowklh227m4yy35/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b' className='d-block w-100' alt='...' />
                                </div>
                                <div className='carousel-item' data-bs-interval='1000'>
                                    <img src='https://splidejs.com/images/slides/image-slider/02.jpg' className='d-block w-100' alt='...' />
                                </div>
                                <div className='carousel-item' data-bs-interval='1000'>
                                    <img src='https://splidejs.com/images/slides/crop/06.jpg' className='d-block w-100' alt='...' />
                                </div>
                            </div>
                            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
                                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                <span className='visually-hidden'>Previous</span>
                            </button>
                            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
                                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                <span className='visually-hidden'>Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home