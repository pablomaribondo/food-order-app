import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

interface ModalProps {
  children: ReactNode;
}

const portalElement = document.getElementById('overlays')!;

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <>
      {createPortal(<ModalBackdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
