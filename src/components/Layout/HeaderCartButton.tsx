import { FC } from 'react';

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {}

const HeaderCartButton: FC<HeaderCartButtonProps> = () => {
  return (
    <button className={styles.button} type="button">
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
