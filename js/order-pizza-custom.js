"use strict";

let home = document.querySelector("#home");
let profile = document.querySelector("#profile");
let contact = document.querySelector("#contact");
let homeTab = document.querySelector("#home-tab");
let profileTab = document.querySelector("#profile-tab");
let contactTab = document.querySelector("#contact-tab");

homeTab.addEventListener("click", function (){
    home.classList.add("show");
});
profileTab.addEventListener("click", function (){
    profile.classList.add("show");
});
contactTab.addEventListener("click", function (){
    contact.classList.add("show");
});
