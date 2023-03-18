var secretNum = parseInt((Math.random() * 11).toFixed(0));

do {
    var guessNum = +prompt("Guess a secret number between 0 to 10");

    if (isNaN(guessNum)) {
        alert("Please Enter a number, Not an alphabet.")
    }
    else {
        if (guessNum >= 0 && guessNum <= 10) {
            if (guessNum === secretNum) {
                console.log("Bingo! Correct answer");
            }
            else if (Math.abs(guessNum - secretNum) <= 1) {
                console.log("Close enough to the correct answer");
            }
            else {
                console.log("Better luck next time.");
            }
        }
        else {
            alert("Please Enter a number between 0 to 10");
        }
    }
}
while (isNaN(guessNum) || guessNum <= 0 || guessNum >= 10);