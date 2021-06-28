import { FC, ReactNode } from 'react';

import styles from './Modal.module.css';

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
