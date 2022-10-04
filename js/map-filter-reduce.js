const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const arrayOfUserObjects = users.filter(user => user.languages.length >= 3);
const arrayOfStrings = users.map(user => user.email);
const average = users.reduce((totalYearsOfExperience, user) => {
        return totalYearsOfExperience + user.yearsOfExperience / users.length;
}, 0);

const longestEmail = users.reduce((longest, user) =>{
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
}, '');
console.log(longestEmail);
const usersNameInSingleString = users.reduce((userName, user) => {
    userName.push(user.name);
    return userName;
}, []).join(', ');

// Bonus
let uniqueLanguages = users.reduce((accumulator, user) => {
    user.languages.forEach(function(language) {
        if(!accumulator.includes(language)) {
            accumulator.push(language);
        }
    });
    return accumulator;
}, []);
console.log(uniqueLanguages);
