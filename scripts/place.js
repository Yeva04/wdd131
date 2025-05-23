// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windKph) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKph, 0.16) +
    0.3965 * tempC * Math.pow(windKph, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chillEl = document.getElementById("chill");

if (temp <= 10 && wind > 4.8) {
  chillEl.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  chillEl.textContent = "N/A";
}
