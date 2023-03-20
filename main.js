/* Please ❤ this if you like it! */

(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on("click", function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });
})(jQuery);
$(document).ready(function () {
  $(".faqs-container .faq-singular:first-child")
    .addClass("active")
    .children(".faq-answer")
    .slideDown(); //Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});
