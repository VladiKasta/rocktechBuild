export default function initIndexPage() {
  const isIndexPage =
    location.pathname.endsWith("/") ||
    location.pathname.endsWith("/index.html");

  if (isIndexPage) {
    const tiles = document.querySelectorAll(".tile");
    let activeTile = tiles[0];

    const backgrounds = [
      'url("../assets/img/MainSlider1.jpg")',
      'url("../assets/img/MainSlider2.jpg")',
      'url("../assets/img/MainSlider3.jpg")',
    ];

    // Изначально ставим фон и цвет для первого блока
    activeTile.querySelector("h2").style.color = "white";
    activeTile.style.setProperty("--before-bg", backgrounds[0]);

    tiles.forEach((tile, index) => {
      tile.addEventListener("mouseenter", (e) => {
        if (e.currentTarget !== activeTile) {
          // Сбросить стиль у предыдущего активного
          activeTile.querySelector("h2").style.color = "black";
          activeTile.style.removeProperty("--before-bg");

          // Обновить активный
          activeTile = e.currentTarget;

          // Установить стиль для нового активного
          activeTile.querySelector("h2").style.color = "white";
          activeTile.style.setProperty("--before-bg", backgrounds[index]);
        }
      });
    });
  }
}
