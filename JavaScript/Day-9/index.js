// 1. setTimeout: Executes a function after a specified delay (in milliseconds).
// Syntax: setTimeout(callback, delay);

setTimeout(() => {
  console.log("Hello after 3 second");
}, 3000);

// 2. setInterval: Repeatedly executes a function at a specified interval.
// Syntax: setInterval(callback, interval);

// clearInterval: Stops the execution of a repeating function set by setInterval().
// Syntax: clearInterval(intervalId);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 executions
  }
}, 2000);

// 3. Callback Functions
// Definition: A function passed as an argument to another function, executed later.
// Syntax: function mainFunction(callback) { callback(); }

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetching data...");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);

// 4. Promises
// Definition: Handles asynchronous operations with resolve (success) and reject (failure).
// Syntax: new Promise((resolve, reject) => { resolve(); or reject(); })

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Data fetch failed!");
    }
  }, 3000);
});

myPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Operation complete."));

// 5. Async/Await
// Definition: A cleaner way to handle promises with "await" inside an "async" function.
// Syntax: async function myFunction() { await somePromise(); }

const Demo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let tryData = true;
    if (tryData) {
      resolve("Data fetched successfully!");
    } else {
      reject("Data fetch failed!");
    }
  }, 3000);
});

async function fetchDataAsync() {
  console.log("Starting fetch...");
  try {
    let result = await Demo;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log("Fetch operation done.");
}

fetchDataAsync();

// 6. Fetch API
// Definition: Used to make network requests and handle responses.
// Syntax: fetch(url).then(response => response.json()).then(data => console.log(data));

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error fetching data:", error));
}

getProducts();
