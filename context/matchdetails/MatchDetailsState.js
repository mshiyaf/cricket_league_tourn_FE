import React, { useReducer } from 'react';
import MatchDetailsContext from './matchDetailsContext';
import matchDetailsReducer from './matchDetailsReducer';
import { MATCH_DETAILS, SET_MATCH_DETAILS_LOADING } from '../types';

const MatchDetailsState = props => {
  const initialState = {
    matchDetails: {},
    loadingMatchDetails: true
  };
  const [state, dispatch] = useReducer(matchDetailsReducer, initialState);

  const setMatchDetails = value => {
    console.log(value);
    setLoadingMatchDetails(false);
    dispatch({ type: MATCH_DETAILS, payload: value });
  };

  const setLoadingMatchDetails = value => {
    dispatch({ type: SET_MATCH_DETAILS_LOADING, payload: value });
  };

  return (
    <MatchDetailsContext.Provider
      value={{
        matchDetails: state.matchDetails,
        loadingMatchDetails: state.loadingMatchDetails,
        setMatchDetails
      }}
    >
      {props.children}
    </MatchDetailsContext.Provider>
  );
};
export default MatchDetailsState;
