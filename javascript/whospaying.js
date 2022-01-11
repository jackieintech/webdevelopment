let names= ["Jackie", "Angela", "Brian"];
function whosPaying() {
    let count = Math.floor((Math.random()) * (names.length));
    return names[count] + " is going to buy lunch today!";
}
