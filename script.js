/* ====================================
Global Variables
=====================================*/
const laptopLink = document.querySelectorAll(".laptop-link");

/* ====================================
Event Listeners
=====================================*/
laptopLink.forEach((link) => {
  let chevron = link.querySelector(".chevron");
  let linkUl = link.querySelector(".laptop-link-ul");
  link.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === chevron || e.target === link) {
      linkUl.classList.toggle("hide");
      chevron.classList.toggle("chevron-up");
    }
  });
});
