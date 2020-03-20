import React, { useReducer } from 'react';
import axios from 'axios';
import TeamDetailsContext from './teamDetailsContext';
import teamDetailsReducer from './teamDetailsReducer';
import { TEAM_DETAILS, SET_TEAM_DETAILS_LOADING } from '../types';

const TeamDetailsState = props => {
  const initialState = {
    teamDetails: {},
    loadingDetails: false
  };
  const [state, dispatch] = useReducer(teamDetailsReducer, initialState);

  //
  const getTeamDetails = async teamName => {
    setLoadingDetails(true);
    let config = {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWExMzU2NTUwY2Y4ZjRkM2I5OTMxZTJkNjliOTQyNWVmYTI0YmNhYjMxZDlmZWI1OGNkYWQ4Nzg1ZjBhMGNkZjk3YzAxYTgxMWRiNDJkMmQiLCJpYXQiOjE1ODQ2NDg3MjMsIm5iZiI6MTU4NDY0ODcyMywiZXhwIjoxNjE2MTg0NzIzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Dz8jwGPS_xKO-trRWJays5guyAAbQWe3fkDKyHub7UaNia_fJ402SlJRZpbQdVKP5FGjTa-__CgsygOdFNeIbAkh4oBg_Dy9egPf6ZORDfv8DVmsWhvpAPgsvKv1Of0ODJyrbDWL7FcICshG4o-ilLjqM8w3IO1Ao5GTk6y3Dop84N8EeOEuOyiZdHx91NMksYGdKXXBRtVm_aAIvfa8sr-A4ljzrFi8ZyK9C6-zqUAsG94SLwRNk9Z9wc2G0CNCu_sPoiiPVMFMXEBF57tFggi-GBKwLF2dE7wDi6yzX9sjYnoUsBpWizoPEf_ukJNpkaimmDLZ9EeMLevloimPGDJgQNqm8IVoDmmKeEjtn8RPqbgXkGWllpws7ECrFwYos0sINQDcEFIqgZfwM_XNhtmTyMpGMMwCfQTUAAm9iktedgWiZKXO8cGxDGaO15jl69OrEvHF0pxpSrwoT-Ku-_KYwIY5Jsv_VfytLdZzyJRZEo4kjRf15ly9Hbe4Mmtu0nNG3ncSbb1vcC3ZR32ckeUvpK_dex-hnCy_641hKs58PG7RMtuc1CACHbil1kt_47tAk6lWUpiaX397choUz_zlQF5BQhJBPKi3uu8djPcY_Byx7VXU8gq0c6UlUcpKOMLO7uPRprKbiz0cssCSNiZi96OelLMJibDn2HD28xs'
      }
    };
    const res = await axios.get(
      `https://cricket-league-tourn.herokuapp.com/api/v1/team/${teamName}`,
      config
    );

    dispatch({
      type: TEAM_DETAILS,
      payload: res.data
    });
  };

  const setLoadingDetails = value => {
    dispatch({ type: SET_TEAM_DETAILS_LOADING, payload: value });
  };

  return (
    <TeamDetailsContext.Provider
      value={{
        teamDetails: state.teamDetails,
        loadingDetails: state.loadingDetails,
        getTeamDetails
      }}
    >
      {props.children}
    </TeamDetailsContext.Provider>
  );
};
export default TeamDetailsState;
