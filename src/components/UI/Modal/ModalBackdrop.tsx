import { FC } from 'react';

import styles from './Modal.module.css';

interface ModalBackdropProps {}

const ModalBackdrop: FC<ModalBackdropProps> = () => {
  return <div className={styles.backdrop} />;
};

export default ModalBackdrop;
