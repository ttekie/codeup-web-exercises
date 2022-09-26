"use strict";

let array1 = [5, 10, 15];
let array2 = ["notANumber", 5, 10];

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
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
    for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i].length > longestStr.length) {
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
    for (let i = 0; i < classes.length; i++) {
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

    // or it could be done this way
    // return {
    //     class: string,
    //     students: number
    // }
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

let neighborhood2 = {
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

function desirableNeighborhood (neighborhoodObject) {
    let totalRating = 0;
    neighborhoodObject.schools.forEach((item) => {
        totalRating = totalRating + item.rating;
    });
    if (neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24) {
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
// so I need a totalCost accumulator variable and kind of level variable that keeps track of what level I'm on
// and I need to keep looping until totalCost > bonus

function beeramid(bonus, price) {
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus) {
        console.log("Total cost before increment: " + totalCost);
        console.log("Cost of level " + levels + " is " + levels * levels * price);
        totalCost += levels * levels * price;
        if (totalCost + ((levels + 1) ** 2 * price) > bonus) {
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
function getSimplerUser(userObject) {
    let obj = {};
    obj.firstName = userObject.firstName;
    obj.lastName = userObject.lastName;
    return obj;

    // or it could be done this way
    // return {
    //     firstName: userObject.firstName,
    //     lastName: userObject.lastName
    // }
}


//Problem number 2:

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
//     let firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
//      let lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
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

function createNames(arrayOfFirstName, arrayOfLastName) {
    let arrayOfObjects = [];
    for(let i = 0; i < arrayOfFirstName.length; i++) {
        arrayOfObjects.push({
            firstName: arrayOfFirstName[i],
            lastName: arrayOfLastName[i]
        })
    }
    return arrayOfObjects;
}


const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}

// Given the attendance object, write a function that returns the total attendance across all teams.
function totalAttendance(attendanceObject) {
    let total = 0;
    for (let property in attendanceObject) {
        total += attendanceObject[property];
    }
    return total;

    // or it could be done using Object.values() method
    // let total = 0;
    // const arrayOfObjectProperties = Object.values(attendanceObject);
    // arrayOfObjectProperties.forEach(function(item){
    //     total += item;
    // });
    // return total;
}
// Given the attendance object, write a function that returns the average attendance
function averageAttendance(obj) {
    let array = Object.values(obj);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values
function createObject(attendanceObject) {
    let total = 0;
    for (const prop in attendanceObject) {
        total += attendanceObject[prop];
    }
    return {
        totalAttendance: total,
        averageAttendance: total / Object.keys(attendanceObject).length
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
    // let newArray = Object.keys(object);
    // let obj = {};
    // for (let i = 0; i < newArray.length; i++) {
    //     obj[newArray[i]] = Number(object[newArray[i]]);
    // }
    // return obj;

    // or it could be done this way as well
    let newArray = Object.keys(object);
    let newObject = {};
    newArray.forEach(function(item, index, array){
        newObject[item] = Number(object[array[index]]);
    });
    return newObject;
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
function convertAddressToObject(addressAsString) {
    const arrayOfStrings = addressAsString.split(" ");
    console.log(arrayOfStrings);
    return {
        streetNumber: arrayOfStrings[0],
        streetName: `${arrayOfStrings[1]} ${arrayOfStrings[2]}`
    }
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
function totalPets (arrayOfObjects) {
    let sumOfPets = 0;
    for(let i = 0; i < arrayOfObjects.length; i++) {
        sumOfPets += arrayOfObjects[i].pets;
    }
    return sumOfPets;
}
/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * minMaX([9, 4, 13, 2, 20]) -> [2, 20]
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
function minMax (arrayOfNumbers) {
    let minMax = [];
    let smallest = arrayOfNumbers[0];
    let largest = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < smallest) {
            smallest = arrayOfNumbers[i];
        } else if (arrayOfNumbers[i] > largest) {
            largest = arrayOfNumbers[i];
        }
    }
    minMax.unshift(smallest);
    minMax.push(largest);
    return minMax;
}

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
function filterArray(array) {
    // The filter() method creates a shallow copy of a portion of a given array
    // filtered down to just the elements from the given array
    // that pass the test implemented by the provided function.
    return array.filter(function(item){
        return isNumber(item);
    });
}



/*============================== js array and objects assessment warmup ============================*/

// Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)

// Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)

// Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
function removeOdds(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function modifiedArray(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}
// Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values

// Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
// example: we could do this
/* write a function that returns
{
    city: "San Antonio",
    state: "Texas"
}*/
function cityStateObject(cityAndState) {
    return {
        city: cityAndState.split(', ')[0],
        state: cityAndState.split(', ')[1]
    }
}
// Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
// Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties

function analyzeString(string) {
    return {
        length: string.length,
        firstLetter: string.charAt().toLowerCase(),
        lastLetter: string.charAt(string.length - 1).toLowerCase();
    }
}


// Write a function that takes in a string and modifies it in some way. Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.
function stringModifier(string) {
    let arrayOfString = string.split('');
    console.log(arrayOfString);
    for(let i = 0; i < arrayOfString.length; i++) {
        switch(arrayOfString[i]) {
            case "e":
                arrayOfString[i] = 3;
                break;
            case "i":
                arrayOfString[i] = 1;
                break;
            case "o":
                arrayOfString[i] = 0;
                break;
            case "a":
                arrayOfString[i] = 4;
                break;
        }
    }
    return arrayOfString.join('');
}

function capitalizeEveryOtherLetter(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        newString += i % 2 === 0 ? string.charAt(i).toUpperCase(): string.charAt(i);
    }
    return newString;
}
    /**
     * Get Sum of People's Budget
     * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
     *
     * Examples
     *
     * >> getBudgets([
     *        { name: "John", age: 21, budget: 23000 },
     *        { name: "Steve",  age: 32, budget: 40000 },
     *        { name: "Martin",  age: 16, budget: 2700 }
     *    ]) ➞ 65700
     * >> getBudgets([
     *        { name: "John",  age: 21, budget: 29000 },
     *        { name: "Steve",  age: 32, budget: 32000 },
     *        { name: "Martin",  age: 16, budget: 1600 }
     *    ]) ➞ 62600
     */


    /**
     * Get Student Top Notes
     * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
     * If the student does not have notes then let's assume their top note is equal to 0.
     *
     * Examples
     *
     * >> getStudentTopNotes([
     *      {
     *         id: 1,
     *         name: "Jacek",
     *         notes: [5, 3, 4, 2, 5, 5]
     *       },
     *      {
     *         id: 2,
     *         name: "Ewa",
     *         notes: [2, 3, 3, 3, 2, 5]
     *       },
     *      {
     *         id: 3,
     *         name: "Zygmunt",
     *         notes: [2, 2, 4, 4, 3, 3]
     *       }
     *    ]) ➞ [5, 5, 4]
     */

    function getStudentTopNotes(arrayOfStudentObjects) {
        const topNotes = [];
        arrayOfStudentObjects.forEach(studentObject => {
            topNotes.push(Math.max(...studentObject.notes));
        });
        return topNotes;
    }

    /**
     * TODO:
     * Remove the Letters ABC
     * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
     *
     * Examples
     * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
     * >> removeABC("hello world!") ➞ null
     * >> removeABC("") ➞ null
     *
     * Notes
     * If the given string does not contain "a", "b", or "c", return null.
     */


// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.

// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
// Write a function that accepts the top three bowling scores and returns the average.
//
//     Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3






