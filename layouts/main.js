import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const main = ({ children, navActive }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Specer Template' />
        <meta name='keywords' content='Specer, unica, creative, html' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Cricket League Tournment</title>

        {/* <!-- Google Font --> */}
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap'
          rel='stylesheet'
        />

        {/* <!-- Css Styles --> */}
        <link
          rel='stylesheet'
          href='../css/bootstrap.min.css'
          type='text/css'
        />
        <link
          rel='stylesheet'
          href='../css/font-awesome.min.css'
          type='text/css'
        />
        <link
          rel='stylesheet'
          href='../css/owl.carousel.min.css'
          type='text/css'
        />
        <link
          rel='stylesheet'
          href='../css/magnific-popup.css'
          type='text/css'
        />
        <link rel='stylesheet' href='../css/slicknav.min.css' type='text/css' />
        <link rel='stylesheet' href='../css/style.css' type='text/css' />
      </Head>
      <Header navActive={navActive} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default main;
