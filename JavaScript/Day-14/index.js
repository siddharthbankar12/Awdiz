// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json()) // Convert response to JSON
//   .then((data) => console.log(data)) // Log data
//   .catch((error) => console.error("Error:", error)); // Handle errors

// try catch finally

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error caught:", error.message);
  } finally {
    console.log("Fetch request completed.");
  }
}

// fetchData();

// custom error

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.log("Error caught:", error.message);
}

// Closures
// A closure is a function that remembers variables from its lexical scope, even when the function is executed outside that scope.

function outerFunction() {
  let message = "from outerFunction";

  function innerFunction() {
    console.log("from innerFunction");
    console.log(message);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

// this keyword

const user1 = {
  name: "Siddharth",
  greet: function () {
    console.log(this.name);
  },
};

user1.greet();

// this arrow function

const user2 = {
  name: "Siddharth",
  greet: function () {
    const sayHello = () => console.log(this.name); //"Siddharth"
    sayHello();
  },
};

user2.greet();

// this constructor

function personData(name) {
  this.name = name;
}

const user3 = new personData("Siddharth");
console.log(user3.name);

// Currying
// Currying is a functional programming technique where a function takes multiple arguments one at a time instead of all at once.

// Why Use Currying?
// Reusability → Create specialized functions easily.
// Better Function Composition → Helps in functional programming.
// Avoids Code Duplication → Modular functions.

function add(a) {
  return function (b) {
    return a + b;
  };
}
const addFive = add(8);
console.log(addFive(5));
console.log(add(5)(3));

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4));

// call() - Calls the function immediately and takes arguments individually.
// syntax functionName.call(thisArg, arg1, arg2, ...);

const person1 = {
  name: "Siddharth",
  greet: function (age, address) {
    console.log(
      `Hello, my name is ${this.name} and I am ${age} years old, I am from ${address}`
    );
  },
};

const anotherPerson1 = { name: "Ashish" };

person1.greet.call(anotherPerson1, 24, "Pen");

// apply() - Calls the function immediately and takes arguments as an array.
// functionName.apply(thisArg, [arg1, arg2, ...]);

const person2 = {
  name: "Siddharth",
  greet: function (age, country) {
    console.log(
      `Hello, my name is ${this.name}, I am ${age} years old, I'm from ${country}.`
    );
  },
};

const anotherPerson2 = { name: "Ashish" };

person2.greet.apply(anotherPerson2, [24, "Pen"]);

// bind() - Returns a new function that you can call later.
// const newFunction = functionName.bind(thisArg, arg1, arg2, ...);

const person3 = {
  name: "Siddharth",
  greet: function (age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  },
};

const anotherPerson3 = { name: "Ashish" };

const newGreet = person3.greet.bind(anotherPerson3, 24);

newGreet();
