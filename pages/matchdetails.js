import { useContext } from 'react';
import Layout from '../layouts/main';

import MatchDetailsContext from '../context/matchdetails/matchDetailsContext';
import MatchDetails from '../components/Match/MatchDetails';

const matchdetails = () => {
  const matchDetailsContext = useContext(MatchDetailsContext);
  const { matchDetails, loadingMatchDetails } = matchDetailsContext;

  return (
    <Layout>
      <div className='page_banner'>
        <h5>• MATCH DETAILS •</h5>
      </div>
      {loadingMatchDetails ? (
        <div>Loading...</div>
      ) : (
        <MatchDetails matchDetails={matchDetails[0][0]} />
      )}
    </Layout>
  );
};

export default matchdetails;
