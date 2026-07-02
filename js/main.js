const header = document.getElementById("site-header");
const toggle = document.querySelector(".site-header__toggle");
const menuLinks = document.querySelectorAll(".site-header__menu a");

function setMenuOpen(open) {
  header.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("is-menu-open", open);
}

toggle.addEventListener("click", () => {
  setMenuOpen(!header.classList.contains("is-open"));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});

const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
