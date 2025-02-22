// Find the Third Largest Number in an Array

function thirdLargest(arr) {
  // Your code here
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return third;
}
console.log(thirdLargest([4, 1, 6, 2, 8, 10])); // Output: 6
console.log(thirdLargest([10, 20, 30, 5, 7])); // Output: 10

// Reverse a Number

function reverseNumber(num) {
  let reversed = 0;

  let isNegative = num < 0 ? -1 : 1;
  num = num * isNegative;

  while (num > 0) {
    let digit = num % 10; // Extract last digit
    reversed = reversed * 10 + digit; // Append digit to reversed number
    num = (num - digit) / 10; // Remove last digit
  }

  return reversed * isNegative;
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(-567)); // Output: -765

// Check if Two Strings are Anagrams

function isAnagram(str1, str2) {
  // Your code here
  let empty = "";
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        empty = empty + str2[j];
        continue;
      }
    }
  }

  // console.log(empty);

  if (str1 === empty) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

// Find the First Non-Repeating Character

function firstNonRepeatingChar(str) {
  let count = 1;
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      obj[str[i]] = count;
      count = 1;
    }
  }
  // console.log(obj);

  for (let nonRepeat in obj) {
    if (obj[nonRepeat] === 1) {
      return nonRepeat;
    }
  }
}
console.log(firstNonRepeatingChar("aabbccddeffg")); // Output: "e"
console.log(firstNonRepeatingChar("hello")); // Output: "h"

// Find the Longest Word in a Sentence

function longestWord(sentence) {
  // Your code here

  let word = "";

  let obj = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      obj[word] = word;
      word = "";
    } else {
      word = word + sentence[i];
    }
  }

  let maxLength = "";

  for (let check in obj) {
    if (obj[check].length > maxLength.length) {
      maxLength = obj[check];
    }
  }

  return maxLength;
}
console.log(longestWord("JavaScript is an amazing language")); //
Output: "JavaScript";
console.log(longestWord("I love coding")); // Output: "coding"
