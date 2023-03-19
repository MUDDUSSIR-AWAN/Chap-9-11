var city = "";

while (city.toLowerCase() != "karachi") {
    city = prompt("Please enter your city name:");

    if (city.toLowerCase() === "karachi") {
        console.log("Welcome to city of lights.");
    }

    else {
        alert("Incorrect");
    }
}