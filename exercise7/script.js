// let submitButton = document.getElementById("form");

// submitButton.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let textValue = document.getElementById("textInput").value;
//   alert(textValue);
// });

let submitButton = document.getElementById("form");

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  let textValue = document.getElementById("textInput").value;
  let length = textValue.length;
  if (length == 0) {
    return;
  }
  alert(textValue);
});

// Task: Using functions and events, build a simple calculator that can perform addition, subtraction, multiplication, and division. The calculator should have buttons for digits 0-9, the four operations, and an equals button to display the result.
// Bonus: Add a clear button that resets the calculator.
