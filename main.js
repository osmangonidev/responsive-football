var bars_icon = document.querySelector(".bars-icon");
var mobile_nav = document.querySelector(".mobile-nav");
var login_button = document.querySelector(".login-button");
var cross_icon = document.querySelector(".cross-icon")

bars_icon.addEventListener("click", function () {
  mobile_nav.style.display = "block";
  cross_icon.style.display = "block";

  bars_icon.style.display = "none";
  login_button.style.display = "none";
});

cross_icon.addEventListener("click", function () {
  mobile_nav.style.display = "none";
  bars_icon.style.display = "block";
  login_button.style.display = "block";
});

