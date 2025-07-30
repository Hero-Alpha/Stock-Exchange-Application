import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5 p-3' style={{color:'#424242'}}>
            <div className='row'>
                <div className='col-6' style={{display:'flex', justifyContent:'center'}}>
                    <img style={{height:'75%'}} src='media/images/education.svg' alt='Edicatiion image' />
                </div>
                <div className='col-6'>
                    <h1 className='mb-4'>Free and open market education</h1>

                    <p className='text-muted mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:'none'}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:'none'}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;