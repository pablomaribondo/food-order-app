import { createContext } from 'react';

import { CartState } from './types';

const CartContext = createContext<CartState>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export default CartContext;
