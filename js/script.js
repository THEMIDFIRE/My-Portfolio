$(function () {
  //Changing nav style after scrolling
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("header").addClass("wider");
    } else {
      $("header").removeClass("wider");
    };
  });
  
});
