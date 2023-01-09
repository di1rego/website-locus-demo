const hamburger = document.querySelector(".header__humburger");
const navMenu = document.querySelector(".header__menu_list-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // document.body.style.overflow = "hidden";
});

document.querySelectorAll(".header__menu_list-items_item_item-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "scroll";
    }));