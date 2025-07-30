import React from 'react';

function Hero() {
    return (
        <div className='container-fluid p-5 support-p1'>

                <div className='row d-flex justify-content-between align-items-center mb-4'>
                    <div className='col-auto'>
                        <h3 className='m-0'>Support Portal</h3>
                    </div>
                    <div className='col-auto'>
                        <h4 className='m-0'><a href='#'>Track tickets</a></h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h3>Search for an answer or browse help topics to create a ticket</h3>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Eg: how do I activate F&O, why is my order getting rejected ..." aria-label="Recipient’s username" aria-describedby="button-addon2">
                            </input>
                            <button class="btn btn-outline-light" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className='row ticket-support'>
                            <div className='col-12 col-md-4'>
                                <h5><a>Track account opening</a></h5>
                                <h5><a>Kite user manual</a></h5>
                            </div>
                            <div className='col-12 col-md-4'>
                                <h5><a>Track segment activation</a></h5>
                            </div>
                            <div className='col-12 col-md-4'>
                                <h5><a>Intraday margins</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 pt-5'>
                        <h3>Featured</h3>
                        <ol>
                            <li><a>Surveillance measure on scrips - June 2025</a></li>
                            <li><a>
                                Offer for sale (OFS) – June 2025</a></li>
                        </ol>
                    </div>
                </div>
        
        </div>
    );
}

export default Hero;