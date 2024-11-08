const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`