// Footer Updates
const updateFooter = () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
};

// Toggle Hamburger Menu
const toggleMenu = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
};

// Species Data
const species = [
  { id: 1, name: "Ring-tailed Lemur", category: "lemur", status: "Endangered", img: "images/ringtailed.jpg" },
  { id: 2, name: "Indri Lemur", category: "lemur", status: "Critically Endangered", img: "images/indrilemur.jpeg" },
  { id: 3, name: "Panther Chameleon", category: "chameleon", status: "Least Concern", img: "images/chameleon.jpg" },
  { id: 4, name: "Parson’s Chameleon", category: "chameleon", status: "Near Threatened", img: "images/chameleonn.jpg" }
];

// Display Species
const displaySpecies = (filter = "all") => {
  const grid = document.getElementById("species-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const filteredSpecies = filter === "all" ? species : species.filter(s => s.category === filter);

  if (filteredSpecies.length === 0) {
    grid.innerHTML = `<p>No species found.</p>`;
    return;
  }

  filteredSpecies.forEach(s => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${s.img}" alt="${s.name}" loading="lazy">
      <h3>${s.name}</h3>
      <p>Status: ${s.status}</p>
    `;
    grid.appendChild(card);
  });
};

// Update Filter Buttons
const updateFilterButtons = (activeFilter) => {
  document.querySelectorAll(".filter button").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });
};

// Handle Filter Clicks
const setupFilterListeners = () => {
  const filterButtons = document.querySelectorAll(".filter button");
  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      displaySpecies(filter);
      updateFilterButtons(filter);
      localStorage.setItem("lastFilter", filter);
    });
  });
};

// Update Inquiry Submission Count
const updateInquiryCount = () => {
  const countElement = document.getElementById("inquiry-count");
  if (!countElement) return;

  let count = parseInt(localStorage.getItem("inquiryCount")) || 0;
  countElement.textContent = count;

  const form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", () => {
      count++;
      localStorage.setItem("inquiryCount", count);
      countElement.textContent = count;
    });
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateFooter();
  document.querySelector(".hamburger").addEventListener("click", toggleMenu);
  setupFilterListeners();
  const lastFilter = localStorage.getItem("lastFilter") || "all";
  displaySpecies(lastFilter);
  updateFilterButtons(lastFilter);
  updateInquiryCount();
});