//Task: Create a button that toggles the visibility of a paragraph of text. When the paragraph is visible, the button should say "Hide Text"; when the paragraph is hidden, the button should say "Show Text".
// Bonus: Animate the transition between showing and hiding the text.
let textField = document.querySelector(".text");
let buttonSelector = document.querySelector(".btn");
buttonSelector.addEventListener("click", (event) => {
  const buttonText = event.target.textContent || event.target.innerText;
  alert(buttonText);
  if (buttonText == "Hide") {
    textField.style.display = "none";
    buttonSelector.textContent = "Show";
    return;
  }
  if (buttonText == "Show") {
    textField.style.display = "";
    buttonText.textContent = "Hide";
    return;
  }
});
