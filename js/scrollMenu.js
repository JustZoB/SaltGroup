let totalHeight = $("body").outerHeight(true);
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

let home_link = $("#home_link");
let products_link = $("#products_link");
let services_link = $("#services_link");
let resources_link = $("#resources_link");
let about_link = $("#about_link");
let contact_us_link = $("#contact_us_link");

let home_p = $("#home").offset().top - 400;
let products_p = $("#products").offset().top - 400;
let services_p = $("#services").offset().top - 400;
let resources_p = $("#resources").offset().top - 400;
let about_p = $("#about").offset().top - 400;
let contact_us_p = $("#contact_us").offset().top - 400;

home_link.toggleClass(
  "box-menu__item__active",
  document.documentElement.scrollTop <= products_p
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

window.onscroll = function scroll() {
  home_link.toggleClass(
    "box-menu__item__active",
    document.documentElement.scrollTop <= products_p
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
};

window.onscroll = function scrollMenu() {
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
};
