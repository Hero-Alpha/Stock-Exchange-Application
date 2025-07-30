import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5 mb-5 p-3' style={{ color: '#424242' }}>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p className='text-muted'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a className='mt-3' href='' style={{ textDecoration: 'none' }}>See pricing  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-8'style={{margin:'auto 0'}}>
                    <div className='row'>
                        <div className='col-3' style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '60%' }} src='media/images/pricing0.svg' alt='Free account' />
                            <p style={{fontSize:'13px'}}>Free account
                                opening</p>
                        </div>
                        <div className='col-5' style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '37%' }} src='media/images/pricingEquity.svg' alt='Equity' />
                            <p style={{fontSize:'13px'}}>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col-3' style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '60%' }} src='media/images/intradayTrades.svg' alt='Intraday Trades' />
                            <p style={{fontSize:'13px'}}>Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;