const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chillSpan = document.getElementById("chill");

if (temp <= 10 && wind > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  chillSpan.textContent = "N/A";
}
