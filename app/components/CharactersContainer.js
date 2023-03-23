export function CharactersContainer() {
  const $charactersContainer = document.createElement("section");
  $charactersContainer.classList.add("characters-container");
  $charactersContainer.innerHTML = `
    <section class="cards-container">
    </section>
  `;

  return $charactersContainer;
}
