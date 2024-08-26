document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".calc-button");
  const equalsButton = document.getElementById("equals");
  const clearButton = document.getElementById("clear");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      appendToDisplay(this.dataset.value);
    });
  });

  equalsButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clearDisplay);

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
});
