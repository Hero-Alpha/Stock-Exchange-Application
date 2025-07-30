import React from 'react';

export default function Universe() {
    return (
        <div className='container mt-5 mb-5 text-center'>
            <div className='row mt-5 mb-5'>
                <p className='products-universe'>Want to know more about our technology stack? Check out the <a href='#'>Zerodha.tech</a> blog.</p>
            </div>

            <div className='row mt-4 mb-4'>
                <h1>The Zerodha Universe</h1>
                <p className='fs-6 mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row products-uni justify-content-center">
                <div className="col-6 col-sm-4 text-center product-card">
                    <a href="https://www.zerodhafundhouse.com/">
                        <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" className="product-logo" />
                        <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </a>
                    <a href="https://streak.tech/">
                        <img src="media/images/streakLogo.png" alt="Streak" className="product-logo" />
                        <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </a>
                </div>

                <div className="col-6 col-sm-4 text-center product-card">
                    <a href="https://sensibull.com/">
                        <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="product-logo-sensibull" />
                        <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </a>
                    <a href="https://smallcase.zerodha.com/">
                        <img src="media/images/smallcaseLogo.png" alt="smallcase" className="product-logo" />
                        <p>Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
                    </a>
                </div>

                <div className="col-6 col-sm-4 text-center product-card">
                    <a href="https://www.tijorifinance.com/">
                        <img src="media/images/tijori.svg" alt="Tijori" className="product-logo" />
                        <p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </a>
                    <a href="https://joinditto.in/">
                        <img src="media/images/dittoLogo.png" alt="Ditto" className="product-logo" />
                        <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </a>
                </div>
            </div>

        </div>
    )
}