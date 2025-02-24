// Selecting elements

const userFullName = document.querySelector("#rname");
const userReg = document.querySelector("#rusername");
const passReg = document.querySelector("#rpassword");

const userLog = document.querySelector("#lusername");
const passLog = document.querySelector("#lpassword");

const userRegister = document.querySelector(".selbtn1");
const userLogin = document.querySelector(".selbtn2");

const registrationDiv = document.querySelector(".registration");
const loginDiv = document.querySelector(".login");

// Email validation function

function emailValidation(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// Register user

function registerUser(event) {
  event.preventDefault();

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

let userLoginDetail = {};

// Login user

function loginUser(event) {
  event.preventDefault();

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

  for (let check of usersList) {
    if (check.username === logUser && check.password === logPass) {
      validUser = true;
      userLoginDetail = check;
      break;
    }
  }

  if (validUser) {
    alert("login successfully");

    loginUserDetail();
  } else {
    alert("enter valid credentials");
  }

  userLog.value = "";
  passLog.value = "";
}

function showRegister() {
  registrationDiv.style.display = "flex";
  loginDiv.style.display = "none";
}

function showLogin() {
  registrationDiv.style.display = "none";
  loginDiv.style.display = "flex";
}

if (userRegister && userLogin) {
  userRegister.addEventListener("click", showRegister);
  userLogin.addEventListener("click", showLogin);
}

// Logout user

function logout() {
  localStorage.removeItem("userlogindetail");
  window.location.href = "index.html";
}

if (document.querySelector(".logoutBtn")) {
  document.querySelector(".logoutBtn").addEventListener("click", logout);
}

// login user fetch details

function loginUserDetail() {
  userLoginDetail = {
    username: userLoginDetail.username,
    password: userLoginDetail.password,
    fullname: userLoginDetail.fullname,
  };

  localStorage.setItem("userlogindetail", JSON.stringify(userLoginDetail));
  window.location.href = "products.html";

  showProductList();
}

// Show logged-in user details

function userDataShow() {
  let userdata = JSON.parse(localStorage.getItem("userlogindetail"));
  let userNameUpdate = document.querySelector(".updateName");

  if (userdata && userNameUpdate) {
    userNameUpdate.innerText = userdata.fullname;
  }
}

userDataShow();

// add product details

let proName = document.querySelector("#productName");
let proPrice = document.querySelector("#productPrice");
let proCategory = document.querySelector("#productCategory");
let proImgUrl = document.querySelector("#productImage");

function addProduct(event) {
  event.preventDefault();

  let user = JSON.parse(localStorage.getItem("userlogindetail")) || {};

  if (!user.products) {
    user.products = [];
  }

  let productName = proName.value;
  let productPrice = proPrice.value;
  let productCategory = proCategory.value;
  let productImgUrl = proImgUrl.value;

  // Validate image extension
  let validExtensions = ["jpg", "jpeg", "png", "gif"];
  let fileExtension = productImgUrl.split(".").pop().toLowerCase();

  if (!validExtensions.includes(fileExtension)) {
    productImgUrl =
      "https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-shopping-cart-filled-with-boxes-3d-render-stock-illustration-clipart-png-image_13600393.png";
  }

  let newProduct = {
    productName: productName,
    productImgUrl: productImgUrl,
    productCategory: productCategory,
    productPrice: productPrice,
  };

  user.products.push(newProduct);

  localStorage.setItem("userlogindetail", JSON.stringify(user));

  showProductList();

  proName.value = "";
  proImgUrl.value = "";
  proCategory.value = "";
  proPrice.value = "";
}

// show products

function showProductList() {
  let productList = document.querySelector(".productList");
  let user = JSON.parse(localStorage.getItem("userlogindetail")) || {};

  if (!user.products || user.products.length === 0) {
    productList.innerHTML = "<p>No products available</p>";
    return;
  }

  productList.innerHTML = "";

  user.products.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `

      <p class="proname">${product.productName}</p>
      <img src="${product.productImgUrl}" alt="Product Image" />
      <div class="procategory">${product.productCategory}</div>
      <div class="proprice">₹${product.productPrice}</div>
    `;

    productList.appendChild(productDiv);
  });
}

// Run showProductList() only on products.html
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".productList")) {
    showProductList();
  }
});
