import React from 'react';
function CreateTicket() {
    return (
        <div className='container-fluid mt-5 mb-5 m-2 support'>
            <h4 className='text-muted'>To create a ticket, select a relevant topic</h4>
            <div className='row m-2 mt-4'>
                <div className='col-12 col-md-4 mt-4 mb-2 '>
                    <h4 className='mt-3 mb-3'><i class="fa-solid fa-circle-plus"></i>Account Opening</h4>
                    <ul>
                        <li><a href='#'>Resident individual</a></li>
                        <li><a href='#'>Minor</a></li>
                        <li><a href='#'>Non Resident India (NRI)</a></li>
                        <li><a href='#'>Company, Partnership, HUF and LLP</a></li>
                        <li><a href='#'>Glossary</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md-4 mt-4 mb-2'>
                    <h4><i class="fa-regular fa-user"></i>Your Zerodha Account</h4>
                    <ul>
                        <li><a href='#'>Your Profile</a></li>
                        <li><a href='#'>Account modification</a></li>
                        <li><a href='#'>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href='#'>Nomination</a></li>
                        <li><a href='#'>Transfer and conversion of securities</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md-4 mt-4'>
                    <h4><i class="fa-regular fa-chart-bar"></i>Kite</h4>
                    <ul>
                        <li><a href='#'>IPO</a></li>
                        <li><a href='#'>Trading FAQs</a></li>
                        <li><a href='#'>Margin Trading Facility (MTF) and Margins</a></li>
                        <li><a href='#'>Charts and orders</a></li>
                        <li><a href='#'>Alerts and Nudges</a></li>
                        <li><a href='#'>General</a></li>
                    </ul>
                </div>
                
            </div>
            <div className='row m-2 mb-5'>
                <div className='col-12 col-md-4 mt-4 mb-2'>
                    <h4><i class="fa-solid fa-wallet"></i>Funds</h4>
                    <ul>
                        <li><a href='#'>Add money</a></li>
                        <li><a href='#'>Withdraw money</a></li>
                        <li><a href='#'>Add bank accounts</a></li>
                        <li><a href='#'>eMandates</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md-4 mt-4 mb-2'>
                    <h4><i class="fa-solid fa-circle-notch"></i>Console</h4>
                    <ul>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Conrporate actions</a></li>
                        <li><a href='#'>Funds statement</a></li>
                        <li><a href='#'>Reports</a></li>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Segments</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md-4 mt-4 mb-2'>
                    <h4><i class="fa-solid fa-coins"></i>Coin</h4>
                    <ul>
                        <li><a href='#'>Mutual funds</a></li>
                        <li><a href='#'>National Pension Scheme (NPS)</a></li>
                        <li><a href='#'>Features on Coin</a></li>
                        <li><a href='#'>Payments and Orders</a></li>
                        <li><a href='#'>General</a></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
}

export default CreateTicket;