(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
     let person = {
        firstName: "Tesfalem",
        lastName: "Tekie"
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
     person.sayHello = function() {
         console.log("Hello form " + this.firstName + " " + this.lastName + "!");
     }
     person.sayHello();
     // console.log("");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) =>{
        if(shopper.amount > 200) {
            console.log(`${shopper.name}'s shopping amount before the discount was $${shopper.amount} dollar`);
            console.log(`${shopper.name} gets a discount of $${shopper.amount * (12 / 100)} dollar`);
            console.log(`${shopper.name} needs to pay $${shopper.amount - shopper.amount * (12 / 100)}`);
        } else {
            console.log(`${shopper.name} shopping amount before the discount was $${shopper.amount}`);
            console.log(`${shopper.name} did not get a discount, because his shopping amount is less than $200.`);
            console.log(`${shopper.name} needs to pay shopper.amount`);
        }
        console.log("");
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {  title: "The Golden Compass",
            author: {
                firstName: "Philip",
                lastName: "Pullman",
            }

        },
        {   title: "A Walk in the Woods",
            author: {
                firstName: "Bill",
                lastName: "Bryson"
            }
        },
        {   title: "Number of Stars",
            author: {
                firstName: "Lois",
                lastName: "Lowry"
            }
        },
        {   title: "The Lightning Thief",
            author: {
                firstName: "Rick",
                lastName: "Riordan"
            }
        },
        {   title: "The power and Glory",
            author: {
                firstName: "Graham",
                lastName: "Greene"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
     // books.forEach((book, index) => {
     //     console.log("Book # " + (index + 1));
     //     console.log(`Title: ${book.title}`);
     //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
     //     console.log("---");
     // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, firstName, lastName) {
        let newBook = {};
        newBook.title = title;
        newBook.author = {
            firstName: firstName,
            lastName: lastName
        }
        return newBook;

        // or could be done like this
        // return {
        //     title: title,
        //     author: {
        //         firstName: firstName,
        //         lastName: lastName
        //     }
        // }
    }

    books.push(createBook("When Breath Becomes Air", "Paul", "Kalanithi"));

    books.forEach((book, index) => {
        console.log("Book # " + (index + 1));
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");
    });

    console.log("");

    // showBookInfo function will display each book and author
    function showBookInfo(book) {
        let bookInfo = "";
        bookInfo += "Book Title: " + book.title + ".";
        bookInfo += "\nAuthor: " + book.author.firstName + " " + book.author.lastName + ".";
        return bookInfo;
    }

    //will loop through each element of the books array
    books.forEach((item, index) => {
        console.log("Book # " + (index + 1));
        console.log(showBookInfo(item));
        console.log("");
    });

})();

