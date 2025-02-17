// Basic Level

// 1. Write a for loop to print numbers from 1 to 10.

console.log("print numbers from 1 to 10");

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use a for loop to print all even numbers between 1 and 20.

console.log("print all even numbers between 1 and 20");

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Write a loop to calculate the sum of the first 10 natural numbers.

var naturalNumber = 0;
for (var i = 0; i <= 10; i++) {
  naturalNumber += i;
}
console.log(`the sum of the first 10 natural numbers is ${naturalNumber}`);

// 4. Use a for loop to print all numbers divisible by 5 between 1 and 50.

console.log("print all numbers divisible by 5 between 1 and 50");

for (var i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 5. Write a loop to calculate the factorial of a given number.

var number = 5;
var factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`factorial of ${number} is ${factorial}`);

// 6. Use a for loop with a conditional to print all odd numbers between 1 and 20.

console.log("print all odd numbers between 1 and 20.");

for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 7. Write a loop to calculate the sum of all even numbers between 1 and 100.

var sumEven = 0;

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log(`sum of all even numbers between 1 and 100 is ${sumEven}`);

// 8. Use a loop to check if a given number is prime.

var number = 4;
var isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}

// 9. Write a for loop to reverse the digits of a number (e.g., input: 123, output: 321).

var number = 123;
var reversedNumber = "";

for (var temp = number.toString(); 0 < temp.length; temp = temp.slice(0, -1)) {
  var lastDigit = temp[temp.length - 1];
  reversedNumber += lastDigit;
}

console.log(`reversed number of ${number} is ${parseInt(reversedNumber)}`);

// 10. Create a for loop to find the smallest number in an array.

var numbers = [45, 12, 78, 34, 89, 5, 23];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log(`smallest number is: ${smallest}`);

// Intermediate Level

// 11. Write a for loop to count the number of vowels in a string.

var str = "Hello World!";
var vowels = "aeiouAEIOU";
var count = 0;

for (var i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log(`the number of vowels in the string is: ${count}`);

// 12. Use a loop to find the largest number in an array.

var numbers = [45, 12, 78, 34, 89, 5, 23];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(`the largest number is: ${largest}`);

// 13. Write a loop to calculate the sum of numbers in an array.

var numbers = [1, 2, 3, 4, 5];
var sumNumber = 0;

for (var i = 0; i < numbers.length; i++) {
  sumNumber += numbers[i];
}

console.log(`sum of numbers in an array is: ${sumNumber}`);

// 14. Use a for loop to print all elements of an array in reverse order.

var arr = [10, 20, 30, 40, 50];
var reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log("Original Array:", arr);
console.log("Reversed Array:", reversedArr);

// 15. Write a loop to generate a multiplication table for a given number.

var num = 5;

for (var i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 16. Use a loop and conditionals to print the Fibonacci sequence up to n terms.

function fibonacci(n) {
  var a = 0,
    b = 1;

  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacci(10);

// 17. Write a program to check if a given string is a palindrome using loops.

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      console.log("Not a palindrome");
      return;
    }

    start++;
    end--;
  }

  console.log("Palindrome");
}

isPalindrome("abcba");
isPalindrome("JavaScript");

// 18. Use a for loop to find all perfect squares between 1 and 100.

var arr = [];

for (let i = 1; i <= 100; i++) {
  let sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt)) {
    arr.push(i);
  }
}

console.log(arr);

// 19. Write a loop to find the second-largest number in an array.

var arr = [10, 12, 84, 35, 16];

console.log(arr);

arr.sort((a, b) => b - a);

console.log(`second-largest number in an array is ${arr[1]}`);

// 20. Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100.

console.log("print all numbers divisible by both 3 and 5 between 1 and 100.");

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
