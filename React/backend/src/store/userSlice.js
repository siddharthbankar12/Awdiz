import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      state.user = action.payload.user;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
