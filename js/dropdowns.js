export default function dropdownsTriggerSolutionPage() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(dropdown.getAttribute("data-target"));
    const toggle = dropdown.querySelector(".dropdown-toggle");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    menu.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-item")) {
        toggle.textContent = e.target.textContent;
        dropdown.classList.remove("open");
      }
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
}
