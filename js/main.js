// Sticky header shadow on scroll
const header = document.getElementById("header");
const burger = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".menu a");

addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 20),
);

// Mobile hamburger menu
function setMenuOpen(open) {
  header.classList.toggle("nav-open", open);
  burger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
}

burger.addEventListener("click", () => {
  setMenuOpen(!header.classList.contains("nav-open"));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

addEventListener("keydown", (e) => {
  if (e.key === "Escape" && header.classList.contains("nav-open")) {
    setMenuOpen(false);
  }
});

// Scroll reveal animations
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
