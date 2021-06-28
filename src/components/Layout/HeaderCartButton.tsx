import { FC } from 'react';

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
