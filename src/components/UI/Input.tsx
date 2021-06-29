import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react';

import styles from './Input.module.css';

export type InputRef = HTMLInputElement;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  { label, id, type, min, max, step, defaultValue },
  ref
) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
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

export default forwardRef(Input);
