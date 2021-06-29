import { FC, useContext } from 'react';

import CartContext from '../../store/cart.context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import { CartItem as CartItemType } from '../../store/types';

interface CartProps {
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item: CartItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  return (
    <Modal onClose={onClose}>
      <ul className={styles['cart-items']}>
        {cartContext.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={() => cartItemAddHandler(item)}
            onRemove={() => cartItemRemoveHandler(item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles['button--alt']}
          onClick={onClose}
        >
          Close
        </button>
        {hasItems && (
          <button type="button" className={styles.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
