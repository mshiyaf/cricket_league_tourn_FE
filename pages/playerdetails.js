import { useContext } from 'react';
import Layout from '../layouts/main';

import PlayerDetailsContext from '../context/playerdetails/playerDetailsContext';
import PlayerDetails from '../components/Player/PlayerDetails';

const playerdetails = () => {
  const playerDetailsContext = useContext(PlayerDetailsContext);
  const { loadingPlayerDetails, playerDetails } = playerDetailsContext;
  return (
    <Layout>
      <div className='page_banner'>
        <h5>• PLAYER DETAILS •</h5>
      </div>
      {loadingPlayerDetails ? (
        <div>Loading...</div>
      ) : playerDetails ? (
        playerDetails.length ? (
          <PlayerDetails playerDetails={playerDetails} />
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default playerdetails;
