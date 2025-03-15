import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: null },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token);
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
