"use strict";

$(document).ready(() => {

console.log("Hello Kool Kidz!");

$(document)
.on("click", "button", () => {
    console.log("You clicked me!");
    $(".friend-container").append(`
    <p>First name: ${$("input").eq(0).val()}</p>
    <p>Last name: ${$("input").eq(1).val()}</p>
    <p>Favorite food: ${$("input").eq(2).val()}</p>
    `);
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