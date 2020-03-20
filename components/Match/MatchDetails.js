import React, { Fragment } from 'react';

const MatchDetails = ({ matchDetails }) => {
  return (
    <section className='schedule-section spad'>
      <div className='left-blog-pad'>
        <div className='schedule-text'>
          {matchDetails.result_id == 1 ? (
            <Fragment>
              <h4 className='st-title'>
                {matchDetails.winner_team[0].team_name} won by{' '}
                {matchDetails.won_by} Runs
              </h4>
              <div className='st-table'>
                <table>
                  <tbody>
                    <tr>
                      <td className='left-team'>
                        <img
                          src={`https://www.countryflags.io/${matchDetails.team_a[0].team_code}/flat/64.png`}
                          alt=''
                        />
                        <h4>{matchDetails.team_a[0].team_name}</h4>
                      </td>
                      <td className='st-option'>
                        <h4>VS</h4>
                      </td>
                      <td className='right-team'>
                        <img
                          src={`https://www.countryflags.io/${matchDetails.team_b[0].team_code}/flat/64.png`}
                          alt=''
                        />
                        <h4>{matchDetails.team_b[0].team_name}</h4>
                      </td>
                    </tr>

                    <tr>
                      <td className='left-team'>
                        <h4 style={{ fontSize: '20px' }}>Venue</h4>
                      </td>
                      <td className='st-option'></td>
                      <td className='right-team'>
                        <div className='so-text'>{matchDetails.venue_name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className='left-team'>
                        <h4 style={{ 'font-size': '20px' }}>Date</h4>
                      </td>
                      <td className='st-option'></td>
                      <td className='right-team'>
                        <div className='so-text'>{matchDetails.match_date}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className='left-team'>
                        <h4 style={{ 'font-size': '20px' }}>Toss</h4>
                      </td>
                      <td className='st-option'></td>
                      <td className='right-team'>
                        <div className='so-text'>
                          {matchDetails.toss_choice} by{' '}
                          {matchDetails.toss_win_team[0].team_name}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='points-table'>
                <table>
                  <thead>
                    <tr>
                      <th className='th-o'>Pos</th>
                      <th>Team</th>
                      <th className='th-o'>Runs</th>
                      <th className='th-o'>Wickets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className='team-name'>
                        <span>{matchDetails.winner_team[0].team_name}</span>
                      </td>
                      <td>{matchDetails.winner_runs}</td>
                      <td>{matchDetails.winner_wicket}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className='team-name'>
                        <span>{matchDetails.loser_team[0].team_name}</span>
                      </td>
                      <td>{matchDetails.loser_runs}</td>
                      <td>{matchDetails.loser_wicket}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h4 className='st-title'>Match on {matchDetails.match_date}</h4>
              <div className='st-table'>
                <table>
                  <tbody>
                    <tr>
                      <td className='left-team'>
                        <img
                          src={`https://www.countryflags.io/${matchDetails.team_a[0].team_code}/flat/64.png`}
                          alt=''
                        />
                        <h4>{matchDetails.team_a[0].team_name}</h4>
                      </td>
                      <td className='st-option'>
                        <h4>VS</h4>
                      </td>
                      <td className='right-team'>
                        <img
                          src={`https://www.countryflags.io/${matchDetails.team_b[0].team_code}/flat/64.png`}
                          alt=''
                        />
                        <h4>{matchDetails.team_b[0].team_name}</h4>
                      </td>
                    </tr>

                    <tr>
                      <td className='left-team'>
                        <h4 style={{ fontSize: '20px' }}>Venue</h4>
                      </td>
                      <td className='st-option'></td>
                      <td className='right-team'>
                        <div className='so-text'>{matchDetails.venue_name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className='left-team'>
                        <h4 style={{ 'font-size': '20px' }}>Date</h4>
                      </td>
                      <td className='st-option'></td>
                      <td className='right-team'>
                        <div className='so-text'>{matchDetails.match_date}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default MatchDetails;
