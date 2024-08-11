let nav_list = document.getElementById('nav-list')
let bars = document.getElementById("bars");
let menu = document.getElementById('menu');

bars.addEventListener('click', () => {
    nav_list.classList.add("active")
})
menu.addEventListener('click', () => {
    nav_list.classList.remove("active")
})


let items_1 = document.getElementById('items_1');
let items_2 = document.getElementById('items_2');
let items_3 = document.getElementById('items_3');
let items_4 = document.getElementById('items_4');
let open_1 = document.getElementById('open_1');
let open_2 = document.getElementById('open_2');
let open_3 = document.getElementById('open_3');
let open_4 = document.getElementById('open_4');

items_1.style.maxHeight = "0px"
items_2.style.maxHeight = "0px"
items_3.style.maxHeight = "0px"
items_4.style.maxHeight = "0px"

open_1.addEventListener('click', () => {
    if (items_1.style.maxHeight == "0px") {
        items_1.style.maxHeight = "300px"
    }else{
        items_1.style.maxHeight = "0px"
    }
})
open_2.addEventListener('click', () => {
    if (items_2.style.maxHeight == "0px") {
        items_2.style.maxHeight = "300px"
    }else{
        items_2.style.maxHeight = "0px"
    }
})
open_3.addEventListener('click', () => {
    if (items_3.style.maxHeight == "0px") {
        items_3.style.maxHeight = "300px"
    }else{
        items_3.style.maxHeight = "0px"
    }
})
open_4.addEventListener('click', () => {
    if (items_4.style.maxHeight == "0px") {
        items_4.style.maxHeight = "300px"
    }else{
        items_4.style.maxHeight = "0px"
    }
});



const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
    let top = window.scrollY
    if (top >= 10) {
        navbar.style.position = "fixed"
    }
    if (top <= 10) {
        navbar.style.position = "sticky"
    }
});


