const price = document.querySelector(".button-price-catalog");
const pbpopup = document.querySelector(".product-basket");
const closepb = document.querySelector(".button-close-pb");


price.addEventListener("click", function (evt) {
  evt.preventDefault();
  pbpopup.classList.add("modal-show");
});
closepb.addEventListener("click", function (evt) {
  evt.preventDefault();
  pbpopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (pbpopup.classList.contains("modal-show")) {
      evt.preventDefault();
      pbpopup.classList.remove("modal-show");
    }
  }
});
