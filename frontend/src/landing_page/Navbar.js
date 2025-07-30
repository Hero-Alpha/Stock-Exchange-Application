import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{ borderBottom: '1px solid rgb(229, 227, 227)', backgroundColor: 'white' }}>
            <div class="container-fluid pt-2 pb-2">
                <Link class="navbar-brand" to='/'>
                    <img src='media/images/logo.svg' alt='zerodha logo' style={{ width: '26%', marginLeft:'60px' }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mt-3 mb-2 mb-lg-0 ms-auto text-end">
                        <li className="nav-item">
                            <Link className="nav-link text-muted" to='/signup'>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/pricing'>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/support'>Support</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;