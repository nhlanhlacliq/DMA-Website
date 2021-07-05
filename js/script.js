// JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// var shiftWindow = function () {
//   scrollBy(0, -150);
// };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);
