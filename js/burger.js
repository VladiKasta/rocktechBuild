export default function burgerTrigger() {
  const burger = document.getElementById("burger");
  const burgerMenu = document.querySelector(".burger__menu");
  const navItems = burgerMenu.querySelector(".header__nav");
  const searchMobile = document.querySelector(".search__mobile");
  const burgerWrapper = burgerMenu.querySelector(".burger__wrapper");

  burger.addEventListener("click", () => {
    if (burgerWrapper.style.display == "block") {
      burgerWrapper.style.display = "none";
      /* document.body.classList.remove("noscroll"); */
    } else {
      burgerWrapper.style.display = "block";
      /* document.body.classList.add("noscroll"); */
    }

    /* searchMobile.classList.toggle("hidden"); */
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("visible");
    navItems.classList.toggle("visible");
  });
}
