// While loop: Repeats a block of code while a condition is true

// Prints numbers from 1 to 10 using a while loop
var number = 1;
while (number <= 10) {
  console.log(number); // prints the current number
  number++; // increments number by 1
}

// Prints numbers from 10 to 1 using a while loop
var number = 10;
while (number > 0) {
  console.log(number); // prints the current number
  number--; // decrements number by 1
}

// Function to find out the count of even and odd numbers in a given range using a while loop

var startRange = 1;
var endRange = 11;

var evenCount = 0;
var oddCount = 0;

while (startRange <= endRange) {
  if (startRange % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
  startRange++;
}

console.log(`Even numbers count: ${evenCount}`);
console.log(`Odd numbers count: ${oddCount}`);

// Traditional Function Definition
// Function to add two numbers

function additionNumbers(num1, num2) {
  console.log(num1 + num2);
}
additionNumbers(234, 345);

// Arrow Function Definition
// Using an arrow function to add two numbers

const addNumbersArrow = (num1, num2) => {
  console.log(num1 + num2);
};
addNumbersArrow(123, 456);

// Declaration of a variable without an initial value

var myName;
console.log(myName, typeof myName);

// Break: Exit the loop early

for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stops the loop when i equals 5
  }
  console.log(i); // prints the current value of i
}

// Continue: Skip the current iteration and move to the next one

for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skips the iteration when i equals 5
  }
  console.log(i); // prints the current value of i
}

// Function to find the count of even numbers between a starting and ending value

function evenCountNo(starting, ending) {
  var evenCount = 0;
  while (starting <= ending) {
    if (starting % 2 === 0) {
      evenCount++;
    }
    starting++;
  }
  console.log(`Even numbers count in the range: ${evenCount}`);
}

evenCountNo(1, 11);

// Notes:
// 1. A while loop runs a block of code as long as the given condition is true.
// 2. Functions are used to group code that performs a specific task, making it reusable.
// 3. The "break" statement exits the loop immediately, while the "continue" statement skips the current iteration and moves to the next one.
// 4. Arrow functions provide a shorter syntax for writing functions and are useful for anonymous functions or callbacks.
