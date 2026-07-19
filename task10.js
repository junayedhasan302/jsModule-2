// Build a simple login system — print "Login successful" only if both username and password are correct.

const prompt = require("prompt-sync")();

// Correct credentials
let correctUsername = "admin";
let correctPassword = "12345";

// User input
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

// Check login
if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
}