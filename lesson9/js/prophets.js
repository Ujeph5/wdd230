const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let imgCont = document.createElement("div");
      let img = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      p.innerHTML =
        "Date of birth: " +
        prophets[i].birthdate +
        "<br>Place of birth: " +
        prophets[i].birthplace;
      img.setAttribute("src", prophets[i].imageurl);

      imgCont.setAttribute("class", "containter");
      imgCont.appendChild(img);

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(imgCont);

      document.querySelector("div.cards").appendChild(card);
    }
  });
