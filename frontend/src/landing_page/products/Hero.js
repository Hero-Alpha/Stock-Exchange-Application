import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h1 className='mt-5 products-hero'>Zerodha Products</h1>
                <p className='fs-4'>Sleek, modern, and intuitive platforms</p>
                <p className='fs-6 mb-5'>Check out our <a href='#'>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
            <hr style={{ height: '1px', color: 'rgb(145, 145, 145)' }} />
        </div>
    );
}

export default Hero;