$(function () {
  //Changing nav style after scrolling
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("header").addClass("wider");
    } else {
      $("header").removeClass("wider");
    };
    if ($(window).scrollTop() > 650) {
      $("#scroll-to-top").addClass("shown");
    } else {
      $("#scroll-to-top").removeClass("shown");
    };
  });
  
});