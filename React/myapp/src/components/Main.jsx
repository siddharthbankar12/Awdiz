import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeTheme } from "../redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const routes = [
  { path: "/home", label: "Home" },
  { path: "/login", label: "Login" },
  { path: "/register", label: "Register" },
  { path: "/use-state", label: "useState" },
  { path: "/use-effect", label: "useEffect" },
  { path: "/use-params", label: "useParams" },
  { path: "/props", label: "Props" },
  { path: "/todo", label: "Todo" },
  { path: "/use-memo", label: "useMemo" },
  { path: "/use-callback", label: "useCallback" },
  { path: "/use-ref", label: "useRef" },
  { path: "/use-reducer", label: "useReducer" },
  { path: "/context-counter", label: "Context Counter" },
  { path: "/context-todo", label: "Context Todo" },
  { path: "/redux-counter", label: "Redux Counter" },
  { path: "/redux-todo", label: "Redux Todo" },
];

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeValue = useSelector((state) => state.theme.mode);

  function changeMode() {
    dispatch(ChangeTheme());
  }

  useEffect(() => {
    document.body.style.backgroundColor =
      themeValue === "light" ? "white" : "black";
    document.body.style.color = themeValue === "light" ? "black" : "white";
  }, [themeValue]);

  return (
    <>
      <div style={{ margin: "25px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>React</h1>
          <button onClick={changeMode}>
            {themeValue === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px",
          }}
        >
          {routes.map((route, index) => (
            <button key={index} onClick={() => navigate(route.path)}>
              {route.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
