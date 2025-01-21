// Logical and Conditional Operators Explanation and Examples

// Logical Operators
// && (AND): All conditions must be true to return true.
console.log(2 == 2 && 2 == 2 && 2 == 2); // Output: true

// || (OR): At least one condition must be true to return true.
console.log(2 == 3 || 2 == 3 || 2 == 3); // Output: false

// ! (NOT): Inverts the truth value.
console.log(!true); // Output: false
console.log(!false); // Output: true

// Short-Circuiting in Logical Operators
console.log(false && console.log("This won't print")); // Output: false
console.log(true || console.log("This won't print")); // Output: true

// Chained Logical Operators (Precedence: && > ||)
console.log(true || false && false); // Output: true

// Arithmetic Operators
let number = 100;
number++; // Post-increment: Returns the value first, then increments
console.log(number); // Output: 101

number = 100;
console.log(++number); // Pre-increment: Increments first, then returns the value (Output: 101)

number = 100;
number = number + 1;
number += 34;
console.log(number); // Output: 135

number = 100;
number--; // Post-decrement: Returns the value first, then decrements
console.log(number); // Output: 99

number = 100;
console.log(--number); // Pre-decrement: Decrements first, then returns the value (Output: 99)

number = 100;
number = number - 1;
number -= 1;
console.log(number); // Output: 98

// Modulus Operator
console.log(16 % 2 == 0); // Output: true (16 is even)
console.log(17 % 2 == 0); // Output: false (17 is odd)

// Ternary Operator
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor"); // Output: Adult

// Conditional Statements
// if-else
if (2 == 2) {
  console.log("Given numbers are same, inside if.");
} else if (2 == 3) {
  console.log("Given numbers are same, inside else if.");
} else {
  console.log("None of conditions are same, inside else.");
}

// Example: Checking even or odd number
let userEnteredNumber = 3234;
if (userEnteredNumber % 2 == 1) {
  console.log("Provided Number is odd.");
} else {
  console.log("Provided Number is even.");
}

// Example: Driving License Eligibility
let userAge = 14;
if (userAge > 18 && userAge <= 80) {
  console.log("You are allowed for a Driving License (DL). ");
} else if (userAge === 18) {
  console.log("You are allowed for a Learning License (LL). ");
} else {
  console.log("You are NOT allowed for a Driving License (DL) or Learning License (LL). ");
}

// Comparison Operators Examples
console.log(2 <= 2); // Output: true
console.log(2 >= 2); // Output: true
console.log(2 == "2"); // Output: true (Loose equality, type coercion)
console.log(2 === "2"); // Output: false (Strict equality, no type coercion)

// Switch Statement
let userSelectedFruit = "Strawberry";
switch (userSelectedFruit) {
  case "Apple":
    console.log("User selected fruit is Apple.");
    break;
  case "Strawberry":
    console.log("User selected fruit is Strawberry.");
    break;
  case "Banana":
    console.log("User selected fruit is Banana.");
    break;
  default:
    console.log("None of fruit is available..");
}

// Nested Switch Example
let category = "Fruit";
let item = "Apple";
switch (category) {
  case "Fruit":
    switch (item) {
      case "Apple":
        console.log("Category: Fruit, Item: Apple");
        break;
      case "Banana":
        console.log("Category: Fruit, Item: Banana");
        break;
      default:
        console.log("Item not recognized in Fruit category.");
    }
    break;
  case "Vegetable":
    console.log("Category: Vegetable");
    break;
  default:
    console.log("Category not recognized.");
}
