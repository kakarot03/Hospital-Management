import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PatientRoute from '../../../../Api/PatientRoute';
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
  height: 500px;
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

export const Modal = ({ showModal, setShowModal, props }) => {
  const modalRef = useRef();
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientMobile, setPatientMobile] = useState('123');
  const [patientAddress, setPatientAddress] = useState('abc');

  const getPatient = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const result = await PatientRoute.get(`/getPatient/${props}`);
      const patient = await result.data.patient[0];
      patient && setPatientName(patient.name);
      patient && setPatientAge(patient.age);
      patient && setPatientMobile(patient.mobile);
      patient && setPatientAddress(patient.address);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmission = async (e) => {
    // e.preventDefault();
    try {
      const response = await PatientRoute.put(`/updatePatient/${props}`, {
        name: patientName,
        age: patientAge,
        mobile: patientMobile,
        address: patientAddress,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
    setPatientName('');
    setPatientAge('');
    setPatientMobile('');
    setPatientAddress('');
    showModal = !showModal;
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
    getPatient();
  }, []);

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
                  <form className="details-form">
                    <label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                      />
                      <div className="label-text">Name</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        required
                      />
                      <div className="label-text">Age</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        value={patientMobile}
                        onChange={(e) => setPatientMobile(e.target.value)}
                        required
                      />
                      <div className="label-text">Mobile</div>
                    </label>
                    <label>
                      <input
                        type="text"
                        value={patientAddress}
                        onChange={(e) => setPatientAddress(e.target.value)}
                        required
                      />
                      <div className="label-text">Address</div>
                    </label>
                    <button type="sumbit" onClick={handleFormSubmission}>
                      Update
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
