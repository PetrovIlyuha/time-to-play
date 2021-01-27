import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideInRightDelayed } from '../animations';
import { Slider } from 'react-slider-awesome';
import 'react-slider-awesome/dist/index.css';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { saveGameDetails } from '../reducers/gameActions';
import { withRouter } from 'react-router-dom';

const Game = ({ game, category, history }) => {
  const [showScreenshot, setShowScreenshot] = useState({
    isActive: false,
    element: null,
  });
  const { cachedGameData } = useSelector(state => state.games);
  const dispatch = useDispatch();

  const getMoreGameDetails = async (event, id) => {
    if (cachedGameData.some(game => game.id === id)) {
      history.push({ pathname: `/game/${game.id}`, state: { category } });
    } else {
      await dispatch(saveGameDetails(id));
      history.push({ pathname: `/game/${game.id}`, state: { category } });
    }
  };

  const { isActive, element } = showScreenshot;
  return (
    <GameCard variants={slideInRightDelayed} initial='hidden' animate='show'>
      <h4 style={{ textAlign: 'center' }}>{game.name}</h4>
      <h5>Released on: {game.released}</h5>
      <img src={game.background_image} alt='' />
      <Genres>
        {game.genres.map((genre, index) => (
          <span key={index} style={{ color: game.saturated_color }}>
            {genre.name}
          </span>
        ))}
      </Genres>
      <StyledSlider>
        <Slider rtl={true} noEffects={false} size={'big'}>
          {game.short_screenshots.slice(0, 3).map(shot => (
            <div>
              <ScreenShot
                src={shot.image}
                onClick={() =>
                  setShowScreenshot({ isActive: true, element: shot.image })
                }
                alt='screenshot'
              />
            </div>
          ))}
        </Slider>
      </StyledSlider>

      <Button onClick={e => getMoreGameDetails(e, game.id)}>
        More Details
      </Button>

      <Modal show={isActive} setShow={setShowScreenshot} innerContent={element}>
        <img src={element} alt='modal content' />
      </Modal>
    </GameCard>
  );
};

const GameCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0;
  width: 100%;
  height: 100%;
  background-color: beige;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.3);
  z-index: 5;
  &:hover {
    transform: translateX(10px);
  }
  img {
    max-width: 100%;
    max-height: 300px;
  }
  article {
    margin: 0 100px;
    width: 100%;
  }
`;

const Genres = styled(motion.section)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 80%;
  align-content: center;
  span {
    background-color: #7f7be5;
    color: white;
    padding: 0.7rem;
    border-radius: 10px;
  }
`;

const StyledSlider = styled(motion.div)`
  padding: 10px;
  background-color: #d3cad4;
`;

const ScreenShot = styled(motion.img)`
  transition: 0.3s all ease-in;
  &:hover {
    transform: scale(1.5);
  }
`;

const Button = styled(motion.button)`
  border: none;
  margin: 1rem;
  background-color: #4361ee;
  padding: 0.5rem;
  border-radius: 10%;
  color: white;
  box-shadow: 2px 4px 9px 0px rgba(0, 0, 0, 0.4) inset;
  transition: all 0.4s ease;
  &:hover {
    border-radius: 4%;
    margin: 0.5rem;
    padding: 1rem;
    background-color: #023e8a;
    box-shadow: 2px 4px 9px 0px rgba(0, 0, 0, 0.4);
    animation: shake 0.4s forwards;
  }
`;

export default withRouter(Game);
