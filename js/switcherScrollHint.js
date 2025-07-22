export default function switcherScrollHint() {
  const scroller = document.getElementById("scrollHint");
  let hasScrolled = false;

  // Запускаем анимацию каждые 3 секунды
  const scrollInterval = setInterval(() => {
    hintScroll();
  }, 3000);

  function hintScroll() {
    if (hasScrolled) return;

    scroller.scrollTo({ left: 300, behavior: "smooth" });

    setTimeout(() => {
      scroller.scrollTo({ left: 0, behavior: "smooth" });
    }, 600);
  }

  // Слушаем физическое взаимодействие пользователя
  scroller.addEventListener("pointerdown", () => {
    hasScrolled = true;
    clearInterval(scrollInterval);
  });

  // На всякий случай также для мобильных
  scroller.addEventListener("touchstart", () => {
    hasScrolled = true;
    clearInterval(scrollInterval);
  });
}
