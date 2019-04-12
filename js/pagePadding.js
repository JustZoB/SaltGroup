let home = $("#home");
let mainPage = $("#main_page");
let products = $("#products");
let contact_us = $("#contact_us");
let menu = $("#fixed_menu");
let navBurgerMenu = $("#burger-menu");
let menu__list = $("#menu__list");

home.toggleClass("page__small", $(window).width() >= 560);
mainPage.toggleClass("page__large", $(window).width() >= 753);
mainPage.toggleClass("page__medium__top", $(window).width() < 753);

menu.toggleClass("block-menu__fixed", $(window).width() < 974);
menu.toggleClass("box-menu", $(window).width() >= 974);
menu.toggleClass("burger-menu", $(window).width() < 560);
navBurgerMenu.toggleClass("burger-menu__nav ", $(window).width() < 560);
menu__list.toggleClass("box-menu__list", $(window).width() >= 560);

$(".box-menu__item").toggleClass("burger-menu__item", $(window).width() < 560);
$(".burger-menu__item").toggleClass("box-menu__item", $(window).width() >= 560);

products.toggleClass("page__large", $(window).width() >= 560);
products.toggleClass("page__medium", $(window).width() < 560);
contact_us.toggleClass("page__medium", $(window).width() >= 560);
contact_us.toggleClass("page__small", $(window).width() < 560);

$(window).resize(function renameClasses() {
  home.toggleClass("page__small", $(window).width() >= 560);
  mainPage.toggleClass("page__large", $(window).width() >= 753);
  mainPage.toggleClass("page__medium__top", $(window).width() < 753);

  menu.toggleClass("block-menu__fixed", $(window).width() < 974);
  menu.toggleClass("box-menu", $(window).width() >= 974);
  menu.toggleClass("burger-menu", $(window).width() < 560);
  navBurgerMenu.toggleClass("burger-menu__nav ", $(window).width() < 560);
  menu__list.toggleClass("box-menu__list", $(window).width() >= 560);

  $(".box-menu__item").toggleClass(
    "burger-menu__item",
    $(window).width() < 560
  );
  $(".burger-menu__item").toggleClass(
    "box-menu__item",
    $(window).width() >= 560
  );

  products.toggleClass("page__large", $(window).width() >= 560);
  products.toggleClass("page__medium", $(window).width() < 560);
  contact_us.toggleClass("page__medium", $(window).width() >= 560);
  contact_us.toggleClass("page__small", $(window).width() < 560);
});
