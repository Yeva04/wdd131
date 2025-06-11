// Footer Updates
const updateFooter = () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
};

// Photo Data
const photos = [
  { id: 1, title: "Sunset Over Mountains", category: "landscape", url: "images/landscape1.jpg" },
  { id: 2, title: "Morning Mist", category: "landscape", url: "images/landscape2.jpg" },
  { id: 3, title: "Portrait in Park", category: "portrait", url: "images/portrait1.jpg" },
  { id: 4, title: "Candid Smile", category: "portrait", url: "images/portrait2.jpg" },
  { id: 5, title: "Wedding Celebration", category: "event", url: "images/event1.jpg" },
  { id: 6, title: "Festival Lights", category: "event", url: "images/event2.jpg" }
];

// Display Photos
const displayPhotos = (filter = "all") => {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const filteredPhotos = filter === "all" ? photos : photos.filter(photo => photo.category === filter);

  if (filteredPhotos.length === 0) {
    grid.innerHTML = `<p>No photos found.</p>`;
    return;
  }

  filteredPhotos.forEach(photo => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}" loading="lazy">
      <p>${photo.title}</p>
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
      displayPhotos(filter);
      updateFilterButtons(filter);
      localStorage.setItem("lastFilter", filter);
    });
  });
};

// Update Contact Submission Count
const updateContactCount = () => {
  const countElement = document.getElementById("contact-count");
  if (!countElement) return;

  let count = parseInt(localStorage.getItem("contactCount")) || 0;
  countElement.textContent = count;

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", () => {
      count++;
      localStorage.setItem("contactCount", count);
      countElement.textContent = count;
    });
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateFooter();
  setupFilterListeners();
  const lastFilter = localStorage.getItem("lastFilter") || "all";
  displayPhotos(lastFilter);
  updateFilterButtons(lastFilter);
  updateContactCount();
});