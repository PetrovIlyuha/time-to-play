import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainPageContainer = styled(motion.main)`
  width: 90vw;
  padding: 0;
  margin: 10vh auto;
`;

export const HomeSection = styled(motion.div)`
  /* background-color: red; */
  /* padding: 20px;
  margin: 3rem 3rem;
  h1 {
    margin-left: 1rem;
  } */
`;

export const GameCardsContainer = styled(motion.div)`
  width: 100%;
  margin: 2rem auto;
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
`;
