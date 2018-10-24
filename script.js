"use strict";

$(document).ready(() => {

    console.log("Hello Kool Kidz!");

    $(document)
        .on("click", "button", () => {
            if ($("input").eq(0).val() && $("input").eq(1).val() && $("input").eq(2).val()) {
                $(".friend-container").append(`
    <div class="friend">
    <p class="name">${$("input").eq(0).val()} ${$("input").eq(1).val()}</p>
    <p>Favorite food: ${$("input").eq(2).val()}</p>
    </div>
    `);
            }
        })
        .on("mouseenter", "button", (event) => {
            $(event.target)
                .css("background-color", "orange")
                .css("color", "black")
                .css("font-weight", "bold")
        })
        .on("mouseleave", "button", (event) => {
            $(event.target)
                .css("background-color", "darkmagenta")
                .css("color", "white");
        })
});