console.log("%cSignal color        "  + "Message" , "font-weight: bold;")
do {
    var color1 = prompt("Enter the First color of road traffic signal", "red");

    if (color1.toLowerCase() === "red") {
        console.log(color1 + "                 Must Stop");
    }

    else if (color1.toLowerCase() === "yellow") {
        console.log(color1 + "              Ready to move");
    }

    else if (color1.toLowerCase() === "green") {
        console.log(color1 + "               Move now");
    }

    else {
        alert("Invalid signal color entered");
    }
}
while (color1 != "red" && color1 != "yellow" && color1 != "green");

do {
    var color2 = prompt("Enter the Second color of road traffic signal", "yellow");

    if (color2 != color1) {
        if (color2.toLowerCase() === "red") {
            console.log(color2 + "                 Must Stop");

        }

        else if (color2.toLowerCase() === "yellow") {
            console.log(color2 + "              Ready to move");
        }

        else if (color2.toLowerCase() === "green") {
            console.log(color2 + "               Move now");
        }

        else {
            alert("Invalid signal color entered");
        }
    }

    else {
        alert("Don't Enter the same color");
    }
}
while (color2 === color1 || (color2 != "red" && color2 != "yellow" && color2 != "green"));


do {
    var color3 = prompt("Enter the Third color of road traffic signal", "green");
    if (color3 != color2 && color3 != color1) {
        if (color3.toLowerCase() === "red") {
            console.log(color3 + "                 Must Stop");
        }

        else if (color3.toLowerCase() === "yellow") {
            console.log(color3 + "              Ready to move");
        }

        else if (color3.toLowerCase() === "green") {
            console.log(color3 + "               Move now");
        }

        else {
            alert("Invalid signal color entered");
        }
    }

    else {
        alert("Don't Enter the same color");
    }
}
while (color3 === color2 || color3 === color1 || (color3 != "red" && color3 != "yellow" && color3 != "green"));
