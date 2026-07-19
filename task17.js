//  Using age, determine "Adult" or "Minor" using the ternary operator.
const prompt = require("prompt-sync")();

let age = Number(prompt("Enter age: "));
age>=18 ? console.log("Adult") : console.log("Adult");