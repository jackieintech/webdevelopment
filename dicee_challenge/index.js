document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

var randomNumber1 = Math.floor(6*(Math.random())) +1;
var randomNumber2 = Math.floor(6*(Math.random())) +1;
var randomImage= "images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML="That's a draw!";
}
