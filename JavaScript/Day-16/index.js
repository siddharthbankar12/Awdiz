// Generators in JavaScript (Basic)

// A generator function that yields values one by one
function* kuchbhi() {
  yield 1;
  yield 2;
  yield 3;
}

const res = kuchbhi();
console.log(res.next().value); // Output: 1
console.log(res.next().value); // Output: 2
console.log(res.next().value); // Output: 3

// Async Generators (Fetching Data)

async function* getProducts() {
  let page = 1;
  while (true) {
    // Fetching fake store API data
    const res = await fetch("https://fakestoreapi.com/products");
    const parsedData = await res.json();
    yield parsedData; // Yield the API response
    page++;
  }
}

// Initializing async generator
const output = getProducts();

document.getElementById("loadmore").addEventListener("click", async () => {
  const res = await output.next();
  console.log(res.value); // Logs fetched product data
});

// Normal Function Example

function kuchbhi2() {
  return 1;
}
console.log(kuchbhi2()); // Output: 1

// WeakMap Example

// WeakMap stores object keys with associated values
let obj = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(obj, "some value");
console.log(weakMap.get(obj)); // Output: "some value"

// Memoization for Optimization

// Memoization function to cache results
function memoize(fn) {
  const cache = {}; // Store cached values
  return function (...args) {
    const key = JSON.stringify(args); // Create cache key
    if (cache[key]) {
      console.log("Cache hit:", cache[key]);
      return cache[key]; // Return cached result
    }
    console.log("Calculating result...");
    const result = fn(...args);
    cache[key] = result; // Store result in cache
    return result;
  };
}

// A slow function that benefits from memoization
const slowFunction = (n) => {
  console.log("Calculating...");
  return n * 2;
};

// Create a faster function with memoization
const fastFunction = memoize(slowFunction);

console.log(fastFunction(5)); // Output: Calculating... 10
console.log(fastFunction(5)); // Output: Cache hit: 10

// Another Memoization Example

function memoizeAlt(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (cache[key]) {
      console.log("Returning cached value:", cache[key]);
      return cache[key];
    }
    console.log("Calculating new result...");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowFunctionAlt = (n) => {
  console.log("Inside slow function...");
  return n * 2;
};

const fastFunctionAlt = memoizeAlt(slowFunctionAlt);

console.log(fastFunctionAlt(5)); // Output: Inside slow function... 10
console.log(fastFunctionAlt(6)); // Output: Inside slow function... 12
console.log(fastFunctionAlt(6)); // Output: Returning cached value: 12
console.log(fastFunctionAlt(5)); // Output: Returning cached value: 10

// Accessing Object Properties

const myObj = { name: "Awdiz" };
console.log(myObj["name"]); // Output: "Awdiz"
