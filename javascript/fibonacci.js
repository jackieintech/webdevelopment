function fibonacciGenerator () {
    var i = 0;
    var fibonacciSequence = []
    var n= fibonacciSequence.length;
    for(var i=0; i < n; i++) {
      if (n === 1) {
        fibonacciSequence.push(0);
      }
      else if (n===2) {
        fibonacciSequence.push(1);
      }
      else {
        var newNumber = fibonacciSequence[n-2] + fibonacciSequence[n-1];
        console.log(newNumber);

      }
    // var newNumber = fibonacciSequence.length-1 + fibonacciSequence.length;
    // console.log(newNumber);
    // fibonacciSequence.push(newNumber);
    // console.log(fibonacciSequence);
    }
}
