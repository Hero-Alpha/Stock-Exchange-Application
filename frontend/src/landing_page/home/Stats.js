import React from 'react';

function Stats() {
    return (
        <div className='container mt-5 mb-5 p-3' style={{color:'#424242'}}>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-5 mt-1'>Trust with confidence</h1>

                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <br></br>

                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a>Our philosophies.</a></p>
                    <br></br>

                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br></br>

                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    <br></br>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' alt='Products image' 
                        style={{width:"95%"}}
                    />
                    <div className='text-center'>
                        <a className='mx-3' href='' style={{textDecoration:'none'}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration:'none'}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;