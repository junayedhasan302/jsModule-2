// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const prompt = require("prompt-sync")();

let cartTotal = Number(prompt("Enter cart total: "));
let isMember = prompt("Are you a member? (yes/no): ");

if (cartTotal > 1000 && isMember === "yes") {
    let discount = cartTotal * 0.20;
    let finalPrice = cartTotal - discount;

    console.log("20% discount applied");
    console.log("Discount: " + discount);
    console.log("Final Price: " + finalPrice);
}
else if (cartTotal > 1000) {
    let discount = cartTotal * 0.10;
    let finalPrice = cartTotal - discount;

    console.log("10% discount applied");
    console.log("Discount: " + discount);
    console.log("Final Price: " + finalPrice);
}
else {
    console.log("No discount");
    console.log("Final Price: " + cartTotal);
}