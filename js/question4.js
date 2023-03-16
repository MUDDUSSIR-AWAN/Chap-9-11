do {
  var fuel = +window.prompt("Enter the remainig fuel in litres in your car", 2.5);
  if (isNaN(fuel)) {
    alert("Please Enter a number not a alphabet.");
  }
  else {
    if (fuel > 0) {
      if (fuel < .25) {
        console.log("Please refill the fuel in your car");
      }
      else {
        console.log("Enjoy your driving");
      }
    }
    else {
      alert("Please Enter a positive number.");
    }
  }
}
while (fuel < 0 || isNaN(fuel) );