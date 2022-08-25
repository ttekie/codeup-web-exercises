"use strict";
/*=======================Break and Continue Exercise=====================*/
// let userInput = parseFloat(prompt("Enter an odd number between 1 and 50:"));
//
// while(true) {
//     if(userInput % 2 === 0) {
//         userInput = parseFloat(prompt("Please enter an odd number between 1 and 50:"));
//     } else {
//         break;
//     }
// }
//
// for(let i = 1; i <= 50; i++) {
//     if(i === userInput) {
//         console.log("Yikes! Skipping number: " + userInput);
//         continue;
//     } else if(i % 2 === 1) {
//         console.log("Here is an odd number: " + i);
//     }
// }

function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean");
}

let oddNumber;
while(true){
    oddNumber = prompt("Please enter an odd number:");
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)){
        break;
    }
}

console.log("Number to skip is: " + oddNumber);
console.log(" ");

for(let i = 1; i <= 50; i+= 2){
    if (i === oddNumber){
        console.log("Yikes! Skipping number " + oddNumber);
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}
