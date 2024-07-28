let calculation = localStorage.getItem("calculation") || "";
displayCalculation();

function updateCalculation(value) {
  localStorage.setItem("calculation", (calculation += value));
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = `${calculation}`;
  console.log(calculation);
}
