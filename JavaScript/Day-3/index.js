// A loop helps to execute a block of code multiple times

// 1. `for` loop: A counter-controlled loop

for (var number = 1; number <= 10; number++) {
  console.log(number);
}

for (var number = 20; number <= 100; number += 10) {
  console.log(number);
}

for (var number = 100; number <= 1000; number += 100) {
  console.log(number);
}

for (var number = 1; number <= 5; number++) {
  console.log("Hi");
}

// 2. `for` loop - Printing "Hi" and number with a step of 2
for (var number = 1; number <= 12; number += 2) {
  console.log("Hi", number, true);
}

// ============================
// Explanation of Iterations in the `for` Loop
// ============================

// First Iteration:
// var number = 1
// number <= 10 -> true
// console.log(number) -> 1
// number++ -> 1 -> 2

// Second Iteration:
// var number = 2
// number <= 10 -> true
// console.log(number) -> 2
// number++ -> 2 -> 3

// Third Iteration:
// var number = 3
// number <= 10 -> true
// console.log(number) -> 3
// number++ -> 3 -> 4

// Continue until number becomes 10

// Last Iteration:
// var number = 10
// number <= 10 -> true
// console.log(number) -> 10
// number++ -> 10 -> 11

// After that:
// number <= 10 -> false
// Loop ends
