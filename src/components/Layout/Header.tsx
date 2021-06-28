import { FC } from 'react';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button type="button">Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
