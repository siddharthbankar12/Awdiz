import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { login } from "../store/userSlice";

const Login = () => {
  const route = useNavigate();
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token"));

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const responseUser = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        { email: userData.email, password: userData.password }
      );

      console.log(responseUser);

      if (responseUser.data.success === true) {
        dispatch(login(responseUser.data.userData));
        toast.success(responseUser.data.message);
        setUserData({ email: "", password: "" });
        route("/all-products");
      } else {
        toast.error(responseUser.data.message);
      }
    } catch (error) {
      toast.error(
        error.responseUser.data.message || error.responseUser.data.error
      );
    }
  };

  useEffect(() => {
    if (token) {
      route("/");
    }
  }, [token]);

  return (
    <>
      <div className="border w-fit mx-auto mt-16">
        <h1 className="border p-5 text-center font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="m-5">
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mb-3 text-black px-2"
            required
          />
          <br />
          <label htmlFor="password">Password :</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mb-3 text-black px-2"
            required
          />
          <br />
          <div className="flex justify-between mt-3">
            <button type="submit" className="border px-3 py-1">
              Submit
            </button>

            <p
              className="border px-3 py-1 cursor-pointer"
              onClick={() => {
                route("/registration");
              }}
            >
              Register
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
