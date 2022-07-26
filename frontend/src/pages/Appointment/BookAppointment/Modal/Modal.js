import axios from 'axios';
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../../../components/image/appointment.png';
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
  const navigate = useNavigate();

  const [date, setDate] = useState();
  const [docDate, setDocDate] = useState();
  const [error, setError] = useState(true);
  const currDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  const getDate = async () => {
    let res;
    try {
      res = await axios.get(
        `http://localhost:5000/api/v1/general/getDate/${props.id}`
      );
      setDocDate(res.data.date.substring(0, 10));
    } catch (err) {
      console.log(err.message);
    }
  };

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

  const handleClick = async (e) => {
    e.preventDefault();

    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/general/bookAppointment`,
        {
          patient_id: id,
          doctor_id: props.id,
          appointment_date: date,
        }
      );
      setError(false);
      setTimeout(() => {
        const url = window.location.href;
        navigate(
          `/patientHome/${url
            .substring(url.lastIndexOf('t') + 2)
            .replaceAll('#', '')}`
        );
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  useEffect(() => {
    getDate();
  }, [window.location.href]);

  return (
    <div className="ModalAppointment">
      {showModal && docDate ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {!error && (
                <div
                  style={{
                    position: 'absolute',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginTop: '-7rem',
                      marginLeft: '17rem',
                      color: '#1bcc53',
                    }}
                  >
                    Your Appointment has been booked Successfully!
                  </p>
                  <p
                    style={{
                      color: 'grey',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginTop: '6rem',
                      marginLeft: '17rem',
                    }}
                  >
                    Redirecting to Home Page...
                  </p>
                </div>
              )}
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
                  <form>
                    <label>
                      <input value={props.id} disabled />
                      <div className="label-text">Doctor Id</div>
                    </label>
                    <label>
                      <input value={props.name} disabled />
                      <div className="label-text">Doctor Name</div>
                    </label>
                    <label>
                      <input
                        type="date"
                        defaultValue={currDate}
                        min={docDate}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                      <div className="label-text">Appointment Date</div>
                    </label>
                  </form>
                  <div
                    style={{
                      width: '20%',
                      marginLeft: '20rem',
                      marginTop: '-5rem',
                    }}
                  >
                    <button type="sumbit" onClick={handleClick}>
                      Book
                    </button>
                  </div>
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
    </div>
  );
};
