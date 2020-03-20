import React from 'react';
import { Fragment, useContext, useEffect } from 'react';

import Router from 'next/router';

import TeamDetailsContext from '../../context/teamdetails/teamDetailsContext';
import PlayerDetailsContext from '../../context/playerdetails/playerDetailsContext';

const TeamDetailsSection = ({ teamDetails }) => {
  const teamDetailsContext = useContext(TeamDetailsContext);
  const playerDetailsContext = useContext(PlayerDetailsContext);

  const onClickPlayer = (player, player_id) => {
    console.log(player);
    if (player_id) {
      playerDetailsContext.getPlayerDetails(player_id);
    }

    Router.push('/playerdetails', '/player/' + player).then(() =>
      window.scrollTo(0, 0)
    );
  };

  return (
    <section className='club-section spad'>
      <div className='container'>
        <div className='club-content'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='cc-pic'>
                <img
                  src={`https://www.countryflags.io/${teamDetails[0].team_code}/flat/64.png`}
                  alt=''
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='cc-text'>
                <div className='ct-title'>
                  <h3>{teamDetails[0].team_name}</h3>
                </div>
                <div className='ct-widget'>
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
        <div className='club-tab-list'>
          <div className='row'>
            <div className='col-lg-8 m-auto'>
              {/* <!-- Tab panes --> */}
              <div className='tab-content'>
                <div className='tab-pane active' id='tabs-1' role='tabpanel'>
                  <div className='player-list'>
                    <div className='schedule-text'>
                      <div className='st-table'>
                        <table>
                          <tbody>
                            {teamDetails.map(each => (
                              <tr
                                key={each.id}
                                onClick={() =>
                                  onClickPlayer(each.player_name, each.id)
                                }
                              >
                                <td className='left-team'>
                                  <img src='../img/club/p-1.jpg' alt='' />
                                  <div className='player-list-text'>
                                    {each.player_name}
                                  </div>
                                </td>
                                <td className='st-option'></td>
                                <td className='right-team'>
                                  <div className='player-list-role'>
                                    {each.player_role}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsSection;
