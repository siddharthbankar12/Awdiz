// Multiply Two Numbers Without Using * Operator

function multiply(a, b) {
  let demo = a;

  for (let i = 1; i < b; i++) {
    demo += a;
  }

  return demo;
}
console.log(multiply(3, 4)); // Output: 12
console.log(multiply(-2, 6)); // Output: -12

// Find the Smallest of Three Numbers

function findSmallest(a, b, c) {
  let smallNo;

  if (a < b && a < c) {
    smallNo = a;
  } else if (b < a && b < c) {
    smallNo = b;
  } else {
    smallNo = c;
  }
  return smallNo;
}
console.log(findSmallest(3, 7, 5)); // Output: 3
console.log(findSmallest(10, -1, 0)); // Output: -1

// Reverse a String Without Using Built-in Methods

function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// Count the Occurrences of Each Character in a String

function charCount(str) {
  const emptyObj = {};
  for (let i = 0; i < str.length; i++) {
    var count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
      emptyObj[str[i]] = count;
    }
    // console.log([str[i]], count);
  }
  return emptyObj;
}
console.log(charCount("hellol")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(charCount("banana")); // Output: { b: 1, a: 3, n: 2 }

// Find the Intersection of Two Arrays

function arrayIntersection(arr1, arr2) {
  let empty = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        empty.push(arr1[i]);
      }
    }
  }
  return empty;
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(arrayIntersection([10, 20, 30], [15, 25, 30])); // Output: [30]
