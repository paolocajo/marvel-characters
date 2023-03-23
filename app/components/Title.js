export function Title() {
  const $title = document.createElement("section");
  $title.classList.add("title-container");
  $title.innerHTML = `
    <h1>CHARACTERS</h1>
  `;
  return $title;
}
