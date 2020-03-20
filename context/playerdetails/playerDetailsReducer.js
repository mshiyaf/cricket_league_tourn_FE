import { PLAYER_DETAILS, SET_PLAYER_DETAILS_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case PLAYER_DETAILS:
      return {
        ...state,
        playerDetails: action.payload,
        loadingPlayerDetails: false
      };
    case SET_PLAYER_DETAILS_LOADING:
      return {
        ...state,
        loadingPlayerDetails: action.payload
      };
    default:
      return state;
  }
};
