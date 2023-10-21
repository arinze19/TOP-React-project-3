import React, { useCallback, useMemo } from 'react';

import Button from '@components/Button';

import styled from 'styled-components';

// Types
export interface ModalProps {
  open: boolean;
  header: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, header, onClose, open }: ModalProps) => {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <ModalMain open={open}>
        <div className='modal-header'>
          <h2>{header}</h2>
        </div>
        <div className='modal-children'>{children}</div>
        <div className='modal-footer'>
          <Button onClick={onClose}>Close</Button>
        </div>
      </ModalMain>
    </>
  );
};

// Styled
const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;

  ${({ open }) => {
    if (open) {
      return `
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: all;
        opacity: 1;
      `;
    } else {
      return `
        background-color: rgba(0, 0, 0, 0);
        pointer-events: none;
        opacity: 0;
      `;
    }
  }}
`;

const ModalMain = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  background-color: white;
  left: 50%;
  top: 25%;
  width: 80%;
  max-width: 500px;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  transition: all 0.5s ease-in-out;

  ${({ open }) => {
    if (open) {
      return `
        transform: translate(-50%, 0);
      `;
    } else {
      return `
        transform: translate(-50%, -100%);
        opacity: 0;
        pointer-events: none;
      `;
    }
  }}
`;

export default Modal;
