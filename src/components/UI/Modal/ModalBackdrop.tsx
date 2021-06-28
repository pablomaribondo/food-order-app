import { FC } from 'react';

import styles from './Modal.module.css';

interface ModalBackdropProps {
  onClose: () => void;
}

const ModalBackdrop: FC<ModalBackdropProps> = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

export default ModalBackdrop;
