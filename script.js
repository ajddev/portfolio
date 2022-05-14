// const svg = document.getElementById("my-svg");
const loadContainer = document.querySelector(".load-container");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  overlay.classList.toggle("visible");
}

overlay.addEventListener("click", function (e) {
  toggleMenu();
});

function loaded() {
  loadContainer.classList.add("hidden");
  // fade out and hide loader
  // enable overflow-y
}
