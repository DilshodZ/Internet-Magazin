
let nav_list = document.getElementById('nav-list')
let bars = document.getElementById("bars");
let menu = document.getElementById('menu');

bars.addEventListener('click', () => {
    nav_list.classList.add("active")
})
menu.addEventListener('click', () => {
    nav_list.classList.remove("active")
})

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