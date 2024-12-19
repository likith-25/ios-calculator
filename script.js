const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});
