import { FC, useContext, useState } from 'react';

import CartContext from '../../store/cart.context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import styles from './Cart.module.css';
import { CartItem as CartItemType, UserData } from '../../store/types';

interface CartProps {
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item: CartItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={styles.actions}>
      <button type="button" className={styles['button--alt']} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button type="button" className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = async (userData: UserData) => {
    setIsSubmitting(true);

    await fetch(`${process.env.REACT_APP_DB_URL}/orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items
      })
    });

    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cartModalContent = (
    <>
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
      {isCheckout && (
        <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
