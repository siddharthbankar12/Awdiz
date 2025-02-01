// 1. Swap Two Variables Without Using a Third Variable

let a = 6,
  b = 9;

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a} , b = ${b}`);

// 2. Find the Largest of Three Numbers

function findLargest(a, b, c) {
  var largestNo;

  if (a >= b && a >= c) {
    largestNo = a;
  } else if (b >= c && b >= a) {
    largestNo = b;
  } else {
    largestNo = c;
  }
  return largestNo;
}
console.log(findLargest(3, 7, 5));

// 3. Check If a Number is Prime

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// 4. Reverse an Array Without Using Built-in Methods

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[arr.length - 1 - i] = arr[i];
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4]));

// 5. Sum of Even Numbers in an Array

function sumEvenNumbers(arr) {
  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count += arr[i];
    }
  }

  return count;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// 6. Count the Number of Vowels in a String

function countVowels(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hello world"));

// 7. Find the Second Largest Number in an Array

function secondLargest(arr) {
  var sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    var sortedArrayCon = false;

    for (let j = 0; j < sortedArray.length; j++) {
      if (arr[i] > sortedArray[j]) {
        sortedArray.splice(j, 0, arr[i]);
        sortedArrayCon = true;
        break;
      }
    }

    if (!sortedArrayCon) {
      sortedArray.push(arr[i]);
    }
  }

  //   console.log(sortedArray);

  return sortedArray[1];
}
console.log(secondLargest([10, 20, 4, 45, 99]));

// 8. Remove Duplicates from an Array

function removeDuplicates(arr) {
  let updatedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < updatedArray.length; j++) {
      if (arr[i] === updatedArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      updatedArray.push(arr[i]);
    }
  }
  return updatedArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 9. Find Factorial of a Number (Using Loop)

function factorial(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));

// 10. Check if an Array is Sorted (Ascending Order)

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 4, 5]));
