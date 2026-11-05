// Mobile menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function hideMobileMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
}

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", hideMobileMenu);
overlay.addEventListener("click", hideMobileMenu);

// Dropdown menu
const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const navLink = button.closest(".nav-link");
    const dropdown = button.nextElementSibling;

    navLink.classList.toggle("link-open");
    dropdown.classList.toggle("show");
  });
});