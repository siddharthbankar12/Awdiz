import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
};

export default App;
