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

window.addEventListener("DOMContentLoaded", () => {
  console.log("Ready");
  const langEN = document.getElementById("lang-en");
  const langHU = document.getElementById("lang-hu");

  const allEngs = document.querySelectorAll(".lang-en-x");
  const allHuns = document.querySelectorAll(".lang-hu-x");

  console.log({ allHuns });

  const currentLang = sessionStorage.getItem("curr-lang");
  // update page title
  const currentURL = window.location.href;
  const splitted = currentURL.split("/");
  const currentPage = splitted[splitted.length - 1];

  console.log(currentLang);
  if (!currentLang) {
    sessionStorage.setItem("curr-lang", "EN");
  }

  if (currentLang === "HU") {
    for (let i = 0; i < allHuns.length; i++) {
      allHuns[i].style.display = "block";
      allEngs[i].style.display = "none";
    }
    updatePageTitle(currentPage, "HU");
  }

  if (currentLang === "EN") {
    for (let i = 0; i < allEngs.length; i++) {
      allEngs[i].style.display = "block";
      allHuns[i].style.display = "none";
    }
    updatePageTitle(currentPage, "EN");
  }

  langEN.addEventListener("click", () => {
    console.log("en");
    sessionStorage.setItem("curr-lang", "EN");
    for (let i = 0; i < allEngs.length; i++) {
      allEngs[i].style.display = "block";
      allHuns[i].style.display = "none";
    }
    updatePageTitle(currentPage, "EN");
  });

  langHU.addEventListener("click", () => {
    console.log("hu");
    sessionStorage.setItem("curr-lang", "HU");
    for (let i = 0; i < allHuns.length; i++) {
      allHuns[i].style.display = "block";
      allEngs[i].style.display = "none";
    }
    updatePageTitle(currentPage, "HU");
  });
});

function updatePageTitle(page, currentLang) {
  if (page === "index.html" && currentLang === "HU") {
    document.title = "Itton";
  } else if (page === "index.html" && currentLang === "EN") {
    document.title = "Home";
  } else if (page === "labs.html" && currentLang === "HU") {
    document.title = "Labs";
  } else if (page === "labs.html" && currentLang === "EN") {
    document.title = "Labs";
  } else if (page === "instructors.html" && currentLang === "HU") {
    document.title = "Oktatók";
  } else if (page === "instructors.html" && currentLang === "EN") {
    document.title = "Instructors";
  } else if (page === "faqs.html" && currentLang === "HU") {
    document.title = "GYIK";
  } else if (page === "faqs.html" && currentLang === "EN") {
    document.title = "FAQs";
  } else if (page === "thesis.html" && currentLang === "HU") {
    document.title = "Tézis";
  } else if (page === "thesis.html" && currentLang === "EN") {
    document.title = "Theses";
  } else {
    console.log("noe one");
  }
}
