import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5 p-3'style={{color:'#424242'}}>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width:'100%'}} src='media/images/largestBroker.svg' alt='awards_image'/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li className='p-2'><p>Futures and Options</p></li>
                                <li className='p-2'><p>Commodity derivatives</p></li>
                                <li className='p-2'><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='p-2'><p>Stocks & IPOs</p></li>
                                <li className='p-2'><p>Direct mutual funds</p></li>
                                <li className='p-2'><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                        <img className='mt-1' src='media/images/pressLogos.png' alt='Press Logo Image' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Awards;