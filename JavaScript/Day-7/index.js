// Object - Used to store multiple pieces of related data using key-value pairs.
// Syntax:
// var myObject = { key: value, key2: value2 };

var userData = {
  name: "Siddharth",
  age: 24,
  address: "Pen",
  skills: ["HTML", "CSS", "JavaScript"],
  courses: { MCA: "8.20 CGPA", BCA: "9.30 CGPA" },
};

console.log(userData, "userData");
console.log(userData["name"], "userData['name']");
console.log(userData["age"], "userData['age']");

console.log("---------------------------------------------------------------");

// Accessing object properties using dot notation

console.log(userData.address, "userData.address");
console.log(userData.skills, "userData.time");
console.log(userData.courses, "userData.courses");
console.log(userData.courses.MCA, "userData.courses.MCA");

console.log("---------------------------------------------------------------");

// Adding a method (function inside an object)
const myObject = {
  age: 24,
  name: "Siddharth",
  greet: function () {
    console.log("Hello everyone.");
  },
};
console.log(myObject.greet);
myObject.greet();

console.log("---------------------------------------------------------------");

// Shorthand property names
var userName = "siddharth";
var age = 24;
var institute = { userName, age };
console.log(institute, "institute");

console.log("---------------------------------------------------------------");

// Using 'this' keyword inside an object
var institute = {
  name: "Siddharth Bankar",
  age: 24,
  greet: function () {
    console.log(`Hello, I'm ${this.name} and my age is ${this.age}.`);
  },
};
institute.greet();

console.log("---------------------------------------------------------------");

// Template literals (String interpolation)
let myName = "Ashish";
let myAge = 15;
console.log(`Hello ${myName}, Age: ${myAge}`);

console.log("---------------------------------------------------------------");

// Object destructuring
var institute = {
  name: "Awdiz",
  age: 10,
};

const { name: instituteName, age: instituteAge } = institute;
console.log(instituteName, instituteAge);

console.log("---------------------------------------------------------------");

// Merging objects using spread operator
var instituteNameObj = {
  name: "siddharth",
  name1: "ashish",
  name2: "samarth",
};
var instituteAgeObj = {
  age: 24,
  age1: 15,
  age2: 7,
};
const combinedObject = { ...instituteNameObj, ...instituteAgeObj };
console.log(combinedObject, "combinedObject");

console.log("---------------------------------------------------------------");

// Object methods - Getting keys, values, and entries
var instituteData = {
  name: "Awdiz",
  age: 10,
};
console.log(Object.keys(instituteData)); // Returns an array of keys
console.log(Object.values(instituteData)); // Returns an array of values
console.log(Object.entries(instituteData)); // Returns an array of key-value pairs

console.log("---------------------------------------------------------------");

// Checking if a property exists in an object
console.log("name" in instituteData); // true
console.log("name2" in instituteData); // false

console.log("---------------------------------------------------------------");

// Using spread operator with arrays
const myNumbers = [1, 2, 3, 4];
const myNewNumbers = [...myNumbers, 5, 6, 7, 8];
console.log(myNewNumbers, "myNewNumbers");
