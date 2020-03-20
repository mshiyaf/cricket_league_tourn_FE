import React from 'react';
import axios from 'axios';
import Layout from '../layouts/main';

const table = ({ teams }) => {
  return (
    <Layout navActive={4}>
      <div className='page_banner'>
        <h5>• POINTS TABLE •</h5>
      </div>
      <section className='schedule-section spad'>
        <div className='left-blog-pad'>
          <div className='points-table'>
            <table>
              <thead>
                <tr>
                  <th className='th-o'>Pos</th>
                  <th>Team</th>
                  <th className='th-o'>P</th>
                  <th className='th-o'>W</th>
                  <th className='th-o'>L</th>
                  <th className='th-o'>PTS</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(each => (
                  <tr>
                    <td>{each.id}</td>
                    <td className='team-name'>
                      <img
                        src={`https://www.countryflags.io/${each.team_code}/flat/64.png`}
                        alt=''
                      />
                      <span>{each.team_name}</span>
                    </td>
                    <td>{each.games_played}</td>
                    <td>2</td>
                    <td>5</td>
                    <td>{each.captain_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

table.getInitialProps = async function() {
  let config = {
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWExMzU2NTUwY2Y4ZjRkM2I5OTMxZTJkNjliOTQyNWVmYTI0YmNhYjMxZDlmZWI1OGNkYWQ4Nzg1ZjBhMGNkZjk3YzAxYTgxMWRiNDJkMmQiLCJpYXQiOjE1ODQ2NDg3MjMsIm5iZiI6MTU4NDY0ODcyMywiZXhwIjoxNjE2MTg0NzIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Dz8jwGPS_xKO-trRWJays5guyAAbQWe3fkDKyHub7UaNia_fJ402SlJRZpbQdVKP5FGjTa-__CgsygOdFNeIbAkh4oBg_Dy9egPf6ZORDfv8DVmsWhvpAPgsvKv1Of0ODJyrbDWL7FcICshG4o-ilLjqM8w3IO1Ao5GTk6y3Dop84N8EeOEuOyiZdHx91NMksYGdKXXBRtVm_aAIvfa8sr-A4ljzrFi8ZyK9C6-zqUAsG94SLwRNk9Z9wc2G0CNCu_sPoiiPVMFMXEBF57tFggi-GBKwLF2dE7wDi6yzX9sjYnoUsBpWizoPEf_ukJNpkaimmDLZ9EeMLevloimPGDJgQNqm8IVoDmmKeEjtn8RPqbgXkGWllpws7ECrFwYos0sINQDcEFIqgZfwM_XNhtmTyMpGMMwCfQTUAAm9iktedgWiZKXO8cGxDGaO15jl69OrEvHF0pxpSrwoT-Ku-_KYwIY5Jsv_VfytLdZzyJRZEo4kjRf15ly9Hbe4Mmtu0nNG3ncSbb1vcC3ZR32ckeUvpK_dex-hnCy_641hKs58PG7RMtuc1CACHbil1kt_47tAk6lWUpiaX397choUz_zlQF5BQhJBPKi3uu8djPcY_Byx7VXU8gq0c6UlUcpKOMLO7uPRprKbiz0cssCSNiZi96OelLMJibDn2HD28xs'
    }
  };
  const res = await axios.get(
    'https://cricket-league-tourn.herokuapp.com/api/v1/teams',
    config
  );
  console.log(res.data);

  return {
    teams: res.data
  };
};

export default table;
