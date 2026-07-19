// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

const prompt = require("prompt-sync")();

let isLoggedIn = prompt("Are you logged in? (yes/no): ");
let isAdmin = prompt("Are you an admin? (yes/no): ");

if (isLoggedIn === "yes") {
  if (isAdmin === "yes") {
    console.log("Admin Dashboard");
  } else {
    console.log("User Dashboard");
  }
} else {
  console.log("Please Login");
}
