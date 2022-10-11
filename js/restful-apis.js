
// https://glitch.com/different-northern-exhaust

const booksURL = "https://different-northern-exhaust.glitch.me/books";
const moviesURL = "https://different-northern-exhaust.glitch.me/movies";

// The R in CRUD: Read
function getMovies() {
    fetch(moviesURL)
        .then(resp => resp.json())
        .then(data => console.log(data));
}
getMovies();

// The C in CRUD: Create
const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}


const postOptions = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks() {
    fetch(booksURL).then(resp => resp.json())
        .then(data => console.log(data));
}
getBooks();

fetch(booksURL, postOptions).then(getBooks);

// The U in CRUD: updating with PUT and PATCH requests
// We'll use PUT to replace the entire content
// We'll use PATCH to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen "
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

fetch(booksURL + "/1", patchOptions).then(getBooks);

modification = {
    title: "Eleanor of Aquitaine: Queen of and the four kings",
    author: {
        firstName: 'Alfalfa',
        lastName: 'meson'
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modification)
}

fetch(booksURL + "/1", putOptions).then(getBooks);


// The D in CRUD
const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}

fetch(booksURL + "/1", deleteOptions).then(getBooks);