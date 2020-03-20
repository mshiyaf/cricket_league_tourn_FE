import React from 'react';

const PlayerDetails = ({ playerDetails }) => {
  return (
    <section className='club-section spad'>
      <div className='container'>
        <div className='club-content'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='cc-pic'>
                <img src='../img/virat.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='cc-text'>
                <div className='ct-title'>
                  <h3>{playerDetails[0].player_name}</h3>
                </div>
                <div className='ct-widget'>
                  <ul>
                    <li>
                      <h5>Age </h5>
                      <p>{playerDetails[0].player_age}</p>
                    </li>
                    <li>
                      <h5>Team </h5>
                      <p>{playerDetails[0].team_name}</p>
                    </li>
                    <li>
                      <h5>Role</h5>
                      <p>{playerDetails[0].player_role}</p>
                    </li>
                    <li>
                      <h5>Style</h5>
                      <p>{playerDetails[0].player_batting_style}</p>
                      <p>{playerDetails[0].player_bowling_style}</p>
                    </li>
                    <li>
                      <h5>Rating</h5>
                      {/* <p>{teamDetails[0].team_name}</p> */}
                    </li>
                    <li>
                      <h5>Social</h5>
                      <div className='cw-social'>
                        <a href='#'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a href='#'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href='#'>
                          <i className='fa fa-youtube-play'></i>
                        </a>
                        <a href='#'>
                          <i className='fa fa-google'></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerDetails;
