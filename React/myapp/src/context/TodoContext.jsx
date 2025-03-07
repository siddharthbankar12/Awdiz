import { createContext, useReducer } from "react";

export const MyTodoContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "handle_Change":
      return { ...state, newTodo: action.payload };
    case "handle_Submit":
      return { ...state, todos: [...state.todos, state.newTodo], newTodo: "" };

    default:
      return state;
  }
}

const InitialState = { newTodo: "", todos: [] };

function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <MyTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </MyTodoContext.Provider>
  );
}

export default TodoContextProvider;
