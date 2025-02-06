// Ternary Operator

let age = 12;
let allowDL = age >= 18 ? "allow for DL" : "not allow for DL";
console.log(allowDL);

let marks = 80;
let grade = marks > 80 ? "A" : marks > 60 ? "B" : marks >= 35 ? "C" : "fail";
console.log(grade);

// Looping Constructs (do-while, for-in, for-of)
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);

let ObjectData = { name: "Awdiz", age: 10, location: "Vashi" };
for (let key in ObjectData) {
  console.log(key, ":", ObjectData[key]);
}

let arrayData = ["Hi", "Hello", 3];
for (let idx of arrayData) {
  console.log(idx);
}

// Higher-Order Functions & Callbacks

function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}
const multiply = (x, y) => x * y;

console.log(applyOperation(10, 20, add));
console.log(applyOperation(10, 20, multiply));

// Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("Hello from IIFE!");
})();

// Object Literals

const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, Im ${this.name}.`);
  },
  regularFunctionGreet: function () {
    console.log(`Hello, Im ${this.name}.`);
  },
};

person.greet();
person.regularFunctionGreet();

// Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name} and my age is ${this.age}`;
  }
}

const newPerson = new Person("Siddharth", 24);
console.log(newPerson.greet());
