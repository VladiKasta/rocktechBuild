export default function innovationPage() {
  const isInnovationPage = location.pathname.endsWith("/innovation.html");
  if (isInnovationPage) {
    //отркытие закрытие аккордиона
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
      const content = item.querySelector(".accordion__item__content");
      item.addEventListener("click", () => {
        item.classList.toggle("open");
        content.classList.toggle("open");

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
        /*  item.classList.contains("open")
          ? (content.style.display = "block")
          : (content.style.display = "none"); */
      });
    });
  }
}
