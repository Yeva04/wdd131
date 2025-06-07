// Footer Updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Product Array
const products = [
  { id: 1, name: "Smart Thermostat" },
  { id: 2, name: "Wireless Headphones" },
  { id: 3, name: "4K Smart TV" },
  { id: 4, name: "Fitness Tracker" },
  { id: 5, name: "Robot Vacuum" }
];

// Populate Product Options
function populateProducts() {
  const productSelect = document.getElementById("product");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
}

// Display Confirmation Data
function displayConfirmation() {
  const params = new URLSearchParams(window.location.search);
  const confirmProduct = document.getElementById("confirm-product");
  const confirmRating = document.getElementById("confirm-rating");
  const confirmInstallDate = document.getElementById("confirm-install-date");
  const confirmFeatures = document.getElementById("confirm-features");
  const confirmReview = document.getElementById("confirm-review");
  const confirmUsername = document.getElementById("confirm-username");

  if (confirmProduct) confirmProduct.textContent = params.get("product") || "N/A";
  if (confirmRating) confirmRating.textContent = params.get("rating") || "N/A";
  if (confirmInstallDate) confirmInstallDate.textContent = params.get("install-date") || "N/A";
  if (confirmFeatures) confirmFeatures.textContent = params.getAll("features").join(", ") || "None";
  if (confirmReview) confirmReview.textContent = params.get("review") || "None";
  if (confirmUsername) confirmUsername.textContent = params.get("username") || "Anonymous";
}

// Review Counter
function updateReviewCounter() {
  const reviewCount = document.getElementById("review-count");
  if (reviewCount) {
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    reviewCount.textContent = count;
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  populateProducts();
  if (window.location.pathname.includes("review.html")) {
    displayConfirmation();
    updateReviewCounter();
  }
});