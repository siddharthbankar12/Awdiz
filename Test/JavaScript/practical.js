// DSA Questions with Input & Output Examples

// 1. Reverse a String ✅ Input: "hello" → Output: "olleh" ✅ Input: "JavaScript" → Output: "tpircSavaJ"

const reverseString = (string) => {
  let reverse = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  return reverse;
};

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

// 2. First Non-Repeating Character ✅ Input: "aabbccd" → Output: "d" ✅ Input: "abcabcde" → Output: "d"

const nonRepeating = (string) => {
  let obj = {};
  let char = "";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    char = string[i];

    for (let j = 0; j < string.length; j++) {
      if (char === string[j]) {
        count++;
      }
    }

    obj[char] = count;

    count = 0;
  }

  for (let character in obj) {
    if (obj[character] === 1) {
      return character;
    }
  }
};

console.log(nonRepeating("aabbccd"));
console.log(nonRepeating("abcabcde"));

// 3. Two Sum Problem ✅ Input: [2, 7, 11, 15], target = 9 → Output: [0, 1] ✅ Input: [3, 2, 4], target = 6 → Output: [1, 2]

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

// 4. Find the Missing Number ✅ Input: [3, 0, 1] → Output: 2 ✅ Input: [0, 1, 2, 4, 5] → Output: 3

const missingNumber = (array) => {
  let largestNo = array[0];
  let missingNo = null;

  for (let i = 0; i < array.length; i++) {
    if (largestNo < array[i]) {
      largestNo = array[i];
    }
  }

  for (let i = 0; i <= largestNo; i++) {
    count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === i) {
        count = 1;
        break;
      }
    }

    if (count === 0) {
      missingNo = i;
      return missingNo;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1, 2, 4, 5]));

// 5. Longest Substring Without Repeating Characters ✅ Input: "abcabcbb" → Output: 3 ✅ Input: "bbbbb" → Output: 1

// 6. Merge Two Sorted Arrays ✅ Input: [1, 3, 5], [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6] ✅ Input: [0, 8, 10], [1, 9, 11] → Output: [0, 1, 8, 9, 10, 11]

const mergeSortedArray = (array1, array2) => {
  let mergeArray = [];

  for (let i = 0; i < array1.length; i++) {
    mergeArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    mergeArray.push(array2[i]);
  }

  for (let i = 0; i < mergeArray.length; i++) {
    for (let j = 0; j < mergeArray.length - i; j++) {
      if (mergeArray[j] > mergeArray[j + 1]) {
        let temp = mergeArray[j];
        mergeArray[j] = mergeArray[j + 1];
        mergeArray[j + 1] = temp;
      }
    }
  }

  return mergeArray;
};

console.log(mergeSortedArray([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArray([0, 8, 10], [1, 9, 11]));

// 7. Balanced Parentheses Check ✅ Input: "{[()]}" → Output: true ✅ Input: "{[(])}" → Output: false

// 8. Maximum Subarray Sum ✅ Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6 ✅ Input: [1] → Output: 1

// 9. Find the Intersection of Two Arrays
// ✅ Input: [1, 2, 2, 1], [2, 2] ✅ Output: [2, 2]
// ✅ Input: [4, 9, 5], [9, 4, 9, 8, 4] ✅ Output: [4, 9]

// const Intersection = (array1, array2) => {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         newArray.push(array2[j]);
//         array2[j] = null;
//         break;
//       }
//     }
//   }

//   return newArray;
// };

// console.log(Intersection([1, 2, 2, 1], [2, 2]));
// console.log(Intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// 10. Flatten a Nested Array ✅ Input: [1, [2, [3, 4], 5], 6] → Output: [1, 2, 3, 4, 5, 6] ✅ Input: [10, [20, [30, [40]]]] → Output: [10, 20, 30, 40]

// 11. Draw This pattern using while loop
// **
// *
// **
// *

// const drawPattern = () => {
//   let pattern = "";
//   let rows = 4;
//   let i = 1;

//   while (i <= rows) {
//     if (i % 2 !== 0) {
//       pattern += "* *\n";
//     } else {
//       pattern += "*\n";
//     }
//     i++;
//   }

//   console.log(pattern);
// };

// drawPattern();
