const map = document.querySelector(".map");
const mappopup = document.querySelector(".modal-map");
const closemap = document.querySelector(".button-close-map");


map.addEventListener("click", function () {
  mappopup.classList.add("modal-show");
});
closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
mappopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mappopup.classList.remove("modal-show");
    }
  }
});
