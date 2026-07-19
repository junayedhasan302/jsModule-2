// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

const prompt = require("prompt-sync")();
let month = Number(prompt("Enter month number (1-12): "));

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Summer");
} else if (month >= 6 && month <= 9) {
  console.log("Monsoon");
} else if (month >= 10 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Invalid month");
}
