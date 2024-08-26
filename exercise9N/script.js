document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("textContainer");
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    if (textContainer.classList.contains("hidden")) {
      textContainer.classList.remove("hidden");
      toggleButton.textContent = "Hide Text";
    } else {
      textContainer.classList.add("hidden");
      toggleButton.textContent = "Show Text";
    }
  });
});
