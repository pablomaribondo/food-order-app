import { FC } from 'react';

import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

interface CartProps {}

const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];
const Cart: FC<CartProps> = () => {
  return (
    <Modal>
      <ul className={styles['cart-items']}>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>32.62</span>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles['button--alt']}>
          Close
        </button>
        <button type="button" className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
