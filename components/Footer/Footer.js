import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <React.Fragment>
      {/* <!-- Footer Section Begin --> */}
      <footer className='footer-section set-bg-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='fs-logo'>
                <div className='logo'>
                  <Link href='/'>
                    <a>
                      <img src='../img/logo.png' alt='' />
                    </a>
                  </Link>
                </div>
                <ul>
                  <li>
                    <i className='fa fa-envelope'></i> mshiyaf@gmail.com
                  </li>
                  <li>
                    <i className='fa fa-copy'></i> +(91) 12345 67890
                  </li>
                  <li>
                    <i className='fa fa-thumb-tack'></i> 9 Kodinji Sreet 676306
                    Chemmad Tirurangadi City, Malappuram
                  </li>
                </ul>
                <div className='fs-social'>
                  <a href='#'>
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-tumblr'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 offset-lg-1'>
              <div className='fs-widget'>
                <h4>Top Teams</h4>
                <ul className='fw-links'>
                  <li>
                    <Link href='/teams/India'>
                      <a>India</a>
                    </Link>
                  </li>
                  <li>
                    <a href='/teams/Pakistan'>Pakistan</a>
                  </li>

                  <li>
                    <a href='/teams/Australia'>Australia</a>
                  </li>
                  <li>
                    <a href='/teams/Zimbawe'>Zimbawe</a>
                  </li>
                </ul>
                <ul className='fw-links'>
                  <li>
                    <a href='/teams/Netherlands'>Netherlands</a>
                  </li>
                  <li>
                    <a href='/teams/Hungary'>Hungary</a>
                  </li>
                  <li>
                    <a href='#'>South Africa</a>
                  </li>
                  <li>
                    <a href='#'>Bangladesh</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='fs-widget'>
                <h4>Recent News</h4>

                <div className='fw-item'>
                  <h5>
                    <a href='#'>
                      England win shows they have the spark to go far at World
                      Cup
                    </a>
                  </h5>
                  <ul>
                    <li>
                      <i className='fa fa-calendar'></i> May 19, 2019
                    </li>
                    <li>
                      <i className='fa fa-edit'></i> 3 Comment
                    </li>
                  </ul>
                </div>
                <div className='fw-item'>
                  <h5>
                    <a href='#'>
                      Sri Lanka v Australia: Cricket World Cup 2019 – live!
                    </a>
                  </h5>
                  <ul>
                    <li>
                      <i className='fa fa-calendar'></i> May 19, 2019
                    </li>
                    <li>
                      <i className='fa fa-edit'></i> 3 Comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </React.Fragment>
  );
};

export default Footer;
