const navBtn = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".section-header");

navBtn.addEventListener("click", () => {
  headerEl.classList.toggle("open-nav");
});
