"use strict"; // it will be a good a practice to use "use strict" to avoid
// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters
// 4. If there is more than one parameter, the list is comma separated
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked
// 7. [optional but common] return statement


/*============== function declaration ================*/

// function sayHello(greeting, name) {
//     return `${greeting}, ${name}`;
// }

// function localOrGlobal() {
//     // what happens in the function states in the function
//     let number = 20;
// }
//
//
// let number = 20;
// function localOrGlobal() {
//     let number = 10;
//     console.log(number);
// }
// localOrGlobal();


/*=========================== function expression ====================*/
// bark() ;   // will get an error message her because function expression does not get hoisted.
// const bark = function () {
//     console.log("woof!");
// }
//
// yap(); // this function will run, because function declaration get hoisted
// function yap() {
//     console.log("yip yip");
// }
//
// // arrow function also does not get hoisted exactly as the anonymous function
// const add = (num1, num2) => num1 + num2

