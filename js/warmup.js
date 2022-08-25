"use strict";

let array1 = [5, 10, 15];
let array2 = ["notANumber", 5, 10];

function average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if (!(isNumber(arr[i]))) {
            return false;
        }
        sum = sum + parseFloat(arr[i]);
    }
    return sum / arr.length;
}

let stringArray = ["Jabb", "Darth Maul", "Hondo", "tacoma", "whoareyouman"];
function longestString(arrayOfString) {
    let longestStr = "";
    for(let i = 0; i < arrayOfString.length; i++) {
        if(arrayOfString[i].length > longestStr.length) {
           longestStr = arrayOfString[i];
        }
    }
    return longestStr;
}

