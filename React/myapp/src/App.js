import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/20-02/Home";
import Login from "./components/20-02/Login";
import Register from "./components/28-02/Register";
import UseState from "./components/22-02/UseState";
import UseEffect from "./components/22-02/UseEffect";
import UseParams from "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import Props from "./components/23-02/Props";
import Todo from "./components/23-02/Todo";
import UseMemo from "./components/01-03/UseMemo";
import UseCallBack from "./components/01-03/UseCallBack";
import UseRef from "./components/02-03/UseRef";
import UseReducer from "./components/02-03/UseReducer";
import ContextCounter from "./components/04-03/ContextCounter";
import ContextTodo from "./components/04-03/ContextTodo";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-params" element={<UseParams />} />
        <Route
          path="/use-params/params-product/:productID"
          element={<ParamsProduct />}
        />
        <Route
          path="/props"
          element={
            <Props counterProps={counter} setCounterProps={setCounter} />
          }
        />
        <Route path="/todo" element={<Todo />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallBack />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/context-todo" element={<ContextTodo />} />
      </Routes>
    </div>
  );
}

export default App;
