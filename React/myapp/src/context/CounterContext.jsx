import { createContext, useEffect, useReducer } from "react";

export const MyCounterContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    case "RESET_COUNTER":
      return { ...state, counter: 1 };
    case "LIGHT_MODE":
      return { ...state, mode: "light" };
    case "DARK_MODE":
      return { ...state, mode: "dark" };
    default:
      return state;
  }
}

const InitialState = { counter: 1, mode: "light" };

function CounterContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  useEffect(() => {
    document.body.style.backgroundColor =
      state.mode === "dark" ? "black" : "white";
    document.body.style.color = state.mode === "dark" ? "white" : "black";
  }, [state.mode]);

  return (
    <MyCounterContext.Provider value={{ state: state, dispatch }}>
      {children}
    </MyCounterContext.Provider>
  );
}

export default CounterContextProvider;
