// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your marks: "));

if (marks >= 80 && marks <= 100) {
  console.log("Grade: A+");
} else if (marks >= 70) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else if (marks >= 0) {
  console.log("Grade: F");
} else {
  console.log("Invalid marks");
}
