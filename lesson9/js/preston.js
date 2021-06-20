// create banner for fridays only
let day = d.getDay();
if (day != 5) {
  document.querySelector(".banner").style.display = "none";
}