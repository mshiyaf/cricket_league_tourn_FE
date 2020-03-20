import { Fragment, useState } from 'react';
import Link from 'next/link';

const Header = props => {
  const [navActive, setNavActive] = useState(props.navActive);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onClickMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const onClickMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Fragment>
      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div
        className={`offcanvas-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
      ></div>
      <div
        className={`offcanvas-menu-wrapper ${
          mobileMenuOpen ? 'show-offcanvas-menu-wrapper' : ''
        } `}
      >
        <div className='canvas-close' onClick={onClickMobileMenuClose}>
          <i className='fa fa-close'></i>
        </div>
        <div className='header__top--canvas'>
          <div className='ht-info'>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/teams'>
                  <a>Teams</a>
                </Link>
              </li>
              <li>
                <Link href='/matches'>
                  <a>Matches</a>
                </Link>
              </li>
              <li>
                <Link href='/table'>
                  <a>Points Table</a>
                </Link>
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
                  <Link href='/'>
                    <a>
                      <img src='../img/logo.png' alt='' />
                    </a>
                  </Link>
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
            <div className='canvas-open' onClick={onClickMobileMenu}>
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
