let formPlace = document.getElementById("form");
let emailPlace = document.getElementById("mail");
let messagePlace = document.querySelector(".message");
formPlace.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = emailPlace.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    messagePlace.textContent = "Submited succesfully";
    messagePlace.className = "message success";
  } else {
    messagePlace.textContent = "Invalid Email";
    messagePlace.className = "message error";
  }
});
