// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.

console.log('"5" == 5:', "5" == 5);
console.log('"5" === 5:', "5" === 5);


// "5" == 5 returns true because the == operator automatically converts the string "5" into the number 5 before comparing.
// "5" === 5 returns false because the === operator checks both the value and the data type. Here, "5" is a string and 5 is a number, so they are not strictly equal.