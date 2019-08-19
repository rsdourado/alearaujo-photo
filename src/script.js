const menuBars = document.getElementById("menu-bars");
const closeIcon = document.getElementById("close-icon");

const toggleNav = () => {
  menuBars.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  document.getElementById("nav").classList.toggle("hidden");
  document.getElementById("title-link").classList.toggle("hidden");
}

menuBars.addEventListener("click", toggleNav);
closeIcon.addEventListener("click", toggleNav);