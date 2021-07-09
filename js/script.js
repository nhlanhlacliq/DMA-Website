// JavaScript Document
//LightSlider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// Get the container element
var linkContainer = document.getElementById("menu-list");

// Get all buttons with class="nav-link" inside the container
var links = linkContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myNavigation");
//   if (x.className === "navigation") {
//     x.className += " responsive";
//   } else {
//     x.className = "navigation";
//   }
// }
