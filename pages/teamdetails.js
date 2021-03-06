import { useContext } from 'react';
import Layout from '../layouts/main';

import TeamDetailsContext from '../context/teamdetails/teamDetailsContext';
import TeamDetailsSection from '../components/Teams/TeamDetailsSection';

const teamdetails = () => {
  const teamDetailsContext = useContext(TeamDetailsContext);
  const { loadingDetails, teamDetails } = teamDetailsContext;
  return (
    <Layout>
      <div className='page_banner'>
        <h5>• TEAM DETAILS •</h5>
      </div>
      {loadingDetails ? (
        <div>Loading...</div>
      ) : (
        <TeamDetailsSection teamDetails={teamDetails} />
      )}
    </Layout>
  );
};

export default teamdetails;
