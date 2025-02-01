// Initialize the array
var myNumbers = ["a", "b", "c", "q", "w", "e", "r"];
console.log(myNumbers, "myNumbers 1");

// Add new elements at the end using push()
myNumbers.push(4, 5, "six");
myNumbers.push(7, 8);
console.log(myNumbers, "myNumbers 2");

// Add elements at the beginning using unshift()
myNumbers.unshift(0);
myNumbers.unshift(6);
console.log(myNumbers, "myNumbers 3");

// Remove the first element using shift()
myNumbers.shift();
console.log(myNumbers, "myNumbers 4");

// Remove elements from a specific position using splice()
myNumbers.splice(1, 2);
console.log(myNumbers, "Removed elements");

// Add elements from a specific position using splice()
myNumbers.splice(1, 0, "Added", "Elements");
console.log(myNumbers, "Add elements");

// Create a new array using slice()
const newArray = myNumbers.slice(1, 3);
console.log(newArray, "newArray");

// Use map() to iterate and modify each element
var num = [1, 2, 3];
var newNum = num.map((element) => element ** 2);
console.log(newNum, "newNum (square values)");

// Use forEach() to perform an operation without returning a new array
var num2 = [1, 2, 3];
num2.forEach((elements) => {
  if (elements % 2 == 0) {
    console.log(`${elements} is even`);
  } else {
    console.log(`${elements} is odd`);
  }
});

// Use filter() to create a new array with only even numbers
var num3 = [1, 2, 3, 4];
const evenNum = num3.filter((elements) => elements % 2 == 0);
console.log(evenNum, "evenNum (filtered even numbers)");

// Use reduce() to accumulate a value based on array elements
var num = [1, 2, 3];

const additionOfNumbers = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(additionOfNumbers, "additionOfNumbers (sum of all numbers)");

// Use find() to find a single element

var stuDetail = [
  { name: "Jay", age: 25 },
  { name: "Veeru", age: 30 },
  { name: "Gabbar", age: 35 },
];

const userFind = stuDetail.find((student) => student.age === 25);

console.log(userFind);

// Use findIndex() to get the index of an element

const index = stuDetail.findIndex((student) => student.age === 30);

console.log(`index of student age = 30 is ${index}`);

// Function to reverse an array manually

var myArray = ["a", "b", "c", "d"];

function reverseElements(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray[array.length - i - 1] = array[i];
  }
  return newArray;
}

const result = reverseElements(myArray);
console.log(result, "result (reversed array)");

// return
function greet() {
  console.log("Hello");
  return "Hello";
  console.log("This won't be logged");
}

greet();

// notes:
// - `push()` adds elements to the end of an array.
// - `unshift()` adds elements to the beginning of an array.
// - `shift()` removes the first element of the array.
// - `splice()` can add or remove elements from an array at a specific index.
// - `slice()` returns a shallow copy of a portion of an array.
// - `map()` creates a new array by applying a function to each element.
// - `forEach()` executes a provided function once for each array element but doesn't return a new array.
// - `filter()` creates a new array with elements that pass the condition.
// - `reduce()` accumulates a single result by applying a function to each element.
// - `find()` returns the first element that satisfies the condition.
// - `findIndex()` returns the index of the first element that satisfies the condition.
