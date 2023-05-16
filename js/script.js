const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 400, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });

const menu = document.querySelector("#toggle");
const menuItems = document.querySelector("#overlay");
const menuContainer = document.querySelector(".menu-container");
const menuIcon = document.querySelector("i");

function toggleMenu(e) {
  menuItems.classList.toggle("open");
  menuContainer.classList.toggle("full-menu");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  e.preventDefault();
}

menu.addEventListener("click", toggleMenu, false);

const navbar = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
