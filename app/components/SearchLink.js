export function SearchLink(props) {
  let { id, name } = props;

  return `
    <a href="./detail.html#${name.toLowerCase()}" data-id="${id}" data-color-dark="white">
      ${name}
    </a>
  `;
}
