const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

// if (number % 2 == 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }
number%2 ? console.log("Odd Number") : console.log("Even Number");