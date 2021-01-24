import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPopularGames } from '../reducers/gameActions';
import Game from '../components/Game';
import {
  GameCardsContainer,
  HomeSection,
  MainPageContainer,
} from './MainStyles';

const Main = () => {
  const dispatch = useDispatch();
  const { popular } = useSelector(state => state.games);

  useEffect(() => {
    if (!popular.length) {
      dispatch(fetchPopularGames());
    }
  }, [dispatch, popular]);

  return (
    <MainPageContainer>
      <HomeSection>
        <h1>Popular Games</h1>
        <GameCardsContainer>
          {popular.map((game, index) => (
            <Game game={game} key={index} category='popular' />
          ))}
        </GameCardsContainer>
      </HomeSection>
    </MainPageContainer>
  );
};

export default Main;
