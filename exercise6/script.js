let divSelected = document.getElementById("myDiv");
divSelected.addEventListener("click", (e) => {
  console.log(e.target.id);
  let xCordinate = e.clientX;
  let yCordinate = e.clientY;
  console.log(`X cordinate = ${xCordinate} Y cordinate = ${yCordinate}`);
});
