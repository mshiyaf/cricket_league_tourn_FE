import { useContext } from 'react';
import Router from 'next/router';
import axios from 'axios';
import Layout from '../layouts/main';

import MatchDetailsContext from '../context/matchdetails/matchDetailsContext';

const matches = ({ matches }) => {
  const matchDetailsContext = useContext(MatchDetailsContext);

  const onClickMatch = match_id => {
    matchDetailsContext.setMatchDetails(
      matches.map(each => each.filter(each => each.id == match_id))
    );
    Router.push('/matchdetails', '/matches/' + match_id).then(() =>
      window.scrollTo(0, 0)
    );
  };
  return (
    <Layout navActive={3}>
      <div className='page_banner'>
        <h5>• MATCHES •</h5>
      </div>
      <section className='schedule-section spad'>
        <div className='left-blog-pad'>
          <div className='schedule-text'>
            <h4 className='st-title'>Cricket League 2020</h4>
            <div className='st-table'>
              <table>
                <tbody>
                  {matches.map(each =>
                    each.map(each => (
                      <tr
                        key={each.id}
                        onClick={() => {
                          onClickMatch(each.id);
                        }}
                      >
                        <td className='left-team'>
                          <img
                            src={`https://www.countryflags.io/${each.team_a[0].team_code}/flat/64.png`}
                            alt=''
                          />
                          <h4>{each.team_a[0].team_name}</h4>
                        </td>
                        <td className='st-option'>
                          <div className='so-text'>{each.venue_name}</div>
                          <h4>VS</h4>
                          <div className='so-text'>{each.match_date}</div>
                        </td>
                        <td className='right-team'>
                          <img
                            src={`https://www.countryflags.io/${each.team_b[0].team_code}/flat/64.png`}
                            alt=''
                          />
                          <h4>{each.team_b[0].team_name}</h4>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

matches.getInitialProps = async function() {
  let config = {
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWExMzU2NTUwY2Y4ZjRkM2I5OTMxZTJkNjliOTQyNWVmYTI0YmNhYjMxZDlmZWI1OGNkYWQ4Nzg1ZjBhMGNkZjk3YzAxYTgxMWRiNDJkMmQiLCJpYXQiOjE1ODQ2NDg3MjMsIm5iZiI6MTU4NDY0ODcyMywiZXhwIjoxNjE2MTg0NzIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Dz8jwGPS_xKO-trRWJays5guyAAbQWe3fkDKyHub7UaNia_fJ402SlJRZpbQdVKP5FGjTa-__CgsygOdFNeIbAkh4oBg_Dy9egPf6ZORDfv8DVmsWhvpAPgsvKv1Of0ODJyrbDWL7FcICshG4o-ilLjqM8w3IO1Ao5GTk6y3Dop84N8EeOEuOyiZdHx91NMksYGdKXXBRtVm_aAIvfa8sr-A4ljzrFi8ZyK9C6-zqUAsG94SLwRNk9Z9wc2G0CNCu_sPoiiPVMFMXEBF57tFggi-GBKwLF2dE7wDi6yzX9sjYnoUsBpWizoPEf_ukJNpkaimmDLZ9EeMLevloimPGDJgQNqm8IVoDmmKeEjtn8RPqbgXkGWllpws7ECrFwYos0sINQDcEFIqgZfwM_XNhtmTyMpGMMwCfQTUAAm9iktedgWiZKXO8cGxDGaO15jl69OrEvHF0pxpSrwoT-Ku-_KYwIY5Jsv_VfytLdZzyJRZEo4kjRf15ly9Hbe4Mmtu0nNG3ncSbb1vcC3ZR32ckeUvpK_dex-hnCy_641hKs58PG7RMtuc1CACHbil1kt_47tAk6lWUpiaX397choUz_zlQF5BQhJBPKi3uu8djPcY_Byx7VXU8gq0c6UlUcpKOMLO7uPRprKbiz0cssCSNiZi96OelLMJibDn2HD28xs'
    }
  };
  const res = await axios.get(
    'http://cricket_tourn_backend.test/api/v1/matches',
    config
  );

  return {
    matches: res.data
  };
};

export default matches;
