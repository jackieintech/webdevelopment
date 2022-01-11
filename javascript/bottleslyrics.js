function bottlesLyrics() {
    var numberBottles = 99;
    while (numberBottles >= 1 && numberBottles <= 99) {
        if (numberBottles > 2) {
        console.log(numberBottles + " bottles of beer on the wall, " + numberBottles +
        " bottles of beer. Take one down and pass it around, " + (numberBottles-1) +
        " bottles of beer on the wall.");
        }
        else if (numberBottles == 2) {
        console.log(numberBottles + " bottles of beer on the wall, " + numberBottles +
        " bottles of beer. Take one down and pass it around, " + (numberBottles-1) +
        " bottle of beer on the wall.");
        }
        else {
        console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        numberBottles--;
    }

}

// for loop

function bottlesLyrics() {
    var numberBottles = 99;
    for (numberBottles = 99; numberBottles >= 1 && numberBottles <= 99; numberBottles--) {
        if (numberBottles > 2) {
        console.log(numberBottles + " bottles of beer on the wall, " + numberBottles +
        " bottles of beer. Take one down and pass it around, " + (numberBottles-1) +
        " bottles of beer on the wall.");
        }
        else if (numberBottles == 2) {
        console.log(numberBottles + " bottles of beer on the wall, " + numberBottles +
        " bottles of beer. Take one down and pass it around, " + (numberBottles-1) +
        " bottle of beer on the wall.");
        }
        else {
        console.log(numberBottles + " bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    }

}


// Angela's

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
  numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
