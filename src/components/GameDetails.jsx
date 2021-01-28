import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components';
import { motion, startAnimation } from 'framer-motion';
import { fadeInDeepPerspective } from '../animations';
import { getRelevantImage } from '../utils';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const GameDetails = ({ history }) => {
  const {
    location: {
      state: { category },
    },
  } = history;
  const { id } = useParams();
  const gamesArray = useSelector(state => state.games[category]);
  const currentGame = gamesArray.find(g => g.id === +id);
  const { cachedGameData } = useSelector(state => state.games);
  const game = cachedGameData.find(game => game.id === +id);
  const fullStars = parseInt(game.rating);
  const totalStars = Math.ceil(game.rating);
  const halfStarsIndex = totalStars - fullStars + fullStars;
  const getRatingsInStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<BsStarFill color='#5F3299' />);
      } else if (i <= halfStarsIndex) {
        stars.push(<BsStarHalf color='#5F3299' />);
      } else {
        stars.push(<BsStar color='#5F3299' />);
      }
    }
    return stars;
  };

  return (
    game &&
    currentGame && (
      <CardShadow url={currentGame.background_image}>
        <Details
          variants={fadeInDeepPerspective}
          initial='hidden'
          animate='show'>
          <StatisticalData>
            <div className='rating'>
              <h1>
                Title: <span>{game.name}</span>
              </h1>
              <h3 style={{ display: 'flex', alignItems: 'center' }}>
                Rating:{' '}
                <span style={{ marginLeft: 10 }}>{getRatingsInStars()}</span>
                <span style={{ marginLeft: 10 }}>{game.rating}</span>
              </h3>
            </div>
            <h3>Supported Platforms</h3>
            <Info>
              {game.platforms.map(data => (
                <PlatformImage
                  key={data.platform.id}
                  src={getRelevantImage(data.platform.name)}
                  alt={data.platform.name}
                />
              ))}
            </Info>
          </StatisticalData>
          <Gallery>
            <AutoplaySlider
              play={true}
              style={{ maxWidth: '100%', maxHeight: '20%' }}
              cancelOnInteraction={false}
              interval={6000}>
              {currentGame.short_screenshots.map(screen => (
                <div key={screen.id}>
                  <img src={screen.image} alt='descriptive screenshot' />
                </div>
              ))}
            </AutoplaySlider>
          </Gallery>
          <Description>
            <div dangerouslySetInnerHTML={{ __html: `${game.description}` }} />
          </Description>
          <Media>
            {currentGame?.clip?.clip && (
              <ReactPlayer
                volume={0.2}
                url={currentGame?.clip?.clip}
                controls
                style={{ width: '100%' }}
              />
            )}
          </Media>
        </Details>
      </CardShadow>
    )
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: ${props => `url(${props.url})`};
  background-size: cover;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
`;

const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 8rem 4rem;
  background: white;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  box-shadow: 2px 3px 14px -4px rgba(0, 0, 0, 0.3);
  color: #30342f;
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const Gallery = styled(motion.div)`
  margin: 10%;
  width: 100%;
`;

const StatisticalData = styled(motion.div)`
  align-self: flex-start;
  h3 {
    margin-top: 2rem;
    width: 80%;
  }
`;

const Info = styled(motion.div)`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.3rem;
  grid-row-gap: 1rem;
  img {
    max-width: 150px;
  }
`;

const Description = styled(motion.div)`
  margin-top: 0.45rem;
  margin-bottom: 2rem;
`;

const Media = styled(motion.div)`
  width: 90%;
  margin: 2rem;
  display: flex;
  object-fit: cover;
  align-self: center;
`;

const PlatformImage = styled(motion.img)`
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export default GameDetails;
