let temp = parseInt(document.querySelector("#temp").textContent);

let windSpeed = parseInt(document.querySelector("#wind-speed").textContent);

let windChill = chill(temp, windSpeed);

document.querySelector("#wind-chill").innerHTML = windChill;

function chill(t, s) {
  if (t <= 50 && s >= 3) {
    let windChillTemp = 35.74 + 0.6215 * t - 35.75 * s ** .16 + 0.4275 * t * s ** 0.16;
    return `${windChillTemp.toFixed(1)}&deg;F`;
  } else {
    return "N/A";
  }

}