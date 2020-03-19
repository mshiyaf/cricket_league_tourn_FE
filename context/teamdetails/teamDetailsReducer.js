import { TEAM_DETAILS, SET_TEAM_DETAILS_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TEAM_DETAILS:
      return {
        ...state,
        teamDetails: action.payload,
        loadingDetails: false
      };
    case SET_TEAM_DETAILS_LOADING:
      return {
        ...state,
        loadingDetails: action.payload
      };
    default:
      return state;
  }
};
