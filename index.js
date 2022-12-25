const bar = document.querySelector("#bar");
const links = document.querySelector(".nav");

bar.addEventListener("click", () => {
  links.classList.toggle("show-bar");
});
