import { FC, ReactNode, useReducer, useMemo } from 'react';

import CartContext from './cart.context';
import { CartState, CartItem, CartAction } from './types';

interface CartProviderProps {
  children: ReactNode;
}

const DEFAULT_CART_STATE: CartState = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {}
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'REMOVE_CART_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.payload
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return DEFAULT_CART_STATE;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DEFAULT_CART_STATE
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({
      type: 'ADD_CART_ITEM',
      payload: item
    });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({
      type: 'REMOVE_CART_ITEM',
      payload: id
    });
  };

  const cartContext = useMemo(
    () => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
    }),
    [cartState.items, cartState.totalAmount]
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
