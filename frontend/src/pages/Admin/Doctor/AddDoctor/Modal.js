import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import DoctorRoute from '../../../../Api/DoctorRoute';
import styled from 'styled-components';
import axios from 'axios';
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
  const [doctor, setDoctor] = useState({
    id: '',
    name: '',
    age: '',
    mobile: '',
    department_id: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const sendSMS = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/general/sms', {
        number: '+91' + doctor.mobile,
      });
      console.log('message sent');
    } catch (err) {
      console.log(err);
    }
  };

  const addDoctor = async () => {
    try {
      await DoctorRoute.post('/addDoctorId', {
        id: doctor.id,
        name: doctor.name,
        age: doctor.age,
        mobile: doctor.mobile,
        password: doctor.password,
        department_id: doctor.department_id,
      });
      await sendSMS();
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setDoctor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await DoctorRoute.get(`/getDoctor/${doctor.id}`);
      const doc = await result.data.doctor;
      if (doc) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      } else {
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
                          name="id"
                          onChange={handleChange}
                          required
                        />
                        <div className="label-text">Id</div>
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                      />
                      <div className="label-text">Name</div>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                      <div className="label-text">Password</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                        required
                      />
                      <div className="label-text">Age</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        name="mobile"
                        onChange={handleChange}
                        required
                      />
                      <div className="label-text">Mobile</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        name="department_id"
                        onChange={handleChange}
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
