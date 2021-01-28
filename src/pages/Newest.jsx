import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewestGames } from '../reducers/gameActions';
import Game from '../components/Game';
import {
  GameCardsContainer,
  HomeSection,
  MainPageContainer,
} from './MainStyles';

const Main = () => {
  const { newest } = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newest.length) {
      dispatch(fetchNewestGames());
    }
  }, [dispatch, newest]);

  return (
    <MainPageContainer>
      <HomeSection>
        <h1>Newest Games</h1>
        <GameCardsContainer>
          {newest.map((game, index) => (
            <Game game={game} key={index} category='newest' />
          ))}
        </GameCardsContainer>
      </HomeSection>
    </MainPageContainer>
  );
};

export default Main;
