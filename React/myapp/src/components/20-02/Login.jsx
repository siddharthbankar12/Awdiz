import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const route = useNavigate();

  const [userDetail, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setUserDetails({ ...userDetail, [event.target.name]: event.target.value });
    console.log(userDetail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers([...users, userDetail]);
    setUserDetails({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <>
      <h1>Login Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={userDetail.email}
            required
          />
          <br />

          <label htmlFor="password">Password :</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={userDetail.password}
            required
          />
          <br />

          <button type="submit">login</button>
          <button onClick={() => route("/register")}>Register</button>
        </form>
      </div>
      <div>
        <h1>login users</h1>
        {users.map((user, idx) => (
          <div key={idx} style={{ padding: "15px 0" }}>
            <h3>User: {idx + 1}</h3>
            <h4>email: {user.email}</h4>
            <h4>password: {user.password}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Login;
