import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/userSlice";
import axios from "axios";

const App = () => {
  const userData = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  async function getCurrentUserData(token) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/get-current-user",
        { token }
      );

      if (response.data.success) {
        dispatch(login(response.data.userData));
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!userData) {
      const token = localStorage.getItem("token");
      if (token) {
        // console.log("user logged in but lost data");
        getCurrentUserData(JSON.parse(token));
      } else {
        // console.log("user not logged in");
      }
    }
  }, [userData]);

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
        <Route path="/registration" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
