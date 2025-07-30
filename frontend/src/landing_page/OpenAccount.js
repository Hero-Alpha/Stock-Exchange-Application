import React from 'react';

function OpenAccount() {
    return (  
        <div className='container p-3 mb-5'>
            <div className='row text-center openAccount'>

                <h1 className='mt-3 mb-4'style={{color:"#424242", fontSize:"3rem"}}>Open a Zerodha account</h1>
                <p className='mb-5 text-muted' style={{color:"#414141", fontSize:"1.4rem"}}>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades. </p>
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

export default OpenAccount;