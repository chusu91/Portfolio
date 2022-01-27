"use strict!";

//make navbar transparent when it is on the top
const navBar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add("navbar--dark");
  } else {
    navBar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
//html에 큰 섹션들은 아이디 지정, navbar menu item li에 data-link추가해서 아이디를 거기에 적음
const navBarMenu = document.querySelector(".navbar__menu");

navBarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home contents slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(window.scrollY);
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Project filter
const projectBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

//in HTML, add data-filter to btn + add data-type to project
//with dataset controll the filter
projectBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
