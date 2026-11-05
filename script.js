const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
}

// Open or close a dropdown when its button is clicked
const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const navLink = button.closest(".nav-link");
    const dropdown = button.nextElementSibling;

    navLink.classList.toggle("link-open");
    dropdown.classList.toggle("show");
  });
});