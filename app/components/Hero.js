export function Hero() {
  const $hero = document.createElement("section");
  $hero.classList.add("hero-container");
  $hero.innerHTML = `
    <div class="hero-image">
      <div class="input-container">
        <div class="input-box">
          <input type="search" id="search-character" placeholder="Enter your character..." data-bg-dark="black" data-color-dark="lightgray">
          <button class="search-btn" data-bg-dark="black">🔍</button>
          <article class="search-results none" data-bg-dark="black">
            <div class="scroll" data-color-dark="white">
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
