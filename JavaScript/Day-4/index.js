// Print numbers from 10 to 1 using a `for` loop

for (var number = 10; number > 0; number--) {
  console.log(number);
}

// 1st iteration: number = 10 -> prints 10, number decreases to 9
// 2nd iteration: number = 9 -> prints 9, number decreases to 8

// Print numbers from 100 to 0, decrementing by 10

for (var i = 100; i >= 0; i -= 10) {
  console.log(i);
}

// counting down by 1 from 5
for (var i = 5; i > 0; i -= 1) {
  console.log(i);
}

// Explanation of 5 to 1 countdown:
// 1st iteration: i = 5 -> prints 5, i decreases to 4
// 2nd iteration: i = 4 -> prints 4, i decreases to 3

// Given a range from 23 to 56, print even numbers

for (var i = 23; i <= 56; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Given a range from 23 to 56, count odd numbers

var count = 0;
for (var i = 23; i <= 56; i++) {
  if (i % 2 !== 0) {
    console.log("Found odd number", i);
    count++;
  }
}
console.log(count, "count");

// Given a range from 43 to 11, count even numbers
var count = 0;
for (var i = 43; i >= 11; i--) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count);
