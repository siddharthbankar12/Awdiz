// If-Else Questions

// 1. Write a program to check if a given number is even or odd.

let numEvenOdd = 21;

if (numEvenOdd % 2 == 0) {
  console.log(`${numEvenOdd} is even`);
} else {
  console.log(`${numEvenOdd} is odd`);
}

// 2. Write a program to check if a person is eligible to vote based on their age.

let voteAge = 17;

if (voteAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("not eligible to vote");
}

// 3. Write a program to find the largest of three numbers.

let num1 = 15;
let num2 = 35;
let num3 = 25;

if (num1 >= num2 && num1 >= mum3) {
  console.log(`largest no is ${num1}`);
} else if (num2 >= num3 && num2 >= num1) {
  console.log(`largest no is ${num2}`);
} else {
  console.log(`largest no is ${num3}`);
}

// 4. Write a program to determine if a given year is a leap year or not.

let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// 5. Write a program to check if a character is a vowel or consonant.

let char = "1";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log(`${char} is a vowel.`);
} else if (char >= "a" && char <= "z") {
  console.log(`${char} is a consonant.`);
} else {
  console.log(`${char} is not alphabet.`);
}

// 6. Write a program to classify a number as positive, negative, or zero.

let numPoNe = -5;

if (numPoNe > 0) {
  console.log(`${numPoNe} is a positive number.`);
} else if (numPoNe < 0) {
  console.log(`${numPoNe} is a negative number.`);
} else {
  console.log(`${numPoNe} is zero.`);
}

// 7. Write a program to determine whether a student passed or failed based on their score (pass mark: 40).

let examScore = 55;

if (examScore >= 40) {
  console.log("The student passed.");
} else {
  console.log("The student failed.");
}

// 8. Write a program to calculate the grade of a student based on the following conditions:

// Score >= 90: Grade A

// Score >= 80: Grade B

// Score >= 70: Grade C

// Score < 70: Grade F

let scoreStudent = 85; // Example score

let studentGrade;

if (scoreStudent >= 90) {
  studentGrade = "A";
} else if (scoreStudent >= 80) {
  studentGrade = "B";
} else if (scoreStudent >= 70) {
  studentGrade = "C";
} else {
  studentGrade = "F";
}

console.log(`The student's grade is: ${studentGrade}`);

// 9. Write a program to check if a given string contains the word "JavaScript".

let str = "I am learning JavaScript.";

if (str.includes("JavaScript")) {
  console.log("The string contains the word 'JavaScript'.");
} else {
  console.log("The string does not contain the word 'JavaScript'.");
}

// 10. Write a program to validate if a number is within the range of 10 and 100 (inclusive).

let numRange = 50;

if (numRange >= 10 && numRange <= 100) {
  console.log(`${numRange} is within the range of 10 and 100.`);
} else {
  console.log(`${numRange} is outside the range of 10 and 100.`);
}

// Switch Questions

// 1. Write a program to print the day of the week based on a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).

let dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("error, please enter no btw 1 to 7.");
}

// 2. Write a program to perform basic arithmetic operations (add, subtract, multiply, divide) based on a user's choice.

let numOne = 10;
let numTwo = 5;
let operation = "add";

let result;

switch (operation) {
  case "add":
    result = numOne + numTwo;
    console.log(`The result of addition is: ${result}`);
    break;
  case "subtract":
    result = numOne - numTwo;
    console.log(`The result of subtraction is: ${result}`);
    break;
  case "multiply":
    result = numOne * numTwo;
    console.log(`The result of multiplication is: ${result}`);
    break;
  case "divide":
    if (numTwo !== 0) {
      result = numOne / numTwo;
      console.log(`The result of division is: ${result}`);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
    break;
  default:
    console.log("error, please choose correct operation.");
}

// 3. Write a program to display the season based on the month number (1-12).

let month = 4;

let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    season = "error, please enter a no btw 1 to 12.";
}

console.log(`The season for month ${month} is: ${season}`);

// 4. Write a program to check the type of vehicle based on the user’s input (car, bike, bus, etc.).

let vehicle = "car";

let vehicleType;

switch (vehicle) {
  case "car":
    vehicleType = "Four-wheeler";
    break;
  case "bike":
    vehicleType = "Two-wheeler";
    break;
  case "bus":
    vehicleType = "Four-wheeler, Public Transport";
    break;
  case "truck":
    vehicleType = "Heavy-duty Vehicle";
    break;
  default:
    vehicleType = "error, please enter valid vehicle name.";
}

console.log(`vehicle type for "${vehicle}" is ${vehicleType}`);

// 5. Write a program to determine if a character is a vowel or consonant using switch statements.

let charSwitch = "a";

let resultSwitch;

switch (charSwitch) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    resultSwitch = `${charSwitch} is a vowel.`;
    break;
  default:
    resultSwitch = `${charSwitch} is a consonant.`;
}

console.log(resultSwitch);
