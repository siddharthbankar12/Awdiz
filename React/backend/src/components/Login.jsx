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

  // const [counter, setCounter] = useState(1);

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

      if (responseUser.data.success) {
        dispatch(login(responseUser.data.userData));
        toast.success(responseUser.data.message);
        setUserData({ email: "", password: "" });
        route("/all-products");
      } else {
        toast.error(responseUser.data.message);
      }
    } catch (error) {
      // if (counter === 2) {
      //   const token = "fuktya_ghe_chal_token";
      //   dispatch(login(token));
      //   route("/all-products");
      //   setCounter(1);
      // } else {
      //   alert("please try again");
      //   setCounter(counter + 1);
      // }

      toast.error(
        error.responseUser.data.message || error.responseUser.data.error
      );
    }
  };

  useEffect(() => {
    if (token) {
      route("/all-products");
    }
  }, [token]);

  return (
    <>
      <div className="m-auto my-28 border flex flex-col items-center w-fit">
        <h1 className="p-5 text-lg text-center font-bold border w-full">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-3 gap-3"
        >
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-1 text-black"
            required
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-1 text-black"
            required
          />
          <div className="flex justify-between gap-5">
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
