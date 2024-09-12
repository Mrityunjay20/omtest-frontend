import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  data: null,
};

export const LoginStateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.data = action.payload.data;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.data = null;
    },
  },
});

export const { login, logout } = LoginStateSlice.actions;
export default LoginStateSlice.reducer;
