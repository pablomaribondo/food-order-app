import { FC, useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart.context';
import styles from './MealItem.module.css';

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: FC<MealItemProps> = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
