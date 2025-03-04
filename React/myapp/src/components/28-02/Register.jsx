import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const route = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [allUser, setAllUser] = useState([]);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // console.log(userData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllUser([...allUser, userData]);
    // console.log(allUser);
    setUserData({ name: "", email: "", password: "", confirmPassword: "" });
  };
  return (
    <div>
      <h1>Register Page</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "left",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <label htmlFor="name">Name : </label> <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={userData.name}
        />
        <br />
        <label htmlFor="email">Email : </label> <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        <br />
        <label htmlFor="password">Password : </label> <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password : </label> <br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={userData.confirmPassword}
        />
        <br />
        <button type="submit">Register</button>
        <button onClick={() => route("/login")}>login</button>
        <br />
      </form>

      <div id="userList">
        <h2>All users</h2>
        {allUser.map((user, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid black",
              textAlign: "left",
              padding: "15px",
              margin: "15px 0 ",
            }}
          >
            <h3>User {idx + 1}</h3>
            <h5>name : {user.name}</h5>
            <h5>email : {user.email}</h5>
            <h5>password : {user.password}</h5>
            <h5>confirm password : {user.confirmPassword}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Register;
