// Get current count or default to 0
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Increment and save back to localStorage
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("review-count").textContent = count;