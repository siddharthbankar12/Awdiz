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

function reverseNumber(num) {}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(-567)); // Output: -765

// Check if Two Strings are Anagrams

function isAnagram(str1, str2) {
  // Your code here
  console.log(str1.length);
}
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

//Find the First Non-Repeating Character

// function firstNonRepeatingChar(str) {}
// console.log(firstNonRepeatingChar("aabbccddeffg")); // Output: "g"
// console.log(firstNonRepeatingChar("hello")); // Output: "h"
