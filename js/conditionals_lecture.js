// let flavor = prompt("Welcome to Codeup ice cream. what flavor do you want");
//
// flavor = flavor.toLowerCase();



// if(flavor === "chocolate") {
//     alert("one chocolate coming right up");
// } else if(flavor === "vanilla") {
//     alert("One vanilla coming right up");
// } else if(flavor === "strawberry") {
//     alert("One strawberry coming right up");
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch(flavor) {
//     case "chocolate":
//         alert("One chocolate coming right up");
//         break;
//     case "vanilla":
//         alert("one vanilla coming right up");
//         break;
//     case "strawberry":
//         alert("one strawberry coming right up");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(");
//         break;
// }
let number = prompt("Enter a number:");

function divisibleByFive(number) {
    if(number % 5 === 0 && number !== null && number !== "") {
        alert("That number is divisible by 5");
    } else {
        alert("That number is not divisible by 5");
    }
}
 divisibleByFive(number);


/*=================using conditional operator instead of if...else===========*/
// function divisibleByFive(number) {
//     number % 5 === 0 ? alert("That number is divisible by 5") :
//         alert("That number is not divisible by 5");
// }
//
// divisibleByFive(number);

function isMVP(purchaseTotal) {
    return purchaseTotal > 1000;
}

let customer1purchase = 1001;

if(isMVP(customer1purchase)) {
    alert("MVP!");
}

