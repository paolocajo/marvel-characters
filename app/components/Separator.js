export function Separator() {
  const $separator = document.createElement("div");
  $separator.classList.add("separator");
  $separator.innerHTML = `
    <hr>
  `;
  return $separator;
}
