let d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();

// hamburger menu
const menuButton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {mainnav.classList.toggle("responsive"); }, false);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

// create banner for fridays only
let day = d.getDay();
if (day != 5) {
  document.querySelector(".banner").style.display = "none";
}

// get number of days since last visit and display to screen
function getNumberOfDays() {
  const date1 = localStorage.lastDate;
  const date2 = new Date();

  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = date2.getTime() - date1.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  document.querySelector("#daysSinceLastVisit").textContent = diffInDays;
}

// save current date in local storage
function saveDate() {
  let lastDate = new Date();
  localStorage.lastDate = lastDate;
}