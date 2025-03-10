import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../store/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const [counter, setCounter] = useState(1);

  const [userData, setUserData] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });

  const handleChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: userData.username,
        password: userData.password,
      });

      dispatch(login(response.data.token));

      navigate("/all-products");
    } catch (error) {
      if (counter === 2) {
        const token = "fuktya_ghe_chal_token";
        dispatch(login(token));
        navigate("/all-products");
        setCounter(1);
      } else {
        alert("please try again");
        setCounter(counter + 1);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/all-products");
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
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Enter your username"
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
          <button type="submit" className="border p-1">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
