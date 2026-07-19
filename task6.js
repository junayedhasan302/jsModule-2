// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
let year = 2026;
if((year % 4 === 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a Leap Year!");
}
else console.log(year + "is not a Leap Year!");