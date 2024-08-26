//-------------------------------------------------------------------------
//EXERCISE 1
//Exercise 1: Create a Simple Function
// Task: Write a function named calculateSum that takes two numbers as arguments and returns their sum.
// Bonus: Create another function named displaySum that uses calculateSum and displays the result using alert.
//-------------------------------------------------------------------------
// function calculateSum(a, b) {
//   return a + b;
// }
// function displaySum(a, b) {
//   let sum = calculateSum(a, b);
//   console.log(sum);
//   alert(sum);
// }
// displaySum(3, 4);

//-------------------------------------------------------------------------
//EXERCISE 2
//Exercise 2: Function Expression
// Task: Convert the calculateSum function from the previous exercise into a function expression.
// Bonus: Use this function expression to calculate the sum of two numbers entered by the user via prompt.
//-------------------------------------------------------------------------

// let calculateSum = function (a, b) {
//   return a + b;
// };
// let a = Number(prompt("Enter number"));
// let b = Number(prompt("Enter number"));
// console.log(calculateSum(a, b));

//-------------------------------------------------------------------------
//EXERCISE 3
//Exercise 3: Arrow Functions
// Task: Write an arrow function named multiplyNumbers that takes two numbers as arguments and returns their product.
// Bonus: Use the arrow function inside another function named calculateProduct that prompts the user for two numbers and then displays the product using alert.
//-------------------------------------------------------------------------

let multiplyNumbers = (a, b) => a * b;
let calculateProduct = function () {
  let a = Number(prompt("Enter number"));
  let b = Number(prompt("Enter number"));
  alert(`Product of ${a} and ${b} is ${multiplyNumbers(a, b)}`);
};
calculateProduct();
