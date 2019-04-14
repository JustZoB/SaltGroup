$(document).ready(function() {
  function scrollNavigation() {
    let home_link = $("#home_link");
    let products_link = $("#products_link");
    let services_link = $("#services_link");
    let resources_link = $("#resources_link");
    let about_link = $("#about_link");
    let contact_us_link = $("#contact_us_link");

    let products_p = $("#products").offset().top - 500;
    let services_p = $("#services").offset().top - 500;
    let resources_p = $("#resources").offset().top - 400;
    let about_p = $("#about").offset().top - 500;
    let contact_us_p = $("#contact_us").offset().top - 400;

    home_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop - 1 <= products_p
    );
    products_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop > products_p &&
        document.documentElement.scrollTop <= services_p
    );
    services_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop > services_p &&
        document.documentElement.scrollTop <= resources_p
    );
    resources_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop > resources_p &&
        document.documentElement.scrollTop <= about_p
    );
    about_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop > about_p &&
        document.documentElement.scrollTop <= contact_us_p
    );
    contact_us_link.toggleClass(
      "box-menu__item__active",
      document.documentElement.scrollTop > contact_us_p
    );
  }

  function scrollMenu() {
    let borderBetweenButtons__1 = ($("body").outerHeight(true) - 600) / 3 - 150;
    let borderBetweenButtons__2 =
      (($("body").outerHeight(true) - 400) / 3) * 2 - 150;

    let button__1 = $("#scroll-button__1");
    let button__2 = $("#scroll-button__2");
    let button__3 = $("#scroll-button__3");
    let srcButton_1 = "img/scroll_button_active.png";
    let srcButton_2 = "img/scroll_button_inactive.png";

    if (document.documentElement.scrollTop < borderBetweenButtons__1) {
      button__1.attr("src", srcButton_1);
      button__2.attr("src", srcButton_2);
      button__3.attr("src", srcButton_2);
    } else if (
      document.documentElement.scrollTop >= borderBetweenButtons__1 &&
      document.documentElement.scrollTop < borderBetweenButtons__2
    ) {
      button__1.attr("src", srcButton_2);
      button__2.attr("src", srcButton_1);
      button__3.attr("src", srcButton_2);
    } else {
      button__1.attr("src", srcButton_2);
      button__2.attr("src", srcButton_2);
      button__3.attr("src", srcButton_1);
    }
  }

  function renameClasses() {
    let home = $("#home");
    let mainPage = $("#main_page");
    let products = $("#products");
    let contact_us = $("#contact_us");
    let menu = $("#fixed_menu");
    let navBurgerMenu = $("#burger-menu");
    let menu__list = $("#menu__list");

    home.toggleClass("page__small", $(window).width() >= 560);
    mainPage.toggleClass("page__large__top", $(window).width() >= 753);
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
  }

  function burgerMenu(selector) {
    let menu = $(selector);
    let button = $("#burger-button");
    let links = menu.find(".burger-menu__item");
    let links_2 = menu.find(".box-menu__item");
    let overlay = menu.find(".burger-menu__overlay");

    function toggleMenu() {
      menu.toggleClass("burger-menu_active");

      if (menu.hasClass("burger-menu_active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    }
    function toggleMenu_links() {
      if ($(window).width() < 560) {
        menu.toggleClass("burger-menu_active");

        if (menu.hasClass("burger-menu_active")) {
          $("body").css("overflow", "hidden");
        } else {
          $("body").css("overflow", "visible");
        }
      }
    }
    button.click(toggleMenu);

    links.on("click", toggleMenu_links);
    links_2.on("click", toggleMenu_links);
    overlay.on("click", toggleMenu);
  }

  burgerMenu("#fixed_menu");

  window.addEventListener("scroll", scrollNavigation);
  window.addEventListener("scroll", scrollMenu);
  $(window).trigger("scroll");
  $(window).resize(renameClasses);
  $(window).trigger("resize");
});
