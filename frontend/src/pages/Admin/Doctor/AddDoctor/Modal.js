import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import DoctorRoute from '../../../../Api/DoctorRoute';
import styled from 'styled-components';
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
  height: 600px;
  top: 15rem;
  left: 40rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
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

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [doctorId, setDoctorId] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorAge, setDoctorAge] = useState('');
  const [doctorMobile, setDoctorMobile] = useState('');
  const [doctorDeptId, setDoctorDeptId] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');
  const [error, setError] = useState(false);

  const addDoctor = async () => {
    try {
      const res = await DoctorRoute.post('/addDoctorId', {
        id: doctorId,
        name: doctorName,
        age: doctorAge,
        mobile: doctorMobile,
        password: doctorPassword,
        department_id: doctorDeptId,
      });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await DoctorRoute.get(`/getDoctor/${doctorId}`);
      const doctor = await result.data.doctor;
      if (doctor) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      } else {
        console.log(doctorId, doctorAge, doctorDeptId);
        addDoctor();
      }
    } catch (err) {
      console.log(err);
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

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div className="Modal">
                  {error && (
                    <h3
                      style={{
                        color: 'red',
                        marginTop: '-30rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                      }}
                    >
                      Doctor Id already exists!
                    </h3>
                  )}
                  <form className="details-form">
                    <label>
                      <label>
                        <input
                          type="text"
                          onChange={(e) => setDoctorId(e.target.value)}
                          required
                        />
                        <div className="label-text">Id</div>
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setDoctorName(e.target.value)}
                        required
                      />
                      <div className="label-text">Name</div>
                      <input
                        type="password"
                        onChange={(e) => setDoctorPassword(e.target.value)}
                        required
                      />
                      <div className="label-text">Password</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        onChange={(e) => setDoctorAge(e.target.value)}
                        required
                      />
                      <div className="label-text">Age</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        onChange={(e) => setDoctorMobile(e.target.value)}
                        required
                      />
                      <div className="label-text">Mobile</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        onChange={(e) => setDoctorDeptId(e.target.value)}
                        required
                      />
                      <div className="label-text">Department Id</div>
                    </label>
                    <button
                      className="btn"
                      type="sumbit"
                      onClick={handleSubmit}
                    >
                      Add
                    </button>
                  </form>
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
