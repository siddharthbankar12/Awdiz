// Move All Zeros to the End of an Array

function zeroMove(array) {
  let nonZero = [];
  let zeroCount = 0;

  //   let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      nonZero.push(array[i]);
    } else {
      zeroCount += 1;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    nonZero.push(0);
  }

  return nonZero;
}

console.log(zeroMove([0, 0, 1, 0, 5]));

// Generate All Substrings of a Given String

function generateAllSubstring(string) {
  let arrayString = [];

  let subString = "";

  for (let i = 0; i < string.length; i++) {
    subString = string[i];
    arrayString.push(subString);
    for (let j = i + 1; j < string.length; j++) {
      subString += string[j];
      arrayString.push(subString);
    }
    subString = "";
  }

  return arrayString;
}

console.log(generateAllSubstring("dog"));

// Convert a Roman Numeral to an Integer

function romanToInteger(roman) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = values[roman[i]];
    let next = values[roman[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }

    // total = total + current;
  }

  return total;
}

console.log(romanToInteger("XII")); // Output: 12
console.log(romanToInteger("IX")); // Output: 9
console.log(romanToInteger("MCMXCIV")); // Output: 1994
