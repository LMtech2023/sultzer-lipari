// Sticky header shadow on scroll
const header = document.getElementById("header");
addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 20),
);

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
