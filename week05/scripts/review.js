// Increment and display the number of reviews
window.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('counter').textContent = reviewCount;
});


// Get dates for footer
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`