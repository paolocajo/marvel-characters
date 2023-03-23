export function CharacterContainer() {
  const $characterContainer = document.createElement("section");
  $characterContainer.classList.add("character-container");
  $characterContainer.innerHTML = `
    <article class="character-content">
    </article>
  `;

  return $characterContainer;
}
