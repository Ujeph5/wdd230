let d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();

// hamburger menu
const menuButton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menuButton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};