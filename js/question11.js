do {
    var firstNum = +prompt("Enter a First number :" , "5");
    var operation = prompt("What opertaion do you want to perform: \nFor Example : +, -, *, / or %." , "+");
    var secondNum = +prompt("Enter a Second number :" , "5");

    if (isNaN(firstNum)) {
        alert("Please Enter only a number, Not an alphabet.");
    }
    
    else if (isNaN(secondNum)) {
        alert("Please Enter only a number, Not an alphabet.");
    }

    else if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%") {
        alert("Enter only +, -, *, /, % ")
    }
    else {
        if (operation == "+") {
            console.log("First Number : " + firstNum);
            console.log("Second Number : " + secondNum);
            console.log("Operation : " + operation);
            console.log("Result : " + (firstNum + secondNum));
        }

        else if (operation == "-") {
            console.log("First Number : " + firstNum);
            console.log("Second Number : " + secondNum);
            console.log("Operation : " + operation);
            console.log("Result : " + (firstNum - secondNum));
        }

        else if (operation == "*") {
            console.log("First Number : " + firstNum);
            console.log("Second Number : " + secondNum);
            console.log("Operation : " + operation);
            console.log("Result : " + (firstNum * secondNum));
        }

        else if (operation == "/") {
            console.log("First Number : " + firstNum);
            console.log("Second Number : " + secondNum);
            console.log("Operation : " + operation);
            console.log("Result : " + (firstNum / secondNum));
        }

        else if (operation == "%") {
            console.log("First Number : " + firstNum);
            console.log("Second Number : " + secondNum);
            console.log("Operation : " + operation);
            console.log("Result : " + (firstNum % secondNum));
        }
    }
}
while (isNaN(firstNum) || isNaN(secondNum) || (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%"));
