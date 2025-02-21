import { useNavigate } from "react-router-dom";

function Register() {
  let route = useNavigate();
  return (
    <div>
      <h1>Register Page</h1>
      <button
        onClick={() => {
          route("/");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          route("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Register;
