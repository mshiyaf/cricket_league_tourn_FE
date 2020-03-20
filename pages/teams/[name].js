import { useContext } from 'react';
import Layout from '../../layouts/main';
import axios from 'axios';
import Router from 'next/router';

import TeamDetailsContext from '../../context/teamdetails/teamDetailsContext';
import PlayerDetailsContext from '../../context/playerdetails/playerDetailsContext';

const TeamDetailsDirect = ({ teamDetails }) => {
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
    <Layout>
      <div className='page_banner'>
        <h5>• TEAM DETAILS •</h5>
      </div>
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
    </Layout>
  );
};

TeamDetailsDirect.getInitialProps = async function(ctx) {
  const country = ctx.query.name;
  let config = {
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWExMzU2NTUwY2Y4ZjRkM2I5OTMxZTJkNjliOTQyNWVmYTI0YmNhYjMxZDlmZWI1OGNkYWQ4Nzg1ZjBhMGNkZjk3YzAxYTgxMWRiNDJkMmQiLCJpYXQiOjE1ODQ2NDg3MjMsIm5iZiI6MTU4NDY0ODcyMywiZXhwIjoxNjE2MTg0NzIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Dz8jwGPS_xKO-trRWJays5guyAAbQWe3fkDKyHub7UaNia_fJ402SlJRZpbQdVKP5FGjTa-__CgsygOdFNeIbAkh4oBg_Dy9egPf6ZORDfv8DVmsWhvpAPgsvKv1Of0ODJyrbDWL7FcICshG4o-ilLjqM8w3IO1Ao5GTk6y3Dop84N8EeOEuOyiZdHx91NMksYGdKXXBRtVm_aAIvfa8sr-A4ljzrFi8ZyK9C6-zqUAsG94SLwRNk9Z9wc2G0CNCu_sPoiiPVMFMXEBF57tFggi-GBKwLF2dE7wDi6yzX9sjYnoUsBpWizoPEf_ukJNpkaimmDLZ9EeMLevloimPGDJgQNqm8IVoDmmKeEjtn8RPqbgXkGWllpws7ECrFwYos0sINQDcEFIqgZfwM_XNhtmTyMpGMMwCfQTUAAm9iktedgWiZKXO8cGxDGaO15jl69OrEvHF0pxpSrwoT-Ku-_KYwIY5Jsv_VfytLdZzyJRZEo4kjRf15ly9Hbe4Mmtu0nNG3ncSbb1vcC3ZR32ckeUvpK_dex-hnCy_641hKs58PG7RMtuc1CACHbil1kt_47tAk6lWUpiaX397choUz_zlQF5BQhJBPKi3uu8djPcY_Byx7VXU8gq0c6UlUcpKOMLO7uPRprKbiz0cssCSNiZi96OelLMJibDn2HD28xs'
    }
  };
  const res = await axios.get(
    `http://cricket_tourn_backend.test/api/v1/team/${country}`,
    config
  );

  return { teamDetails: res.data };
};

export default TeamDetailsDirect;
