//  If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.
const prompt = require("prompt-sync")();

let price = Number(prompt("Enter price: "));
price>1000 ? console.log("Expensive") : console.log("Affordable");