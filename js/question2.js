do {
    var gender = prompt("Please enter your gender:");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning sir.")
} 
else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma’am.")
}
else {
    alert("Incorrect");
}
}
while (gender.toLowerCase() != "male" && gender.toLowerCase() != "female");