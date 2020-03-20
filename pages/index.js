import React from 'react';
import Layout from '../layouts/main';
import Link from 'next/link';

const index = () => {
  return (
    <Layout navActive={1}>
      {/* <!-- Hero Section Begin --> */}
      <section className='hero-section set-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='hs-item'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='hs-text'>
                        <h2>CRICKET LEAGUE 2020</h2>
                        <Link href='/matches'>
                          <a className='primary-btn-index'>See Matches</a>
                        </Link>
                        <Link href='/table'>
                          <a className='primary-btn-index'>See Point Table</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}
    </Layout>
  );
};

export default index;
