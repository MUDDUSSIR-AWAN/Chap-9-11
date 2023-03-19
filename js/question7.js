var secretNum = Math.floor(Math.random() * 11);

var guessNum;

while (isNaN(guessNum) || guessNum <= 0 || guessNum >= 10) {
    guessNum = +prompt("Guess a secret number between 0 to 10");
    if (isNaN(guessNum)) {
        alert("Please Enter a number, Not an alphabet.");
    }
    else if (guessNum <= 0 || guessNum >= 10) {
        alert("Please Enter a number between 0 to 10.");
    }
}

if (guessNum >= 0 && guessNum <= 10) {
    if (guessNum === secretNum) {
        console.log("%cBingo! ", "font-weight: bold;");
        console.log("Correct answer.");
    }
    else if (guessNum + 1 === secretNum || guessNum - 1 === secretNum) {
        console.log("Close enough to the correct answer.");
        console.log("Correct answer is : " + secretNum);
    }
    else {
        console.log("Better luck next time.");
        console.log("Correct answer is : " + secretNum);
    }
}

