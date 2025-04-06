import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token"));
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
          <li
            onClick={() => {
              navigate("/all-products");
            }}
            className="cursor-pointer"
          >
            All Products
          </li>

          <li> {token ? `Hello ${userNameUpperCase}` : ""}</li>

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
