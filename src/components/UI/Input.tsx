import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({
  label,
  id,
  type,
  min,
  max,
  step,
  defaultValue
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
