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
