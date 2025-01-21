// 1. Data Types
// Primitive Data Types in JavaScript:
// String, Number, Boolean

// String ( 'Awdiz', "Awdiz", `Awdiz` )
const instituteName = "Awdiz";
console.log(typeof instituteName);

// Number (25 25.99 25.98545)
const age = 25;
console.log(typeof age);

// Boolean ( True, False)
const isEnrolled = true;
console.log(typeof isEnrolled);

// 2. typeof Operator
// Used to determine the type of a variable or value.
console.log(typeof "Awdiz"); // Output: string
console.log(typeof 12.21); // Output: number
console.log(typeof true); // Output: boolean

// 3. Variables
// There are three ways to declare variables in JavaScript: var, let, and const.

// var: Function-scoped or globally-scoped; can be re-assigned and re-declared.
var myVar = "Hello";
console.log(myVar); // Output: Hello
myVar = "World"; // Re-assign
console.log(myVar); // Output: World
var myVar = "Again"; // Re-declare
console.log(myVar); // Output: Again

// let: Block-scoped; can be re-assigned but cannot be re-declared in the same scope.
let myLet = 10;
console.log(myLet); // Output: 10
myLet = 20; // Re-assign
console.log(myLet); // Output: 20
// let myLet = 30; // Error: Cannot re-declare variable

// const: Block-scoped; cannot be re-assigned or re-declared.
const myConst = 50;
console.log(myConst); // Output: 50
// myConst = 60; // Error: Assignment to constant variable
// const myConst = 70; // Error: Cannot re-declare variable

// 4. Scope and Hoisting
// var is function-scoped, while let and const are block-scoped.
{
  var varScoped = "I am accessible outside block";
  let letScoped = "I am accessible inside block";
  const constScoped = "I am also accessible inside block";
}
console.log(varScoped); // Output: I am accessible outside block
// console.log(letScoped); // Error: letScoped is not defined
// console.log(constScoped); // Error: constScoped is not defined

// Hoisting
// Variables declared with var are hoisted with undefined.
console.log(hoistedVar); // Output: undefined
var hoistedVar = 100;

// let and const are hoisted but not initialized.
// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = 200;

// 5. Comparison Operators
// = is used for assignment.
const assignedValue = 10;
console.log(assignedValue); // Output: 10

// == compares values but not types.
console.log(2 == "2"); // Output: true

// === compares values and types (strict equality).
console.log(2 === "2"); // Output: false
console.log(2 === 2); // Output: true

// != checks if values are not equal.
console.log(2 != 3); // Output: true

// !== checks if values and types are not equal (strict inequality).
console.log(2 !== "2"); // Output: true
console.log(2 !== 2); // Output: false

// Summary Table for Variables:
//            Re-assign  Re-declare  Block-Scoped  Global-Scoped  Hoisting
// var        Yes        Yes         No           Yes            Yes (undefined)
// let        Yes        No          Yes          No             Yes (TDZ)
// const      No         No          Yes          No             Yes (TDZ)

// Example with block scope and hoisting:
{
  var globalVar = "Accessible Globally";
  let blockLet = "Accessible in Block";
  const blockConst = "Constant in Block";
}
console.log(globalVar); // Output: Accessible Globally
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined
