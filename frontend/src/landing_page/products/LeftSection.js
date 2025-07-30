import React from 'react';

function LeftSection({ productURL, imageURL, productName, productDescription, tryDemoURL, learnMoreURL, googlePlay, appStore }) {
    return (
        <div className='container px-4 py-5'>
            <div className='row align-items-center'>
                <div className='col-md-7 text-center'>
                    <a href={productURL}>
                        <img src={imageURL} alt='Product Image' className='img-fluid' />
                    </a>
                </div>

                {/* Spacer column for consistent gap */}
                <div className='col-md-1'></div>

                <div className='col-md-4 pl-md-4'>
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

                    {(googlePlay || appStore) && (
                        <div className='row'>
                            {googlePlay && (
                                <div className='col-6'>
                                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' className='img-fluid' /></a>
                                </div>
                            )}
                            {appStore && (
                                <div className='col-6'>
                                    <a href={appStore}><img src='media/images/appStoreBadge.svg' className='img-fluid' /></a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
