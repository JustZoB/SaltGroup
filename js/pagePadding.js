let topOfPage = $("#top_of_page");
let mainPage = $("#main_page");
let numbers = $("#numbers");
let contact_us = $("#contact_us");

topOfPage.toggleClass("page__small", $(window).width() >= 560);
mainPage.toggleClass("page__large", $(window).width() >= 560);
mainPage.toggleClass("page__medium__top", $(window).width() < 560);
numbers.toggleClass("page__large", $(window).width() >= 560);
numbers.toggleClass("page__medium", $(window).width() < 560);
contact_us.toggleClass("page__medium", $(window).width() >= 560);
contact_us.toggleClass("page__small", $(window).width() < 560);

$(window).resize(function renameClasses() {
  topOfPage.toggleClass("page__small", $(window).width() >= 560);
  mainPage.toggleClass("page__large", $(window).width() >= 560);
  mainPage.toggleClass("page__medium__top", $(window).width() < 560);
  numbers.toggleClass("page__large", $(window).width() >= 560);
  numbers.toggleClass("page__medium", $(window).width() < 560);
  contact_us.toggleClass("page__medium", $(window).width() >= 560);
  contact_us.toggleClass("page__small", $(window).width() < 560);
});
