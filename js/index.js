// Button modal box //
const button = document.querySelector("button");
const modal = document.querySelector(".modal");
const modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
});

modalX.addEventListener("click", function () {
    modal.classList.remove("show-modal");
});