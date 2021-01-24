// base url
const base_url = 'https://api.rawg.io/api';

const current_year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const current_month_formatted = month < 10 ? `0${month}` : month;
const day = new Date().getDate();
const current_day = day < 10 ? `0${day}` : day;
const current_date = `${current_year}-${current_month_formatted}-${current_day}`;
const last_year = `${
  current_year - 1
}-${current_month_formatted}-${current_day}`;
const next_year = `${
  current_year + 1
}-${current_month_formatted}-${current_day}`;

// * api endpoints
export const popular_games = `${base_url}/games?dates=${last_year},${current_date}&ordering=-rating&page_size=10`;
export const new_games = `${base_url}/games?dates=${last_year},${current_date}&ordering=-released&page_size=10`;
export const upcoming_games = `${base_url}/games?dates=${current_date},${next_year}&ordering=-added&page_size=10`;
export const getGameDetails = id => `${base_url}/games/${id}`;
