import TeamDetailsState from '../context/teamdetails/TeamDetailsState';
import PlayerDetailsContext from '../context/playerdetails/PlayerDetailsState';
import MatchDetailsState from '../context/matchdetails/MatchDetailsState';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <TeamDetailsState>
      <PlayerDetailsContext>
        <MatchDetailsState>
          <Component {...pageProps} />
        </MatchDetailsState>
      </PlayerDetailsContext>
    </TeamDetailsState>
  );
}
