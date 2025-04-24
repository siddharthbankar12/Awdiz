import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenFromLS = localStorage.getItem("token");

  const userData = useSelector((state) => state.user.user);

  console.log(userData?.role, "Current User");
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
          {tokenFromLS && userData?.role === "seller" && (
            <>
              <li
                onClick={() => {
                  navigate("/add-product");
                }}
                className="cursor-pointer"
              >
                Add Product
              </li>

              <li
                onClick={() => {
                  navigate("/added-products");
                }}
                className="cursor-pointer"
              >
                Added Products
              </li>
            </>
          )}

          <li
            onClick={() => {
              navigate("/all-products");
            }}
            className="cursor-pointer"
          >
            All Products
          </li>

          {tokenFromLS && (
            <li>
              Hello {userNameUpperCase}
              <sub className="text-[16px]"> ({userData?.role})</sub>
            </li>
          )}

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
