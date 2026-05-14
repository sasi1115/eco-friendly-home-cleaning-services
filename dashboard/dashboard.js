/* ========================= MOBILE SIDEBAR TOGGLE ========================= */

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});

/* ========================= NOTIFICATION BUTTON ========================= */

const notificationBtn =
document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

    notificationBtn.classList.toggle("active");

});