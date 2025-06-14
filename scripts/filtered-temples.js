// Dynamic Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    hamburger.textContent = "☰";
  } else {
    navMenu.style.display = "block";
    hamburger.textContent = "✖";
  }
});

// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra_ghana_temple_lds.jpeg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "images/durban_south_africa.webp"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52997,
    imageUrl: "images/tokyo_japan_temple.jpeg"
  }
];

// Display Temples with Error Handling
const templeGrid = document.getElementById("temple-grid");
const pageTitle = document.getElementById("page-title");

function displayTemples(templeArray) {
  templeGrid.innerHTML = "";
  templeArray.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" onerror="console.error('Failed to load image for ${temple.templeName}: ${temple.imageUrl}'); this.src='https://via.placeholder.com/400x250?text=${temple.templeName}'">
    `;
    templeGrid.appendChild(card);
  });
}

// Filter Functions
function filterTemples(filter) {
  let filteredTemples = temples;
  pageTitle.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);

  if (filter === "old") {
    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  } else if (filter === "new") {
    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  } else if (filter === "large") {
    filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (filter === "small") {
    filteredTemples = temples.filter(temple => temple.area < 10000);
  }

  displayTemples(filteredTemples);
}

// Navigation Event Listeners
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    filterTemples(filter);
    // Close menu on link click in mobile view
    if (window.innerWidth < 768) {
      navMenu.style.display = "none";
      hamburger.textContent = "☰";
    }
  });
});

// Initial Display
displayTemples(temples);