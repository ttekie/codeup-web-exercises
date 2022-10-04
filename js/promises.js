// "use strict";
function dateOfTheLastCommit (userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {
        headers: {'Authorization': 'token ' + PERSONAL_GITHUB_TOKEN }
    }).then(response => {
        return response.json();
    }).then((events) => {
        let dateOfLastPush = new Date (events[0].created_at).toDateString();
        return dateOfLastPush;
    });
}
dateOfTheLastCommit('ttekie').then(result => console.log(result));

