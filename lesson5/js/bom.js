const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input != "") {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    li.textContent = input.value;
    deletebutton.textContent = "❌";
    li.append(deletebutton);
    list.append(li);
    input.focus();
    deletebutton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    });
    input.value = "";
  }
});
