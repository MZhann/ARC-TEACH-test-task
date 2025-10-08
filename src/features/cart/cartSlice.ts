import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}
const CART_KEY = "coffeino_cart";

const loadCart = (): CartState => {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : { items: [], totalPrice: 0 };
  } catch {
    return { items: [], totalPrice: 0 };
  }
};

const saveCart = (state: CartState) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(state));
  } catch {
  }
};
const initialState: CartState = loadCart();

const calcTotal = (items: CartItem[]) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        if (existing.quantity < existing.amountInStore) existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calcTotal(state.items);
      saveCart(state);
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.totalPrice = calcTotal(state.items);
      saveCart(state);
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity < item.amountInStore) item.quantity += 1;
      state.totalPrice = calcTotal(state.items);
      saveCart(state);
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0)
          state.items = state.items.filter((i) => i.id !== action.payload);
      }
      state.totalPrice = calcTotal(state.items);
      saveCart(state);
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.min(
          Math.max(action.payload.quantity, 1),
          item.amountInStore
        );
      }
      state.totalPrice = calcTotal(state.items);
      saveCart(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      saveCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
