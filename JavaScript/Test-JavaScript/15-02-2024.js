// 1. binary target

var arr = [1, 2, 3, 4, 5, 6];

var target = 7;

function binaryTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midIdx = Math.floor(left + right / 2);
    let midEle = nums[midIdx];

    if (target == midEle) {
      console.log("element found");
      break;
    } else if (target < midEle) {
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }
  console.log("not found");
}

binaryTarget(arr, target);

// 2. Find the Second Smallest Number in an Array

function secondSmallest(arr) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
}
console.log(secondSmallest([4, 1, 6, 2, 8])); // Output: 2
console.log(secondSmallest([10, 20, 30, 5, 7])); // Output: 7

// 3. Reverse Words in a Sentence Without Using Built-in Methods
function reverseWords(sentence) {
  let result = "";
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (i < sentence.length && sentence[i] !== " ") {
      word = sentence[i] + word;
    } else {
      if (result.length > 0) {
        result += " ";
      }
      result += word;
      word = "";
    }
  }

  return result;
}

console.log(reverseWords("hello world")); // Output: "olleh dlrow"
console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"

// 4. Find the Missing Number in an Array

function findMissingNumber(arr, n) {
  let count = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === count) {
      count++;
      continue;
    } else {
      return count;
    }
  }
}
console.log(findMissingNumber([1, 4, 5], 5)); // Output: 3
console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); // Output: 2

function multipleMissNo(arr, n) {
  let missingNumbers = [];
  let count = 1;
  let i = 0;

  while (count <= n) {
    if (i < arr.length && arr[i] === count) {
      i++;
    } else {
      missingNumbers.push(count);
    }
    count++;
  }

  return missingNumbers;
}

console.log(multipleMissNo([1, 4, 5], 5)); // Output: [2, 3]

// 5. Implement a String Compression Algorithm

function compressString(str) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed = compressed + str[i] + count;
      count = 1;
    }
  }

  return compressed;
}
console.log(compressString("aaabbcddd")); // Output: "a3b2c1d3"
console.log(compressString("abc")); // Output: "a1b1c1"
console.log(compressString("aabbccddeee")); // Output: "a2b2c2d2e3"
