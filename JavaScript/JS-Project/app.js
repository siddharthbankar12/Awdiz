const userFullName = document.querySelector("#rname");
const userReg = document.querySelector("#rusername");
const passReg = document.querySelector("#rpassword");

const userLog = document.querySelector("#lusername");
const passLog = document.querySelector("#lpassword");

const userRegister = document.querySelector(".selbtn1");
const userLogin = document.querySelector(".selbtn2");

const registrationDiv = document.querySelector(".registration");
const loginDiv = document.querySelector(".login");

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

  showLogin();
}

function loginUser() {
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

  let usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  let validUser = false;
  let loggedUser = null;

  for (check of usersList) {
    if (check.username === logUser && check.password === logPass) {
      validUser = true;
      loggedUser = check;

      // let loginUser = JSON.parse(localStorage.getItem("loginUserDetail")) || [];

      // loginUser.push({
      //   fullname: check.fullname,
      //   username: check.username,
      //   password: check.password,
      // });

      // localStorage.setItem("loginUserDetail", JSON.stringify(loginUser));
      break;
    }
  }

  if (validUser) {
    alert("login successfully");

    let userLoginDetail = {
      name: loggedUser.username,
      password: loggedUser.password,
      fullname: loggedUser.fullname,
    };

    localStorage.setItem("userlogindetail", JSON.stringify(userLoginDetail));

    loginUserDetail();
  } else {
    alert("enter valid credentials");
  }

  userLog.value = "";
  passLog.value = "";
}

// loginDiv.style.display = "none";

function showRegister() {
  registrationDiv.style.display = "flex";
  loginDiv.style.display = "none";
}

function showLogin() {
  registrationDiv.style.display = "none";
  loginDiv.style.display = "flex";
}

userRegister.addEventListener("click", showRegister);
userLogin.addEventListener("click", showLogin);

// login user fetch details

let proName = document.querySelector("#productName");
let proPrice = document.querySelector("#productPrice");
let proCategory = document.querySelector("#productCategory");
let proImgUrl = document.querySelector("#productImage");

function loginUserDetail() {
  window.location.href = "products.html";

  let name = proName.value;
  let price = proPrice.value;
  let category = proCategory.value;
  let image = proImgUrl.value;

  let usersList = JSON.parse(localStorage.getItem("usersList"));
  let loginUserDetail =
    JSON.parse(localStorage.getItem("loginUserDetail")) || [];

  loginUserDetail.push({
    productName: name,
    ProductPrice: price,
    productCategory: category,
    productImgUrl: image,
  });

  window.localStorage.setItem("loginUser", JSON.stringify(loginUserDetail));

  console.log(loginUser);
}

function logout() {
  const logoutButton = document.querySelector(".logoutBtn");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("userlogindetail");
    window.location.href = "index.html";
  });
}
