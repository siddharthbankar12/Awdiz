import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    Increment: (state) => {
      state.value = state.value + 1;
    },
    Decrement: (state) => {
      state.value = state.value - 1;
    },
    Reset: (state) => {
      state.value = 1;
    },
  },
});

export const { Increment, Decrement, Reset } = counterSlice.actions;

export default counterSlice.reducer;
