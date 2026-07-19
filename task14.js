// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));
let hasID = prompt("Do you have a voter ID? (yes/no): ");

if (age >= 18) {
  if (hasID === "yes") {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote. No voter ID.");
  }
} else {
  console.log("Not eligible to vote. Under 18.");
}
