$(function () {
  //Changing nav style after scrolling
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 90) {
      $("nav").addClass("wider");
    } else {
      $("nav").removeClass("wider");
    };
  });

});