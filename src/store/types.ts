export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

interface AddCartItem {
  type: typeof ADD_CART_ITEM;
  payload: CartItem;
}

interface RemoveCartItem {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
}

export type CartAction = AddCartItem | RemoveCartItem;
