let value = document.querySelector(".value");
const buttons = document.querySelectorAll("button");
let counter = 0;

buttons.forEach((btn) => btn.addEventListener("click", updateCounter));

function updateCounter(event) {
  buttonValue = event.target.textContent;

  if (buttonValue === "Addition") {
    counter++;
    value.textContent = counter;
  } else if (buttonValue === "Substract") {
    counter--;
    value.textContent = counter;
  } else {
    counter = 0;
    value.textContent = counter;
  }

  if (value.textContent > 0) {
    value.style.color = "green";
  } else if (value.textContent < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#fff";
  }
}

console.log("Hello follow me on github: " + '"https://github.com/causadev" 💖');
