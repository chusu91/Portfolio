"use strict!";

//make nabbar transparent when it is on the top
const navBar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
