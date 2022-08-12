console.log("Hello form external javascript");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?");
alert(`Great ${favoriteColor} is my favorite color too!`);

let daysOfLittleMermaid = prompt("How many days did you rent The Little Mermaid");
let daysOfBrotherBrear = prompt("How many days did you rent Brother Bear?");
let daysOfHercules = prompt("How many did you rent Hercules");

let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBrear * 3) + (daysOfHercules * 3);
alert(`Your total rental cost is: ${totalCost} dollars`);


let hoursAtGoogle = prompt("How many hours did you work at Google");
let payAtGoogle = prompt("What is your hourly pay rate at Google");
let hoursAtAmazon = prompt("How many hours did you work at Amazon");
let payAtAmazon= prompt("What is your hourly pay rate at Amazon");
let hoursAtFacebook = prompt("How may hours did you work at Facebook");
let payAtFacebook = prompt("what is your hourly pay rate at Google");

let totalPay = hoursAtGoogle * payAtGoogle
    + hoursAtAmazon * payAtAmazon
    + hoursAtFacebook * payAtFacebook;

alert("Your total pay is: " + totalPay + " dollars");


let classFull = confirm("Is the class not full");
let scheduleConflict = confirm("Is there a scheduling conflict");
let canEnroll = !classFull && !scheduleConflict;

if(canEnroll) {
    alert("You can enroll.");
} else {
    alert("You can't enroll");
}

let numberOfItemsBought = prompt("How many items did the customer buy?");
let offerExpired = confirm("Has the offer expired");
let premiumMember = confirm("Is the customer a premium member?");

let productOffer = (premiumMember || numberOfItemsBought > 2) && !offerExpired;

if(productOffer) {
    alert("You are eligible for the product offer!");
} else {
    alert("Sorry, you're not a premium member so you are not eligible for a product offer :(");
}
