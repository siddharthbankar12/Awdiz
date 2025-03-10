import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route
          path="/all-products/single-product/:id"
          element={<SingleProduct />}
        />
      </Routes>
    </>
  );
};

export default App;
