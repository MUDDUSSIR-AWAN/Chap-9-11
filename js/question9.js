var check = "";
while (isNaN(check) || check <= 0) {
    check = +prompt("Enter a number checks whether it is an even number or an odd number :");
    if (isNaN(check)) {
        alert("Please Enter a number, not an alpabet.");
    }
    else if (check === 0) {
        alert("Enter a number Greater than 0");
    }
    else if (check < 0) {
        alert("Enter a positive number");
    }
}

if (check % 2 === 0) {
    console.log("Given number is even number");
}

else {
    console.log("Given number is odd number");
}
