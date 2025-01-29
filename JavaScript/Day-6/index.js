//Traditional Function

function traditionalFunction(props) {
  console.log(props);
}
traditionalFunction("traditional function");

// Arrow Function

const arrowFunction = (props) => {
  console.log(props);
};
arrowFunction("arrow function");

// Arrow Function Compact

const arrowFunctionCompact = (props) => console.log(props);
arrowFunctionCompact("arrow function compact");

// Finding Odd and Even Numbers Count in a Range

const findOddEvenNumbersCount = (start, end) => {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  console.log(`Even Numbers Count: ${evenCount}`);
  console.log(`Odd Numbers Count: ${oddCount}`);
};

findOddEvenNumbersCount(1, 10);

// Arrays

let myNumbers = ["hello", true, false, "Awdiz", 1, 2, 3, 4, 5, 5, 6, 7];

console.log(myNumbers);
console.log(myNumbers[0], "first element");
console.log(myNumbers[1], "second element");
console.log(myNumbers[myNumbers.length - 1], "last element");
console.log("Total Elements:", myNumbers.length);

console.log(
  "middle element:",
  myNumbers[Math.floor((myNumbers.length - 1) / 2)]
);

// 1. Math.floor(value)
// Rounds down a number to the nearest integer.
// It always moves towards the lower integer.

console.log(Math.floor(5.5)); // Outputs: 5

// 2. Math.ceil(value)
// Rounds up a number to the nearest integer.
// It always moves towards the higher integer.

console.log(Math.ceil(5.5)); // Outputs: 6

console.log(Math.ceil((myNumbers.length - 1) / 2));

// Print All Elements in an Array
let myData = [1, 2, 3, 4, "hello", "hi", true, 23, 34, 53, "shadow"];

const printAllElements = (array) => {
  console.log("Array Data:", array);

  for (let i = 0; i < array.length; i++) {
    console.log(`index ${i}:`, array[i]);
  }
};

printAllElements(myData);

// Finding Eligible Users Based on Age

let usersAge = [23, 12, 23, 44, 5, 76, 12, 33, 22, 18, 17, 23, 34, 89];

const findEligibleUsers = (ages) => {
  let eligibleCount = 0;
  let notEligibleCount = 0;
  let learningLicenseCount = 0;

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
      eligibleCount++;
    } else if (ages[i] === 18) {
      learningLicenseCount++;
    } else {
      notEligibleCount++;
    }
  }

  console.log(`Eligible Users (Above 18): ${eligibleCount}`);
  console.log(`Not Eligible Users (Below 18): ${notEligibleCount}`);
  console.log(`Learning License (Exactly 18): ${learningLicenseCount}`);
};

findEligibleUsers(usersAge);

// write a function to find odd, even, prime, number from an array

const practiceArray = [12, 20, 25, 1, 31, 17, 7, 9, 8, 72, 78, 2, 10, 1, 80];

const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
  }
  return true;
};

const findOddEvenPrime = (input) => {
  let oddCount = 0,
    evenCount = 0,
    primeCount = 0;

  let oddArray = [],
    evenArray = [],
    primeArray = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evenArray.push(input[i]);
      evenCount++;
    } else {
      oddArray.push(input[i]);
      oddCount++;
    }

    if (isPrime(input[i])) {
      primeArray.push(input[i]);
      primeCount++;
    }
  }

  console.log(`Odd Count: ${oddCount}, Values: [${oddArray}]`);
  console.log(`Even Count: ${evenCount}, Values: [${evenArray}]`);
  console.log(`Prime Count: ${primeCount}, Values: [${primeArray}]`);
};

findOddEvenPrime(practiceArray);
