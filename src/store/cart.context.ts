import { createContext } from 'react';

import { CartState } from './types';

const CartContext = createContext<CartState>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {}
});

export default CartContext;
