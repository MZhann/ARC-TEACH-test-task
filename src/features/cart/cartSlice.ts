import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

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
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
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
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
