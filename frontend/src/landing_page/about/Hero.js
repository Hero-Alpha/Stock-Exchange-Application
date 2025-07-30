import React from 'react';

function Hero() {
    return (
        <div className='container about mt-5'>
            <div className='row p-1 text-center' style={{ margin: '10% 0 10% 0' }}>
                <h1 className='fw-medium'>We pioneered the discount broking model in India.<br></br>
                    Now, we are breaking ground with our technology.</h1>
            </div>
            <hr style={{ height: '1px', backgroundColor: 'rgb(229, 227, 227)' }}></hr>
            <div className='row text-grey mt-5 mb-5'>
                <div className='col-6 mt-5 mb-5'>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.<br></br><br></br>

                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.<br></br><br></br>

                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className='col-6 mt-5 mb-5'>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.<br></br><br></br>

                        <a href='#'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.<br></br><br></br>

                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#'>blog</a> or see what the media is <a href='#'>saying about us</a> or learn more about our business and product <a href='#'>philosophies</a>.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Hero;