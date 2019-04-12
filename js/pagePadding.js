let topOfPage = $("#top_of_page");
let mainPage = $("#main_page");
let numbers = $("#numbers");
let contact_us = $("#contact_us");

if ($(window).width() < 560) {
  topOfPage.removeClass("page__small");
}
if ($(window).width() < 560) {
  mainPage
    .removeClass("page__large")
    .addClass("page__medium")
    .css("padding-bottom", "0px");
}
if ($(window).width() < 560) {
  numbers.removeClass("page__large").addClass("page__medium");
}
if ($(window).width() < 560) {
  contact_us.removeClass("page__medium").addClass("page__small");
}

$(window).resize(function renameClasses() {
  if (topOfPage.hasClass("page__small") && $(window).width() < 560) {
    topOfPage.removeClass("page__small");
  } else if (!topOfPage.hasClass("page__small") && $(window).width() >= 560) {
    topOfPage.addClass("page__small");
  }

  if (mainPage.hasClass("page__large") && $(window).width() < 560) {
    mainPage
      .removeClass("page__large")
      .addClass("page__medium")
      .css("padding-bottom", "0px");
  } else if (!mainPage.hasClass("page__large") && $(window).width() >= 560) {
    mainPage
      .removeClass("page__medium")
      .addClass("page__large")
      .css("padding-bottom", "unset");
  }

  if (numbers.hasClass("page__large") && $(window).width() < 560) {
    numbers.removeClass("page__large").addClass("page__medium");
  } else if (!numbers.hasClass("page__large") && $(window).width() >= 560) {
    numbers.removeClass("page__medium").addClass("page__large");
  }

  if (contact_us.hasClass("page__medium") && $(window).width() < 560) {
    contact_us.removeClass("page__medium").addClass("page__small");
  } else if (!contact_us.hasClass("page__medium") && $(window).width() >= 560) {
    contact_us.removeClass("page__small").addClass("page__medium");
  }
});
