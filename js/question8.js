do {
    var num = +prompt("PLease Enter a number to check whether the number is divisible by 3 or not");

    var check = parseInt(num % 3);

    if (isNaN(num)) {
        alert("Please enter a number, not an alphabet");
    }
    else {
        if (num > 0) {
            if (check == 0) {
                console.log("Given number is divisible by 3.");
            }
            else {
                console.log("Given number is not divisible by 3.");
            }
        }
        else if (num === 0) {
            alert("undefined, Enter a number greater than 0");
        }
        else {
            alert("Please Enter a postive number");
        }
    }
}
while (isNaN(num) || num === 0 || num < 0);