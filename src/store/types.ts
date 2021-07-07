export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export interface UserData {
  name: string;
  street: string;
  city: string;
  postalCode: string;
}

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
  clearCart: () => void;
}

interface AddCartItem {
  type: typeof ADD_CART_ITEM;
  payload: CartItem;
}

interface RemoveCartItem {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
}

interface ClearCart {
  type: typeof CLEAR_CART;
}

export type CartAction = AddCartItem | RemoveCartItem | ClearCart;
