const userFullName = document.querySelector("#rname");
const userReg = document.querySelector("#rusername");
const passReg = document.querySelector("#rpassword");

const userLog = document.querySelector("#lusername");
const passLog = document.querySelector("#lpassword");

function emailValidation(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function submit() {
  let regName = userFullName.value;
  let regUser = userReg.value;
  let regPass = passReg.value;

  if (!regName || !regUser || !regPass) {
    alert("please enter missing information");
    return;
  }

  if (!emailValidation(regUser)) {
    alert("Please enter a valid email address");
    return;
  }

  let usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let check of usersList) {
    if (check.username === regUser) {
      alert("already register");
      return;
    }
  }

  usersList.push({
    fullname: regName,
    username: regUser,
    password: regPass,
  });

  localStorage.setItem("usersList", JSON.stringify(usersList));

  alert("Registration successfully");

  userFullName.value = "";
  userReg.value = "";
  passReg.value = "";
}

function login() {
  let logUser = userLog.value;
  let logPass = passLog.value;

  if (!logUser || !logPass) {
    alert("please enter missing information");
    return;
  }

  if (!emailValidation(logUser)) {
    alert("Please enter a valid email address!");
    return;
  }

  let usersList = JSON.parse(localStorage.getItem("usersList"));

  let validUser = false;

  for (check of usersList) {
    if (check.username === logUser && check.password === logPass) {
      validUser = true;
      break;
    }
  }

  if (validUser) {
    alert("login successfully");
  } else {
    alert("enter valid credentials");
  }

  userLog.value = "";
  passLog.value = "";
}
