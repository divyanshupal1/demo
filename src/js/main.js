
sidebar = document.querySelector('nav'),
toggle = document.querySelectorAll(".toggle"),
action = document.querySelector(".action"),
header = document.querySelector(".header"),


toggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
        action.classList.toggle("close");
        header.classList.toggle("close");
    });
})

//navigation active
const navtabs = document.querySelectorAll(".nav-link");
function removeActive(){navtabs.forEach((navtab) => navtab.classList.remove("nav-active"));}
navtabs.forEach((navtab) => {
    navtab.addEventListener("click", () => {
        removeActive();
        navtab.classList.add("nav-active");
    });
});
//secondary navigation flights hotels taxi etc.
const action_item = document.querySelectorAll(".action-item");
function removeActive1(){action_item.forEach((navtab) => navtab.classList.remove("action-item-active"));}
action_item.forEach((navtab) => {
    navtab.addEventListener("click", () => {
        removeActive1();
        navtab.classList.add("action-item-active");
    });
});
//form header oneway round multi
const form_span = document.querySelectorAll(".form-header span");
function removeActive2(){ form_span.forEach((navtab) => navtab.classList.remove("form-header-span-active"));}
form_span.forEach((navtab) => {
    navtab.addEventListener("click", () => {
        removeActive2();
        navtab.classList.add("form-header-span-active");
    });
});

// const short_form = document.querySelector(".results-short");
// short_form.addEventListener("click", () => {
//     document.querySelector(".flight-search").classList.toggle("hidden");
// });