import React from 'react';

function NotFound() {
    return (  
        <div className='container p-3 mb-5'>
            <div className='row text-center openAccount'>

                <h1 className='mt-3 mb-4'style={{color:"#424242", fontSize:"4rem"}}>404 Not Found</h1>
                <p className='mb-5 text-muted' style={{color:"#414141", fontSize:"2rem"}}>Sorry the page you're looking for does not exist. </p>
                

            </div>
        </div>
    );
}

export default NotFound;