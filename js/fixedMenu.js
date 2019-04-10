/*function fixedMenu(selector) {
  let header = $(selector);
  let menu = header.find(".menu");
  let button = header.find(".test-fixed-menu__button");

  button.on("click", () => alert("top" + menu.getBoundingClientRect(top)));
  function toggleMenu() {
    if (menu.getBoundingClientRect(top) < 0) {
        header.toggleClass(".fixed-menu");
      } else {
      }
    }
}*/
/*
let testBUT = document.getElementsByClassName("menu");
let testLocation = testBUT.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if (
    testBUT.classList.contains("fixed-menu") &&
    window.pageYOffset < testLocation
  ) {
    testBUT.classList.remove("fixed-menu");
  } else if (window.pageYOffset > testLocation) {
    testBUT.classList.add("fixed-menu");
  }
};
*/
/*alert($(".test-fixed-menu__button"));
 */
