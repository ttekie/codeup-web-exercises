"use strict";
/*=======================Break and Continue Exercise=====================*/
let userInput = parseFloat(prompt("Enter an odd number between 1 and 50:"));
while(true) {
    if(userInput % 2 === 0) {
        userInput = parseFloat(prompt("Please enter an odd number between 1 and 50:"));
    } else {
        console.log("Here is an odd number: " + userInput);
        break;
    }
}

for(let i = 1; i < 50; i++) {
    if(i === userInput) {
        console.log("Yikes! Skipping number: " + userInput);
        continue;
    } else if(i % 2 === 1) {
        console.log("Here is an odd number: " + i);
    }
}