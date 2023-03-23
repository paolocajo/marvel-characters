export function Detail(props) {
  let { id, name, description, modified, thumbnail, urls } = props;

  let imgNotAvailable = thumbnail.path.includes("image_not_available");
  let dateFormat = new Date(modified).toLocaleString();
  let urlComics = urls.find((obj) => obj.type === "comiclink").url;

  return `
    <img src="${thumbnail.path}.${thumbnail.extension}" alt="${name}" ${
    imgNotAvailable
      ? 'class="character-img not-available"'
      : 'class="character-img"'
  }>
      <article class="character-detail">
    <h2 class="character-name">
          ${name}
    </h2>
    <div class="character-data-container">
          <span class="pill"><span class="title-pill">ID</span><span class="content-pill">#${id}</span></span>
          <span class="pill"><span class="title-pill">Modified</span><span class="content-pill" datetime="${modified}">${dateFormat}</span></span>
        </div>
    <p class="character-description">${(description ||=
      "Description not available")}</p>
    <a href="${urlComics}" target="_blank" rel=”noreferrer noopener” class="character-comics">See all comics</a>
  `;
}
