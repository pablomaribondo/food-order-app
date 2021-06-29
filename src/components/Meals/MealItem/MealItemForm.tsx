import { FC, FormEvent, Ref, useRef, useState } from 'react';

import Input, { InputRef } from '../../UI/Input';
import styles from './MealItemForm.module.css';

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: FC<MealItemFormProps> = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<InputRef>();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (amountInputRef && amountInputRef.current) {
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = parseInt(enteredAmount, 10);

      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }

      onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef as Ref<InputRef>}
        label="Amount"
        id={`amount_${id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
