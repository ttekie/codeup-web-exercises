"use strict";
/*======================= For Loops Exercise =======================*/
function showMultiplicationTable() {
    let number = prompt("Enter a number");
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
showMultiplicationTable();


for(let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * (200 - 20) + 1) + 20;
    if(random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

// first solution
let num = 9; // height of the pattern
let string = "";
// External loop
for(let i = 1; i <= num; i++) {
    // Internal loop
    for(let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

// It could be done this way as well
for(let i = 1; i <= 9; i++) {
    let outputString = "";
    for(let count = 0; count < i; count++) {
        outputString = outputString + i;
    }
    console.log(outputString);
}

// the above solution can be done this way as well
for(let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for(let i = 100; i > 1; i -= 5) {
    console.log(i);
}


