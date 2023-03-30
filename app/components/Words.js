export function Words() {
  const $words = document.createElement("section");
  $words.classList.add("words-container");
  $words.innerHTML = `
    <article class="words">
      <a href="./index.html" data-color-dark="lightgray"  class="active-word">#</a>
      <a href="#a" data-color-dark="lightgray">A</a>
      <a href="#b" data-color-dark="lightgray">B</a>
      <a href="#c" data-color-dark="lightgray">C</a>
      <a href="#d" data-color-dark="lightgray">D</a>
      <a href="#e" data-color-dark="lightgray">E</a>
      <a href="#f" data-color-dark="lightgray">F</a>
      <a href="#g" data-color-dark="lightgray">G</a>
      <a href="#h" data-color-dark="lightgray">H</a>
      <a href="#i" data-color-dark="lightgray">I</a>
      <a href="#j" data-color-dark="lightgray">J</a>
      <a href="#k" data-color-dark="lightgray">K</a>
      <a href="#l" data-color-dark="lightgray">L</a>
      <a href="#m" data-color-dark="lightgray">M</a>
      <a href="#n" data-color-dark="lightgray">N</a>
      <a href="#o" data-color-dark="lightgray">O</a>
      <a href="#p" data-color-dark="lightgray">P</a>
      <a href="#q" data-color-dark="lightgray">Q</a>
      <a href="#r" data-color-dark="lightgray">R</a>
      <a href="#s" data-color-dark="lightgray">S</a>
      <a href="#t" data-color-dark="lightgray">T</a>
      <a href="#u" data-color-dark="lightgray">U</a>
      <a href="#v" data-color-dark="lightgray">V</a>
      <a href="#w" data-color-dark="lightgray">W</a>
      <a href="#x" data-color-dark="lightgray">X</a>
      <a href="#y" data-color-dark="lightgray">Y</a>
      <a href="#z" data-color-dark="lightgray">Z</a>
    </article>
  `;
  return $words;
}
