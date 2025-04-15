import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const route = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleChangeRole = (event) => {
    setUserData({ ...userData, ["role"]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/v1/auth/register",
      { userData }
    );

    try {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword &&
        userData.role
      ) {
        if (userData.password === userData.confirmPassword) {
          if (response.data.success === true) {
            toast.success(response.data.message);
            console.log(response.data, "response from register API");

            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              role: "user",
            });
            route("/login");
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error, "frontend");
      console.log(response.data.message, "backend");
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <div className="border w-fit mx-auto mt-16">
        <h1 className="border p-5 text-center font-bold">Register Page</h1>

        <form
          className="m-5"
          onSubmit={handleSubmit}
          style={{
            textAlign: "left",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <label htmlFor="name">Name : </label> <br />
          <input
            className="mb-3 text-black px-2"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={userData.name}
            placeholder="Enter your name"
            required
          />
          <br />
          <label htmlFor="email">Email :</label> <br />
          <input
            className="mb-3 text-black px-2"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            placeholder="Enter your email"
            required
          />
          <br />
          <label htmlFor="role">Select Role :</label>
          <select
            onChange={handleChangeRole}
            id="role"
            className="mb-3 ml-2 text-black px-2"
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <label htmlFor="password">Password : </label> <br />
          <input
            className="mb-3 text-black px-2"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            placeholder="Password"
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password : </label> <br />
          <input
            className="mb-3 text-black px-2"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={userData.confirmPassword}
            placeholder="Confirm password"
          />
          <br />
          <div className="flex justify-between mt-3">
            <button type="submit" className="border px-3 py-1">
              Register
            </button>
            <button
              onClick={() => route("/login")}
              className="border px-3 py-1"
            >
              login
            </button>
          </div>
          <br />
        </form>
      </div>
      {/* <div id="userList" className="mx-auto border text-center mt-5 w-[60%]">
        <h2>All users</h2>
        {allUser.map((user, idx) => (
          <div key={idx} className="border flex justify-between px-5 py-1">
            <h3>User {idx + 1}</h3>
            <h5>name : {user.name}</h5>
            <h5>email : {user.email}</h5>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Register;
