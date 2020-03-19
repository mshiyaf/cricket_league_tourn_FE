import { Fragment, useState } from 'react';
import Link from 'next/link';

const Header = props => {
  const [navActive, setNavActive] = useState(props.navActive);

  return (
    <Fragment>
      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div className='offcanvas-menu-overlay'></div>
      <div className='offcanvas-menu-wrapper'>
        <div className='canvas-close'>
          <i className='fa fa-close'></i>
        </div>
        <div className='search-btn search-switch'>
          <i className='fa fa-search'></i>
        </div>
        <div className='header__top--canvas'>
          <div className='ht-info'>
            <ul>
              <li>20:00 - May 19, 2019</li>
              <li>
                <a href='#'>Sign in</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='ht-links'>
            <a href='#'>
              <i className='fa fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fa fa-vimeo'></i>
            </a>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fa fa-google-plus'></i>
            </a>
            <a href='#'>
              <i className='fa fa-instagram'></i>
            </a>
          </div>
        </div>
        <ul className='main-menu mobile-menu'>
          <li className='active'>
            <a href='./index.html'>Home</a>
          </li>
          <li>
            <a href='./club.html'>Club</a>
          </li>
          <li>
            <a href='./schedule.html'>Schedule</a>
          </li>
          <li>
            <a href='./result.html'>Results</a>
          </li>
          <li>
            <a href='#'>Sport</a>
          </li>
          <li>
            <a href='#'>Pages</a>
            <ul className='dropdown'>
              <li>
                <a href='./blog.html'>Blog</a>
              </li>
              <li>
                <a href='./blog-details.html'>Blog Details</a>
              </li>
              <li>
                <a href='#'>Schedule</a>
              </li>
              <li>
                <a href='#'>Results</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='./contact.html'>Contact Us</a>
          </li>
        </ul>
        <div id='mobile-menu-wrap'></div>
      </div>
      {/* <!-- Offcanvas Menu Section End --> */}
      {/* <!-- Header Section Begin --> */}
      <header className='header-section'>
        <div className='header__nav'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2'>
                <div className='logo'>
                  <a href='./index.html'>
                    <img src='../img/logo.png' alt='' />
                  </a>
                </div>
              </div>
              <div className='col-lg-10'>
                <div className='nav-menu'>
                  <ul className='main-menu'>
                    <li
                      onClick={() => {
                        setNavActive(1);
                      }}
                      className={navActive == 1 ? 'active' : ''}
                    >
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        setNavActive(2);
                      }}
                      className={navActive == 2 ? 'active' : ''}
                    >
                      <Link href='/teams'>
                        <a>Teams</a>
                      </Link>
                    </li>
                    <li className={navActive == 3 ? 'active' : ''}>
                      <Link href='/matches'>
                        <a>Matches</a>
                      </Link>
                    </li>

                    <li className={navActive == 4 ? 'active' : ''}>
                      <Link href='/table'>
                        <a>Point Table</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='canvas-open'>
              <i className='fa fa-bars'></i>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </Fragment>
  );
};

export default Header;
