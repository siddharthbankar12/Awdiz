import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenFromLS = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;

  const userData = useSelector((state) => state.user.user);
  const userNameUpperCase = userData?.name?.toUpperCase();

  const loginUser = () => {
    navigate("/login");
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="my-6 w-full flex justify-around">
        <h1
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        >
          Shopping
        </h1>
        <ul className="flex gap-10">
          {/* Show only for seller */}
          {tokenFromLS && userData?.role === "seller" && (
            <li
              onClick={() => {
                navigate("/add-product");
              }}
              className="cursor-pointer"
            >
              Add Product
            </li>
          )}

          {/* Show All Products always for guests and users */}
          <li
            onClick={() => {
              navigate("/all-products");
            }}
            className="cursor-pointer"
          >
            All Products
          </li>

          {/* Show only for seller */}
          {tokenFromLS && userData?.role === "seller" && (
            <li
              onClick={() => {
                navigate("/added-products");
              }}
              className="cursor-pointer"
            >
              Added Products
            </li>
          )}

          {/* Show Hello username if logged in */}
          {tokenFromLS && <li>Hello {userNameUpperCase}</li>}

          <li
            onClick={tokenFromLS ? logoutUser : loginUser}
            className="cursor-pointer"
          >
            {tokenFromLS ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
