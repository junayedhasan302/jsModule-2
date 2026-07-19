// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

const prompt = require("prompt-sync")();

// Correct credentials
let correctUsername = "admin";
let correctPassword = "12345";

// User input
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");
let role = prompt("Enter role (admin/user): ");

// Login check
if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");

    // Ternary operator for role check
    let message = (role === "admin")
        ? "Welcome to Admin Dashboard"
        : "Welcome to User Dashboard";

    console.log(message);
} else {
    console.log("Invalid username or password");
}