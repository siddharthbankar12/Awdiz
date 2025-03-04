import "./App.css";
import Home from "./components/20-02/Home";
import Login from "./components/20-02/Login";
import Register from "./components/28-02/Register";
import { Routes, Route } from "react-router-dom";
import UseState from "./components/22-02/UseState";
import UseEffect from "./components/22-02/UseEffect";
import UseParams from "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import Props from "./components/23-02/Props";
import Todo from "./components/23-02/Todo";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useparams" element={<UseParams />} />
        <Route
          path="/useparams/paramsproduct/:productID"
          element={<ParamsProduct />}
        />
        <Route
          path="/props"
          element={
            <Props counterProps={counter} setCounterProps={setCounter} />
          }
        />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
