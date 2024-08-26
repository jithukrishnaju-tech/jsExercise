let button = document.querySelector(".btn");
// button.addEventListener("click", () => alert("Button Clicked!"));

button.addEventListener("click", () => {
  alert("Button Clicked!");
  button.innerHTML = "clicked";
});
