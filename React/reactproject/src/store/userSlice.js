import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: null },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      alert("Login successful");
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      alert("Logout successful.");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
