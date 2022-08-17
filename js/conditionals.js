"use strict"; // allows JavaScript's silent errors to be shown.

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if(color === "blue") {
        return "blue is the color of the sky";
    } else if(color === "yellow") {
        return "yellow is a color of happiness and hope";
    } else if (color === "red") {
        return "red color symbolize love";
    } else if(color === "green") {
        return "Plant life is green";
    } else if(color ==="indigo"){
        return "Is indigo even a real rainbow color";
    }else {
        return "I don't even know that color";
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch(color) {
        case "blue":
            alert("blue is the color of the sky");
            break;
        case "yellow":
            alert("yellow is a color of happiness and hope");
            break;
        case "red":
            alert("red color symbolize love");
            break;
        case "green":
            alert("Plant life is green");
            break;
        case "indigo":
            alert("Is indigo even a real rainbow color");
            break;
        default:
            alert("I don't even know that color");
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let color = prompt("What is your favorite color?");

function analyzeColor(color) {
    return "your favorite color is " + color + ".";
}

alert(analyzeColor(color));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    if(luckyNumber === 0) {
        return totalAmount;
    } else if(luckyNumber === 1) {
       return (10/100) * totalAmount;
    } else if (luckyNumber === 2) {
        return (25/100) * totalAmount;
    } else if (luckyNumber === 3) {
        return (35/100) * totalAmount;
    } else if(luckyNumber === 4) {
        return (50/100) * totalAmount;
    } else if(luckyNumber === 5) {
        return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What is your total bill?");
//
// let luckyOne = "Your lucky number is: " + luckyNumber + "\n";
//
// let priceBeforeDiscount = "The price before the discount was: "  + totalBill + "\n";
//
// let priceAfterDiscount = "The price after discount is: " + calculateTotal(luckyNumber, totalBill);
//
// alert(luckyOne + priceBeforeDiscount + priceAfterDiscount);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean");
// }

// let userResponse = confirm("Would you like to enter a number");
//
// if(userResponse) {
//     let number = parseFloat(prompt("Enter a number:"));
//
//     if(isNumber(number)) {
//         if(number % 2 === 0) {
//             alert(number + " is even");
//         } else {
//             alert(number + " is odd");
//         }
//
//         alert(number + " plus 100 is: " + (number + 100));
//
//         if(number < 0) {
//             alert("That is a negative number");
//         } else {
//             alert("That is a positive number.")
//         }
//     } else {
//         alert("Incorrect input data type!.");
//     }
// } else {
//     alert("Ok fine! Have a Good day! :(");
// }


/*=============== refactor the above code to use functions =======================*/
function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean");
}

function evenOrOdd(number) {
    return number % 2 === 0 ? number + " is even." : number + " is odd."
}

function numberPlus100(number) {
    return number + " plus 100 is: " + (number + 100);
}

function negativeOrPositive(number) {
    if(number < 0) {
        return "That is a negative number.";
    } else {
        return "That is a positive number.";
    }
}

function getNumber() {
    if(confirm("Do you want to enter number?")) {
        return parseFloat(prompt("Enter a number"));
    }
}

function analyzeNumber(number) {
    if(number === undefined) {
        return false;
    }
    if(isNumber(number)) {
        alert(evenOrOdd(number));
        alert(numberPlus100(number));
        alert(negativeOrPositive(number));
    } else {
        alert("Incorrect input data type.");
    }
}

analyzeNumber(getNumber());
