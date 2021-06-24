const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");

menu.addEventListener("click", menu_click);

function menu_click() {
  menu.classList.toggle("active");
  ul.classList.toggle("active");
}

//for click
var li_Clicked = document.querySelectorAll("li");

[].forEach.call(li_Clicked, function (el) {
  el.addEventListener("click", function () {
    [].forEach.call(li_Clicked, function (click) {
      click.classList.remove("active");
    });
    el.classList.add("active");
  });
});
