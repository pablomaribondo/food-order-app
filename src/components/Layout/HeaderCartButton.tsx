import { FC, useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart.context';
import styles from './HeaderCartButton.module.css';

interface HeaderCartButtonProps {
  onClick: () => void;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ onClick }) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );

  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ''
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} type="button" onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
