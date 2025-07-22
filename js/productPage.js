import switcherScrollHint from "./switcherScrollHint.js";

export default function productPage() {
  const isProductPage = location.pathname.endsWith("/product_page.html");

  if (isProductPage) {
    const switcher = document.querySelector(".product__info__switcher");
    const switchCategory = switcher.querySelectorAll(".switch__category");
    const switcherSectionsNodes =
      document.querySelectorAll(".switcher__section");

    /*   class AccordionSections {
      constructor(sections, sectionsToShow) {
        this.sections = {};
        for (let index = 0; index < sections.length; index++) {
          const section = sections[index].querySelector("span").textContent;
          if (section) {
            const key = section.toLowerCase();
            this.sections[key] = sectionsToShow[index];
          }
        }
      }
    } */

    /*   const accordionSectionClasses = new AccordionSections(
      switchCategory,
      switcherSectionsNodes,
    );
    console.log(accordionSectionClasses); */

    if (window.innerWidth <= 1480) {
      switcherScrollHint();
    }

    let currentCategory = switchCategory[0];
    currentCategory.classList.add("active");

    let currentContent = document.querySelector(
      currentCategory.getAttribute("data-target"),
    );
    currentContent.classList.remove("hidden");

    switchCategory.forEach((category) => {
      const targetClassToShow = category.getAttribute("data-target");
      const content = document.querySelector(targetClassToShow);

      category.addEventListener("click", (event) => {
        if (category == currentCategory) {
          return;
        } else {
          currentContent.classList.add("hidden");
          currentCategory.classList.remove("active");

          currentCategory = category;

          if (content) {
            currentContent = content;
          }

          currentCategory.classList.add("active");
          currentContent.classList.remove("hidden");
        }
      });
    });
  }
}
