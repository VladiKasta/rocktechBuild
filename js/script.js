import burgerTrigger from "./burger.js";
import initIndexPage from "./initIndexPage.js";
import productPage from "./productPage.js";
import solutionFinderPage from "./solutionFinderPage.js";
import initSwipers from "./swipers.js";

document.addEventListener("DOMContentLoaded", function () {
  burgerTrigger();
  initSwipers();
  initIndexPage();
  productPage();
  solutionFinderPage();
});
