let day1 = document.querySelector("#day1").textContent;
let day2 = document.querySelector("#day2").textContent;
let day3 = document.querySelector("#day3").textContent;
let day4 = document.querySelector("#day4").textContent;
let day5 = document.querySelector("#day5").textContent;

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const currentDate = new Date();
const currentDay = currentDate.getDay();

let five = forecast();

function forecast() {
  day1 = daysOfWeek[currentDay];
  day2 = daysOfWeek[currentDay + 1];
  day3 = daysOfWeek[currentDay + 2];
  day4 = daysOfWeek[currentDay + 3];
  day5 = daysOfWeek[currentDay + 4];

  document.querySelector("#day1").textContent = day1;
  document.querySelector("#day2").textContent = day2;
  document.querySelector("#day3").textContent = day3;
  document.querySelector("#day4").textContent = day4;
  document.querySelector("#day5").textContent = day5;
} 
