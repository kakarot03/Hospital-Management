import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const Button = styled.button`
  min-width: 100px;
  padding: 10px -10px !important;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 9.5px;
  cursor: pointer;
`;

const AppointmentModal = ({ doc }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Button onClick={openModal}>Book</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} props={doc} />
    </>
  );
};

export default AppointmentModal;
