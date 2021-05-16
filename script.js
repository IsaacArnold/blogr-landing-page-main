/* ====================================
Global Variables
=====================================*/
const laptopLink = document.querySelectorAll(".laptop-link");
const hamburgerNavDiv = document.querySelector(".logo-hamburger");
const hamburgerIcon = hamburgerNavDiv.querySelector(".hamburger");
const closeIcon = hamburgerNavDiv.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLink = document.querySelectorAll(".mobile-link");

/* ====================================
Event Listeners
=====================================*/
// Desktop navigation
laptopLink.forEach((link) => {
  let a = link.querySelector("a");
  let chevron = link.querySelector(".chevron");
  let linkUl = link.querySelector(".laptop-link-ul");
  link.addEventListener("click", (e) => {
    if (e.target === chevron || e.target === a) {
      linkUl.classList.toggle("hide");
      chevron.classList.toggle("chevron-up");
    }
  });
});

// Mobile navigation
hamburgerNavDiv.addEventListener("click", (e) => {
  if (e.target === hamburgerIcon) {
    mobileNav.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
    hamburgerIcon.classList.toggle("hide");
  }
  if (e.target === closeIcon) {
    mobileNav.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
    hamburgerIcon.classList.toggle("hide");
  }
});

mobileLink.forEach((link) => {
  let chevron = link.querySelector(".chevron");
  let linkUl = link.querySelector(".ul-dropdown");
  link.addEventListener("click", (e) => {
    if (e.target === chevron || e.target === link) {
      linkUl.classList.toggle("hide");
      chevron.classList.toggle("chevron-up");
    }
  });
});
