import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const Button = styled.button`
  min-width: 100px;
  padding: 10px -10px !important;
  border-radius: 4px;
  border: none;
  background: #12109b;
  color: #fff;
  font-size: 9.5px;
  cursor: pointer;
`;

const UpdatePatient = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Button onClick={openModal}>Update</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default UpdatePatient;
