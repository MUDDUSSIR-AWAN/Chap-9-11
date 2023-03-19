var fuel = "";

while (fuel <= 0 || isNaN(fuel)) {

  fuel = +window.prompt("Enter the remainig fuel in litres in your car", 2.5);

  if (isNaN(fuel)) {
    alert("Please Enter a number not a alphabet.");
  }
  else if (fuel < 0) {
    alert("Please Enter a positive number.");
  }
}

if (fuel <= .25) {
  console.log("Please refill the fuel in your car");
}
else if (fuel > 0.25) {
  console.log("Enjoy your driving");
}

// var fuel = "";

// while (fuel <= 0 || isNaN(fuel)) {
//   fuel = +window.prompt("Enter the remaining fuel in litres in your car", 2.5);

//   if (isNaN(fuel)) {
//     alert("Please enter a number, not an alphabet.");
//   } else if (fuel <= 0) {
//     alert("Please enter a positive number.");
//   }
// }

// if (fuel <= 0.25) {
//   console.log("Please refill the fuel in your car.");
// } else if (fuel > 0.25) {
//   console.log("Enjoy your driving!");
// }
