import { useNavigate } from "react-router-dom";

function Login() {
  let route = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          route("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          route("/register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Login;
