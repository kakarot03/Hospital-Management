import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import image from '../../../components/image/appointment.png';
import './Modal.css';

const Background = styled.div`
  width: 102%;
  height: 102%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  bottom: 1px;
  right: -1px;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  top: 15rem;
  left: 40rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, props }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  console.log(props);
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h3>Img</h3>
                <div
                  className="docDetails"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginTop: '10rem',
                    gap: '3rem',
                  }}
                >
                  <p style={{ fontSize: '20px', fontWeight: '600' }}>
                    Doctor Id : {props.id}
                  </p>
                  <p style={{ fontSize: '20px', fontWeight: '600' }}>
                    Doctor Name : {props.name}
                  </p>
                  <p style={{ fontSize: '20px', fontWeight: '600' }}>
                    Doctor Age : {props.age}
                  </p>
                  <p style={{ fontSize: '20px', fontWeight: '600' }}>
                    Appointment Date : 21/3/2022
                  </p>
                  <button
                    type="sumbit"
                    style={{
                      width: '20%',
                      marginLeft: '20rem',
                      marginTop: '2rem',
                    }}
                  >
                    Book
                  </button>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
