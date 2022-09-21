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

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents() {
    let totalNumberOfStudents = 0;
    for(let i = 0; i < classes.length; i++) {
        totalNumberOfStudents += classes[i].students;
    }
    return totalNumberOfStudents;
}

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
function convertToObject(string, number) {
    let obj = {};
    obj.class = string;
    obj.students = number;
    return obj;
}

let neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

let neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

let neighborhood3 = {
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodObject){
    let totalRating = 0;
    neighborhoodObject.schools.forEach((item) => {
        totalRating = totalRating + item.rating;
    });
    if(neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24) {
        return "neighborhood is desirable";
    }

    return "neighborhood is not desirable";
}

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// what is the cost of each level? level * level * priceOfCan
// so I neec a totalCost accumulator variable and kind of level variable that keeps track of what level I'm on
// and I need to keep looping until totalCost > bonus

function beeramid(bonus, price) {
    let totalCost = 0;
    let levels = 0;
    while(totalCost < bonus) {
        console.log("Total cost before increment: " + totalCost);
        console.log("Cost of level " + levels + " is " + levels * levels * price);
        totalCost += levels * levels * price;
        if(totalCost + ((levels + 1) ** 2 * price) > bonus) {
            break;
        }
        levels++;
        console.log("Total cost after increment: " + totalCost);
        console.log("Cost of level " + levels + " is " + levels ** 2 * price);
    }
    return levels;
}



/* =================== warmup needs to be done ===================================*/
// In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...
//
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// ```
//
// The shape of the output should be the following:
//
//     ```
// {
//   firstName: '...',
//   lastName: '...',
// }
//
function getSimplerUser(obj) {
    let userObj = {};
    userObj.firstName = obj.firstName;
    userObj.lastName = obj.lastName;
    return userObj;
}


//Problem number 2:

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
//     var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
//      var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//          {
//              firstName: 'CJ',
//              lastName: 'Cat'
//          },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

function createNames(firstName, lastName) {

}



const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}

// Given the attendance object, write a function that returns the total attendance across all teams.
function totalAttendance(obj) {
    let total = 0;
    for(let property in obj) {
        total += obj[property];
    }
    return total;
}
// Given the attendance object, write a function that returns the average attendance
function averageAttendance(obj) {
    let array = Object.values(obj);
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values
function createObject(attendanceObject) {
    let total = 0;
    for(const prop in attendance) {
        total += attendance[prop];
    }
    return {
        totalAttendance: total,
        averageAttendance: total / Object.keys(attendance).length
    }
}
// Convert to Number
//  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
//  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
//  *
//  * Examples
//  *
//  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
//  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
//  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
//  */
function convertToNumber(object) {
    let newArray = Object.keys(object);
    let obj = {};
    for(let i = 0; i < newArray.length; i++) {
        obj[newArray[i]] = Number(object[newArray[i]]);
    }
    return obj;
}


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
function convertAddressToObject(string) {

}


/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */


/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */












