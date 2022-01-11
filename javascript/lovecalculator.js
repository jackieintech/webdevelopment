var yourName=prompt("What's your name?");
var crushName=prompt("What's your crush's name?");

function loveCalculator() {
var n = Math.random()*100;
n = Math.floor(n) +1;
alert(yourName + " and " + crushName + " have " + n + "% compatibility.");
}

loveCalculator();
