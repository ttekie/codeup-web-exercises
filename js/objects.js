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
         console.log("Hello form " + person.firstName + " " + person.lastName + "!");
     }
     person.sayHello();
     console.log("");

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

    for(let i = 0; i < shoppers.length; i++) {
        if(shoppers[i].amount > 200) {
            console.log(shoppers[i].name + "'s shopping amount before the discount was " + shoppers[i].amount + " dollar");
            console.log(shoppers[i].name + " " + "gets a discount of " + "$" + shoppers[i].amount * (12 / 100) + " dollar");
            console.log(shoppers[i].name + " " + "needs to pay " + "$" + (shoppers[i].amount - shoppers[i].amount * (12 / 100)));
        } else {
            console.log(shoppers[i].name + " " + "shopping amount before the discount was " + shoppers[i].amount);
            console.log(shoppers[i].name + " " + "did not get a discount, because his shopping amount is less than " + 200);
            console.log(shoppers[i].name + " " + "needs to pay " + shoppers[i].amount);
        }
        console.log("");
    }

    shoppers.forEach((item) =>{
        console.log(`${item.name} buy some products form HEB for the amount of ${item.amount}`);
    });

    console.log("");

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
     //     console.log("Book # " + (index += 1));
     //     console.log("Title: " + book.title);
     //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
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
    function createBook(title, author) {
        let book = {};
        books.title = title;
        books.author = author;
        return book;
    }

    let book = [
        createBook("The Golden Compass", "Philip Pullman"),
        createBook("A Walk in the Woods", "Bill Bryson"),
        createBook("Number of Stars", "Lois Lowry"),
        createBook("The Lightning Thief", "Rick Riordan"),
        createBook( "The power and Glory", "Graham Greene")
    ];

    // function showBookInfo(books) {
    //     let bookInfo = "";
    //     books.forEach((item, index) => {
    //         bookInfo += "Book # " + (index + 1);
    //         bookInfo += "\nTitle: " + item.title;
    //         bookInfo += "\nAuthor: " + item.author.firstName + " " + item.author.lastName;
    //         bookInfo += "\n---";
    //     });
    //     return bookInfo;
    // }
    // console.log(showBookInfo(books));


    function showBookInfo(books) {
        let bookInfo = "";
        let counter = 1;
        for(let property in books) {
            bookInfo += "Book # " + counter;
            bookInfo += "\nTitle: " + book[property];
            bookInfo += "\nAuthor: " + book[property].firstName + " " + book[property].lastName;
            bookInfo = "\n---";
            counter++;
        }
        return bookInfo;
    }

    console.log(showBookInfo(books[0]));

})();
