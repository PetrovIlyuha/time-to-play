import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-player.svg';
import buttons from '../assets/logo_btns.svg';
import { motion } from 'framer-motion';
import { slideInZoomOut } from '../animations';
import { Link } from 'react-router-dom';
import { GiNewBorn, GiCometSpark } from 'react-icons/gi';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 200) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
  }, [window]);
  return (
    <>
      <StyledNavBar thinner={!showHeader}>
        <Link to='/'>
          {showHeader && (
            <StyledLogoJoyStick
              variants={slideInZoomOut}
              initial='hidden'
              animate='show'>
              <PersonLogo src={logo} alt='logo' />
              <img src={buttons} style={{ width: 130 }} alt='buttons' />
            </StyledLogoJoyStick>
          )}
        </Link>
        <nav>
          {!showHeader && (
            <Link
              to='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}>
              <GiCometSpark /> Popular
            </Link>
          )}
          <Link
            to='/upcoming'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}>
            <GiCometSpark /> Upcoming
          </Link>
          <Link
            to='/newest'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}>
            <GiNewBorn />
            Newest
          </Link>
        </nav>
      </StyledNavBar>
    </>
  );
};

const StyledNavBar = styled(motion.header)`
  display: flex;
  width: 100%;
  background: radial-gradient(
      65% 100% at 50% 0%,
      #00ff94 0%,
      rgba(0, 255, 148, 0.25) 100%
    ),
    linear-gradient(230deg, #000000 25%, #170059 100%),
    linear-gradient(215deg, #ffebb9 10%, #19004e 80%),
    radial-gradient(100% 245% at 100% 100%, #ffffff 0%, #000353 100%),
    linear-gradient(125deg, #1400ff 0%, #3a0000 100%),
    linear-gradient(
      225deg,
      #00f0ff 30%,
      #000b6f 45%,
      #00ebfc 45%,
      #001676 65%,
      #00e1f6 65%,
      #001676 85%,
      #00ecfd 85%,
      #001676 100%
    ),
    linear-gradient(
      135deg,
      #00f0ff 0%,
      #000b6f 15%,
      #00ebfc 15%,
      #001676 35%,
      #00e1f6 35%,
      #001676 55%,
      #00ecfd 55%,
      #001676 100%
    );
  background-blend-mode: soft-light, screen, overlay, overlay, difference,
    overlay, normal;
  transition: all 0.2s ease;
  min-height: ${props => (props.thinner ? '100px' : '170px')};
  z-index: 10;
  justify-content: space-around;
  align-items: center;
  nav {
    display: flex;
    width: ${props => (props.thinner ? '100vw' : '40vw')};
    justify-content: space-around;
  }
  nav a {
    background: rgba(58, 12, 163, 0.8);
    color: #fca311;
    border-radius: 10px;
    padding: 0.4rem;
    margin-right: 0.8rem;
    &:hover {
      animation: shakeButton 0.6s forwards;
    }
  }
  color: white;
  font-size: 2rem;
  position: sticky;
  top: 0;
  @keyframes shakeButton {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0) rotate(1deg);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0) rotate(-1deg);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0) rotate(1deg);
    }

    40%,
    60% {
      transform: translate3d(2px, 0, 0) rotate(-1deg);
    }
  }
`;

const StyledLogoJoyStick = styled(motion.div)`
  display: flex;
  width: 300px;
  background: linear-gradient(to left, #b0b574, #d7dab9);
  border-radius: 30px;
  margin: 30px 0px;
  margin-left: 30px;
  height: 130px;
  justify-content: space-around;
  padding: 5px 0px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
  align-items: center;
  color: white;
  &:hover {
    animation: shake 0.6s forwards;
  }

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`;

const PersonLogo = styled(motion.img)`
  width: 120px;
  border: 3px solid lightgreen;
  border-radius: 50%;
  background: purple;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
`;
export default Header;
