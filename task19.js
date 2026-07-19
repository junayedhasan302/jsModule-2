// Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.

const prompt = require("prompt-sync")();

let hasPermission = prompt("Do you have permission? (yes/no): ");

hasPermission = (hasPermission === "yes");

if (!hasPermission) {
    console.log("Access Denied");
}