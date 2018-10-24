"use strict";

$(document).ready(() => {

console.log("Hello Kool Kidz!");

$(document)
.on("click", "button", () => {
    console.log("You clicked me!");
})
.on("mouseenter", "button", (event) => {
    $(event.target)
        .css("background-color", "pink")
        .css("color", "darkred");
})
.on("mouseleave", "button", (event) => {
    $(event.target)
        .css("background-color", "darkmagenta")
        .css("color", "white");
})

});