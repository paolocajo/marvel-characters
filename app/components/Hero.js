export function Hero() {
  const $hero = document.createElement("section");
  $hero.classList.add("hero-container");
  $hero.innerHTML = `
    <div class="hero-image">
      <div class="input-container">
        <div class="input-box">
          <input type="search" id="search-character" placeholder="Enter your character...">
          <button class="search-btn">🔍</button>
          <article class="search-results none">
            <div class="scroll">
            </div>
          </article>
        </div>
        <div class="hero-background">
        </div>
      </div>
    </div>
  `;
  return $hero;
}
