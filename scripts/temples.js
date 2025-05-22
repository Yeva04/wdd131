// Dynamic Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    hamburger.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    hamburger.textContent = "✖";
  }
});
