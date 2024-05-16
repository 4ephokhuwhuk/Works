  const fblink = document.querySelector(".feedback");
  const popup = document.querySelector(".modal-fb");
  const close = document.querySelector(".button-close");
  const name = popup.querySelector("[id=yourname]");
  const email = popup.querySelector("[id=email]")
  const post = popup.querySelector("[id=post]")
  const form = popup.querySelector("form")

  let isStorageSupport = true;
  let storage = "";

    try {
    storage = localStorage.getItem("username");
    } catch (err) {
    isStorageSupport = false;
    }
  fblink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
    yourname.value = storage;
    email.focus();
      }else {
      name.focus();}
    });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
    });
  form.addEventListener("submit", function (evt)
  {
      if (!yourname.value || !email.value || !post.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
    localStorage.setItem("username", yourname.value);
        }}
    });
  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
    evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
      } } });

