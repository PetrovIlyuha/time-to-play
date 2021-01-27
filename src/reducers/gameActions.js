import axios from 'axios';

import {
  getGameDetails,
  new_games,
  popular_games,
  upcoming_games,
} from '../api';
import { gameTypes } from './gameTypes';

export const fetchPopularGames = () => async dispatch => {
  const response = await axios.get(popular_games);
  const games = await response.data.results;
  dispatch({ type: gameTypes.FETCH_POPULAR_GAMES, payload: games });
};

export const fetchUpcomingGames = () => async dispatch => {
  const response = await axios.get(upcoming_games);
  const games = await response.data.results;
  dispatch({ type: gameTypes.FETCH_UPCOMING_GAMES, payload: games });
};

export const fetchNewestGames = () => async dispatch => {
  const response = await axios.get(new_games);
  const games = await response.data.results;
  dispatch({ type: gameTypes.FETCH_NEWEST_GAMES, payload: games });
};

export const saveGameDetails = id => async dispatch => {
  const response = await axios.get(getGameDetails(id));
  const game = await response.data;
  dispatch({ type: gameTypes.CACHE_GAME_DATA, payload: game });
};

export const getAllGameResources = () => {
  fetchNewestGames();
  fetchPopularGames();
  fetchUpcomingGames();
};
