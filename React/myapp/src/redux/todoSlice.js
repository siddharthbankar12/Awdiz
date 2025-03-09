import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { newTodo: "", todos: [] },
  reducers: {
    HandleSubmit: (state) => {
      if (state.newTodo.trim() !== "") {
        state.todos.push(state.newTodo);
        state.newTodo = "";
      }
    },
    HandleChange: (state, action) => {
      state.newTodo = action.payload;
    },
  },
});

export const { HandleChange, HandleSubmit } = todoSlice.actions;

export default todoSlice.reducer;
