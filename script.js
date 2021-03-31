var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();

css.textContent = color1.value + ", " + color2.value;

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function random() {
  var letters = "0123456789ABCDEF";
  var color01 = "#";
  var color02 = "#";
  for (var i = 0; i < 6; i++) {
    color01 += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 0; i < 6; i++) {
    color02 += letters[Math.floor(Math.random() * 16)];
  }
  body.style.background =
    "linear-gradient(to right, " + color01 + ", " + color02 + ")";
  css.textContent = body.style.background + ";";
  document.querySelector(".color1").value = color01;
  document.querySelector(".color2").value = color02;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", random);
