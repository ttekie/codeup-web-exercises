"use strict";

let home = document.querySelector("#home");
let profile = document.querySelector("#profile");
let contact = document.querySelector("#contact");
let homeTab = document.querySelector("#home-tab");
let profileTab = document.querySelector("#profile-tab");
let contactTab = document.querySelector("#contact-tab");

homeTab.addEventListener("click", () => {
    home.classList.add("show");
    profile.classList.remove("show");
    contact.classList.remove("show");
});
profileTab.addEventListener("click", () => {
    profile.classList.add("show");
    home.classList.remove("show");
    contact.classList.remove("show");

});
contactTab.addEventListener("click", () =>{
    contact.classList.add("show");
    profile.classList.remove("show");
    contact.classList.remove("show");
});
