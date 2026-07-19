// Using isOnline, use the NOT operator to print "User is offline".

const prompt = require("prompt-sync")();

let isOnline = prompt("Is the user online? (yes/no): ");

isOnline = (isOnline === "yes");

if (!isOnline) {
    console.log("User is offline");
}