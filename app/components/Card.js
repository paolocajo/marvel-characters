export function Card(props) {
  let { id, name, thumbnail } = props;

  let imgNotAvailable = thumbnail.path.includes("image_not_available");

  return `
    <a href="./detail.html#${name.toLowerCase()}" data-id="${id}">
      <article class="card">
        <img src="${thumbnail.path}.${thumbnail.extension}" alt="${name}" ${
    imgNotAvailable ? 'class="not-available"' : ""
  }>
        <p>${name}</p>
      </article>
    </a>
  `;
}
