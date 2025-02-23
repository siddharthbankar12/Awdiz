import { useNavigate } from "react-router-dom";

function Home() {
  let route = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          route("/login");
        }}
      >
        Login
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

export default Home;
