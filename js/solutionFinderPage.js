import dropdownsTriggerSolutionPage from "./dropdowns.js";

export default function solutionFinderPage() {
  const isSolutionFinderPage = location.pathname.endsWith(
    "/solution_finder.html",
  );
  if (isSolutionFinderPage) {
    dropdownsTriggerSolutionPage();

    const filterSwitchers = document.querySelectorAll(".solution_filters-btn");
    let currentBtn = Array.from(filterSwitchers).filter((btn) =>
      btn.classList.contains("active"),
    )[0];

    filterSwitchers.forEach((btn) => {
      const target = document.querySelector(btn.getAttribute("data-target"));
      target.style.display = btn.classList.contains("active") ? "grid" : "none";
    });

    filterSwitchers.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn === currentBtn) {
          return;
        }

        btn.classList.add("active");
        document.querySelector(btn.getAttribute("data-target")).style.display =
          "grid";

        currentBtn?.classList.remove("active");
        document.querySelector(
          currentBtn.getAttribute("data-target"),
        ).style.display = "none";

        currentBtn = btn;
      });
    });

    if (window.innerWidth <= 1200) {
      //скрыть показать все свойства товара
      const showSpecificationsBtns = document.querySelectorAll(
        ".found_item__properties__show",
      );

      showSpecificationsBtns.forEach((btn) => {
        const itemProps = btn.previousElementSibling.children;

        for (let index = 0; index < itemProps.length; index++) {
          const element = itemProps[index];
          index > 5
            ? (element.style.display = "none")
            : (element.style.display = "flex");
        }
      });

      showSpecificationsBtns.forEach((btn) => {
        const itemProps = btn.previousElementSibling.children;
        btn.addEventListener("click", (e) => {
          e.target.classList.toggle("showed");
          if (e.target.classList.contains("showed")) {
            e.target.textContent = "Hide Specifications";

            const itemProps = e.target.previousElementSibling.children;
            for (let index = 0; index < itemProps.length; index++) {
              const element = itemProps[index];

              element.style.display = "flex";
            }
          } else {
            e.target.textContent = "Full Specifications";

            for (let index = 0; index < itemProps.length; index++) {
              const element = itemProps[index];
              index > 5
                ? (element.style.display = "none")
                : (element.style.display = "flex");
            }
          }
        });
      });
    }

    const popUpBtn = document.getElementById("contact-us-btn");
    const modalPopUp = document.getElementById("modal");
    const modalClose = document.querySelector(".modal-close");

    popUpBtn.addEventListener("click", () => {
      modalPopUp.style.display = "flex";

      modalPopUp.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
          modalPopUp.style.display = "none";
        }
      });
    });

    modalClose.addEventListener("click", () => {
      modalPopUp.style.display = "none";
    });
  }
}
