//-------------------------------------------------------------------------
//EXERCISE 1
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
//-------------------------------------------------------------------------

// let calculateSum = function (a, b) {
//   return a + b;
// };
// let a = Number(prompt("Enter number"));
// let b = Number(prompt("Enter number"));
// console.log(calculateSum(a, b));

//-------------------------------------------------------------------------
//EXERCISE 3
//-------------------------------------------------------------------------

let multiplyNumbers = (a, b) => a * b;
let calculateProduct = function () {
  let a = Number(prompt("Enter number"));
  let b = Number(prompt("Enter number"));
  alert(`Product of ${a} and ${b} is ${multiplyNumbers(a, b)}`);
};
calculateProduct();
