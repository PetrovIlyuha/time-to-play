import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import { slideBottomLeft } from '../animations';

const Modal = ({ children, show, setShow }) => {
  const content = show && (
    <Overlay variants={slideBottomLeft} initial='hidden' animate='show'>
      <ModalWindow>
        <ModalCloseButton
          type='button'
          onClick={() => setShow({ isActive: false, element: null })}>
          <FaWindowClose size={30} />
        </ModalCloseButton>
        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </Overlay>
  );

  return ReactDOM.render(content, document.getElementById('modal'));
};

const Overlay = styled(motion.div)`
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWindow = styled(motion.div)`
  z-index: 99;
  /* Everything below is optional styling */
  position: relative;
  max-width: 90%;
  max-height: 100%;
  margin: 0 auto;
`;

const ModalCloseButton = styled(motion.button)`
  position: absolute;
  top: -50px;
  right: 0;
  font-size: 3rem;
  padding: 5px;
  border: 0;
  -webkit-appearance: none;
  background: none;
  color: white;
  cursor: pointer;
`;

const ModalBody = styled(motion.div)`
  padding: 20px 24px;
  border-radius: 4px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
  }
`;

export default Modal;
