export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
    <section class="header-container">
      <div class="logo marvel-font">
        <a href="./index.html">MARVEL CHARACTERS</a>
      </div>
      <nav class="options">
        <a href="./index.html" class="animation-bottom to-center">
          Home
        </a>
        <a href="./search.html" class="animation-bottom to-center">
          🔍 Search
        </a>
        <a href="#" id="theme-btn" class="theme-btn">
          🌙
        </a>
      </nav>
    </section>
  `;
  return $header;
}
