import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";
import ThemeReducer from "./themeSlice";
import TodoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    theme: ThemeReducer,
    todo: TodoReducer,
  },
});

export default store;
