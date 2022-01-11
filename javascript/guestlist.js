guestList= ["jackie", "dakota", "bea", "el", "tina", "tiff", "lindie"];

function checkGuest(yourName) {
    var yourName=prompt("What's your name?");
    if (guestList.includes(yourName)) {
        return "Please come in, " + yourName;
    }
    else {
        return "I'm sorry but your name, " + yourName + ", is not on the guest list.";
    }
}

checkGuest();
