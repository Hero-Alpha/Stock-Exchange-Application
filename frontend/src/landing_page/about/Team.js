import React from 'react';

function Teams() {
    return (
        <div className='container about'>
            <h1 className='text-center'>People</h1>

            <div className='row mt-5 mb-5'>
                <div className='col-5 text-center'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin Kamath'></img>
                    <h5 className='m-4 fw-normal'>Nithin Kamath</h5>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col-7 mb-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='/'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a></p>
                </div>
                <div className='row other-team mt-4 p-3 text-center'>
                    <div className='col-4'>
                        <img src='media/images/Nikhil.jpg' alt='Nikhil Kamath'></img>
                        <h5 className='m-4 fw-normal'>Nikhil Kamath</h5>
                        <p className='text-muted'>Co-founder & CFO</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioNikhil">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioNikhil'>
                            <p className='bio' >Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
                        </div>

                    </div>
                    <div className='col-4'>
                        <img src='media/images/Kailash.jpg' alt='Nikhil Kamath'></img>
                        <h5 className='m-4 fw-normal'>Dr. Kailash Nadh</h5>
                        <p className='text-muted'>CTO</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioKailash">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioKailash'>
                            <p className='bio' >Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
                        </div>

                    </div>
                    <div className='col-4'>
                        <img src='media/images/Venu.jpg' alt='Nikhil Kamath'></img>
                        <h5 className='m-4 fw-normal'>Venu Madhav</h5>
                        <p className='text-muted'>COO</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioVenu">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioVenu'>
                            <p className='bio' >Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
                        </div>

                    </div>

                </div>
                <div className='row other-team mt-4 p-3 text-center'>
                    <div className='col-4'>
                        <img src='media/images/Hanan.jpg' alt='Hanan Delvi'></img>
                        <h5 className='m-4 fw-normal'>Hanan Delvi</h5>
                        <p className='text-muted'>CCO</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioHanan">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioHanan'>
                            <p className='bio' >We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.</p>
                        </div>

                    </div>
                    <div className='col-4'>
                        <img src='media/images/Seema.jpg' alt='Seema Patil'></img>
                        <h5 className='m-4 fw-normal'>Seema Patil</h5>
                        <p className='text-muted'>Director</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioSeema">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioSeema'>
                            <p className='bio' >Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.</p>
                        </div>

                    </div>
                    <div className='col-4'>
                        <img src='media/images/Karthik.jpg' alt='Karthik Rangappa'></img>
                        <h5 className='m-4 fw-normal'>Karthik Rangappa</h5>
                        <p className='text-muted'>Chief of Education</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioKartik">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioKartik'>
                            <p className='bio' >Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.</p>
                        </div>

                    </div>

                </div>
                <div className='row other-team mt-4 p-3 text-center'>
                    <div className='col-4'>
                        <img src='media/images/Austin.jpg' alt='Austin Prakesh'></img>
                        <h5 className='m-4 fw-normal'>Austin Prakesh</h5>
                        <p className='text-muted'>Director Strategy</p>

                        <button className="btn  bio-btn text-muted" data-bs-toggle="collapse" data-bs-target="#bioAustin">
                            Bio <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className='collapse mt-2' id='bioAustin'>
                            <p className='bio' >Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;