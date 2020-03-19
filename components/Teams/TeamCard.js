import { Fragment, useContext, useEffect } from 'react';
import Router from 'next/router';

import TeamDetailsContext from '../../context/teamdetails/teamDetailsContext';

const TeamCard = ({ team }) => {
  const teamDetailsContext = useContext(TeamDetailsContext);
  //   const router = useRouter();

  const onClickTeam = team_name => {
    console.log(team_name);
    if (team_name) {
      teamDetailsContext.getTeamDetails(team_name);
    }
    // teamDetailsContext.getTeamDetails(team_name);

    console.log(teamDetailsContext.teamDetails);
    Router.push('/teamdetails', '/teamdetails/' + team_name);
  };

  return (
    <Fragment>
      <div className='col-xs-12 col-sm-6 col-md-4'>
        <div className='card team-card'>
          <div className='card-body text-center'>
            <p>
              <img
                className=' img-fluid'
                src={`https://www.countryflags.io/${team.team_code}/flat/64.png`}
                alt='card image'
              />
            </p>
            <h4 className='card-title'>{team.team_name}</h4>
            <a
              className='primary-btn-teams'
              onClick={() => onClickTeam(team.team_name)}
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamCard;
