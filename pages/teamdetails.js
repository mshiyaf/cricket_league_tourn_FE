import React, { useContext } from 'react';
import Layout from '../layouts/main';

import TeamDetailsContext from '../context/teamdetails/teamDetailsContext';

const teamdetails = () => {
  const teamDetailsContext = useContext(TeamDetailsContext);
  const { loadingDetails, teamDetails } = teamDetailsContext;
  return (
    <Layout>
      {loadingDetails ? (
        <div>Loading...</div>
      ) : (
        <section class='club-section spad'>
          <div class='container'>
            <div class='club-content'>
              <div class='row'>
                <div class='col-lg-5'>
                  <div class='cc-pic'>
                    <img
                      src={`https://www.countryflags.io/${teamDetails[0].team_code}/flat/64.png`}
                      alt=''
                    />
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='cc-text'>
                    <div class='ct-title'>
                      <h3>{teamDetails[0].team_name}</h3>
                    </div>
                    <div class='ct-widget'>
                      <ul>
                        <li>
                          <h5>Cups Won</h5>
                          <p>{teamDetails[0].cups_won}</p>
                        </li>
                        <li>
                          <h5>Captain</h5>
                          <p>{teamDetails[0].captain}</p>
                        </li>
                        <li>
                          <h5>Total Matches</h5>
                          <p>{teamDetails[0].games_played}</p>
                        </li>
                        <li>
                          <h5>Location</h5>
                          <p>{teamDetails[0].team_name}</p>
                        </li>
                        <li>
                          <h5>Social</h5>
                          <div class='cw-social'>
                            <a href='#'>
                              <i class='fa fa-facebook'></i>
                            </a>
                            <a href='#'>
                              <i class='fa fa-twitter'></i>
                            </a>
                            <a href='#'>
                              <i class='fa fa-youtube-play'></i>
                            </a>
                            <a href='#'>
                              <i class='fa fa-google'></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='club-tab-list'>
              <div class='row'>
                <div class='col-lg-8 m-auto'>
                  {/* <!-- Tab panes --> */}
                  <div class='tab-content'>
                    <div class='tab-pane active' id='tabs-1' role='tabpanel'>
                      <div class='club-tab-content'>
                        {teamDetails.map(each => (
                          <div class='ct-item'>
                            <div class='ci-text'>
                              <img src='../img/club/p-1.jpg' alt='' />
                              <h5>{each.player_name}</h5>
                            </div>
                            <div class='ci-name'>{each.player_role}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default teamdetails;
