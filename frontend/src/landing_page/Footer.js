import React from 'react'; 

function Footer() {
    return (
        <div className=' mt-5 p-5 navbar-expand-lg bg-body-tertiary' style={{ borderTop: '1px solid rgb(229, 227, 227)', backgroundColor:'#fbfbfb'}}>
            <div className='row'>
                <div className='col-3 p-2 text-muted'>
                    <img src='media/images/logo.svg' alt='zerodha logo' style={{ width: '77%', marginBottom: '1rem' }} />
                    <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p>All rights reserved.</p>
                    <div className="d-flex flex-nowrap gap-3 mt-2">
                        <i className="fa-brands fa-x-twitter footer-icons"></i>
                        <i className="fa-brands fa-square-facebook footer-icons"></i>
                        <i className="fa-brands fa-instagram footer-icons"></i>
                        <i className="fa-brands fa-linkedin-in footer-icons"></i>
                    </div>
                    <hr style={{ height: '1px', color: 'rgb(145, 145, 145)' }} />
                    <div className="d-flex flex-nowrap gap-3 mt-2">
                        <i className="fa-brands fa-youtube footer-icons"></i>
                        <i className="fa-brands fa-whatsapp footer-icons"></i>
                        <i className="fa-brands fa-telegram footer-icons"></i>
                    </div>

                </div>
                <div className='col-3 p-2'>
                    <h4>Company</h4>
                    <ul className='text-muted footer-links' style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Products</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Referral programme</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Zerodha.tech</a></li>
                        <li><a href='#'>Open source</a></li>
                        <li><a href='#'>Press & media</a></li>
                        <li><a href='#'>Zerodha Cares &#40;CSR&#41;</a></li>
                    </ul>
                </div>
                <div className='col-3 p-2'>
                    <h4>Support</h4>
                    <ul className='text-muted footer-links' style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Support portal</a></li>
                        <li><a href='#'>Z-connect blog</a></li>
                        <li><a href='#'>List of charges</a></li>
                        <li><a href='#'>Downloads & resources</a></li>
                        <li><a href='#'>Videos</a></li>
                        <li><a href='#'>Market overview</a></li>
                        <li><a href='#'>How to file a complaint?</a></li>
                        <li><a href='#'>Status of your complaints</a></li>
                    </ul>
                </div>
                <div className='col-3 p-2'>
                    <h4>Account</h4>
                    <ul className='text-muted footer-links' style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li><a href='#'>Open an Account</a></li>
                        <li><a href='#'>Fund transfer</a></li>
                    </ul>
                </div>
                <div className='row last-footer-para mt-5'>
                    <p style={{fontSize:'.6rem', fontFamily: "Inter"}} className='text-muted'>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''>complaints@zerodha.com</a>, for DP related to <a href=''>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br/><br/>

                        Procedure to file a complaint on <a href=' '>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br/><br/>

                        <a href='' >Smart Online Dispute Resolution | Grievances Redressal Mechanism</a><br/><br/>

                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.

                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary &#40;broker, DP, Mutual Fund etc.&#41;, you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=' '>create a ticket here</a>.
                    </p>
                </div>
                <div className='text-center text-muted footer-links-two'>
                    <a href=' '>NSE</a>
                    <a href=' '>BSE</a>
                    <a href=' '>Terms & conditions</a>
                    <a href=' '>Policies & procedures</a>
                    <a href=' '>Privacy policy</a>
                    <a href=' '>Disclosure</a>
                    <a href=' '>For investor's attention</a>
                    <a href=' '>Investor charter</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;