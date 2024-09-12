//Redux store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../services/cart/cartSlice.js";
import { loadState, saveState } from "../services/cart/localStorage.js";
import authReducer from "../services/GlobalState.js";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    loginauth: authReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});
