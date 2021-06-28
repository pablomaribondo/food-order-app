import { FC } from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

interface MealItemFormProps {
  id: string;
}

const MealItemForm: FC<MealItemFormProps> = ({ id }) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        id={`amount_${id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
