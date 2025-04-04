import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

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
          <li
            onClick={() => {
              navigate("/all-products");
            }}
            className="cursor-pointer"
          >
            All Products
          </li>

          <li
            onClick={token ? logoutUser : loginUser}
            className="cursor-pointer"
          >
            {token ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
