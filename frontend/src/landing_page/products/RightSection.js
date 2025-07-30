import React from 'react';

function RightSection({ productURL, imageURL, productName, productDescription, tryDemoURL, learnMoreURL }) {
    return (
        <div className='container px-4 py-5'>
            <div className='row align-items-center'>
                <div className='col-md-4 pr-md-4'>
                    <h1>{productName}</h1><br />
                    <p>{productDescription}</p>
                    <div className='row py-3'>
                        {tryDemoURL && (
                            <div className='col-6'>
                                <a href={tryDemoURL}>Try demo <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        )}
                        {learnMoreURL && (
                            <div className='col-6'>
                                <a href={learnMoreURL}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Spacer column for consistent gap */}
                <div className='col-md-1'></div>

                <div className='col-md-7 text-center'>
                    <a href={productURL}>
                        <img src={imageURL} alt='Product Image' className='img-fluid' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
