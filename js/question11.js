var firstNum;
while (isNaN(firstNum)) {
    firstNum = +prompt("Enter a First number :" , 5);
    if (isNaN(firstNum)) {
        alert("Please Enter only a number, Not an alphabet.");
    }
}

var operation;
while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%") {
    operation = prompt("What opertion do you want to perform: \nFor Example : +, -, *, / or %.", "+");
    if (!["+", "-", "*", "/", "%"].includes(operation)) {
        alert("Enter only +, -, *, /, % ");
    }
}


var secondNum;
while (isNaN(secondNum)) {
    secondNum = +prompt("Enter a Second number :" , 5);
    if (isNaN(secondNum)) {
        alert("Please Enter only a number, Not an alphabet.");
    }
}

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

