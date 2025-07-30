import React from 'react';

function Charges() {
    return (
        <div className='container charges'>
            <div className='row between'>
                <div className='col-md-4 text-center'>
                    <img src='media/images/pricingEquity.svg' alt='Pricing equity'></img>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free - ₹0 brokerage.</p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src='media/images/intradayTrades.svg' alt='Pricing intraday trades'></img>
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src='media/images/pricingMF.svg' alt='Pricing MF'></img>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Charges;