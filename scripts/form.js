// Product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate product select dropdown meu
window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Store the number of reviews in localStorage
if (!localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', 0);
}


// Get dates for footer
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`