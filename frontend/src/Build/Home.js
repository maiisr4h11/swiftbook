import React from 'react'

function Home() {
    return (
        <div>
            <div className='container'>
                <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <img src="https://img.reintech.io/variants/11o9c37dv7lwetowklh227m4yy35/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://splidejs.com/images/slides/image-slider/02.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="1000">
                            <img src="https://splidejs.com/images/slides/crop/06.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home