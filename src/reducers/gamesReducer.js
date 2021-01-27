import { gameTypes } from './gameTypes';

export const gamesReducer = (
  state = {
    popular: [],
    newest: [],
    upcoming: [],
    searched: [],
    cachedGameData: [],
  },
  { type, payload },
) => {
  switch (type) {
    case gameTypes.FETCH_POPULAR_GAMES:
      return { ...state, popular: payload };
    case gameTypes.FETCH_UPCOMING_GAMES:
      return { ...state, upcoming: payload };
    case gameTypes.FETCH_NEWEST_GAMES:
      return { ...state, newest: payload };
    case gameTypes.CACHE_GAME_DATA:
      return { ...state, cachedGameData: [...state.cachedGameData, payload] };
    default:
      return state;
  }
};
