const currentYearElement = document.getElementById("year");

if (currentYearElement) {
  currentYearElement.textContent = String(new Date().getFullYear());
}
