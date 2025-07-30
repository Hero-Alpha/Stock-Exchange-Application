import React from 'react';

function Hero() {
    return (
        <div className='container p-3 mb-5'>
            <div className='row text-center openAccount'>

                <img src="media/images/homeHero.png" className='mb-5' alt='HeroImage'></img>
                <h1 className='mt-3'style={{color:"#424242", fontSize:"3rem"}}>Invest in everything</h1>
                <p className='mb-5' style={{color:"#414141", fontSize:"1.4rem"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{height:"2.7rem", width:"11rem", margin:"0 auto",
                                backgroundColor:"#387fd1", color:"#fff", 
                                border:"none", borderRadius:"3px",
                                fontWeight:"500", fontSize:"1.1rem",
                                paddingBottom:"4px"}}>Sign up for free
                </button>

            </div>
        </div>
    );
}

export default Hero;