//Redux store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../services/cart/cartSlice.js";
import { loadState, saveState } from "../services/cart/localStorage.js";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});
