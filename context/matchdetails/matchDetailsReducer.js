import { MATCH_DETAILS, SET_MATCH_DETAILS_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case MATCH_DETAILS:
      return {
        ...state,
        matchDetails: action.payload,
        loadingMatchDetails: false
      };
    case SET_MATCH_DETAILS_LOADING:
      return {
        ...state,
        loadingMatchDetails: action.payload
      };
    default:
      return state;
  }
};
