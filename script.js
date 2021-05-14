const laptopNav = document.querySelector(".laptop-nav");
const laptopNavUl = document.querySelector(".laptop-nav-ul");
const laptopNavUlItems = laptopNavUl.querySelector("ul li");
const chevron = document.querySelector(".chevron");

console.log(laptopNav);
console.log(laptopNavUl);

laptopNav.addEventListener("click", (e) => {
  if (e.target === chevron) {
    console.log("chevron");
  }
  if (e.target === laptopNavUlItems) {
    console.log("ul");
  }
});
