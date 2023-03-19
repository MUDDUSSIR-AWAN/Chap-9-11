do {
    var temp = +prompt("Enter a Temperature between 0 to 40");

    if (isNaN(temp)) {
        alert("Please Enter a number, not an alphabet");
    }
    else {
        if (temp >= 10 && temp <= 80) {
            if (temp >= 40) {
                console.log("It is too hot outside.");

            }

            else if (temp >= 30) {
                console.log("The Weather today is Normal.");
            }

            else if (temp >= 20) {
                console.log("Today’s Weather is cool.");
            }
            else if (temp >= 10) {
                console.log("OMG! Today’s weather is so Cool");
            }
        }
        else {
            alert("Please Enter a temperature between 0 to 80.");
        }
    }
}
while(isNaN(temp) || temp > 80 || temp < 10);