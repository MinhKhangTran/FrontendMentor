const feld = document.querySelector(".sharefeld");
const toggler = document.querySelector(".sharetoggler");

toggler.addEventListener("click", () => {
  feld.classList.toggle("open");
  console.log("hi");
});
