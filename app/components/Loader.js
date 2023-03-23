export function Loader() {
  const $loader = document.createElement("img");
  //El src de la imagen tiene que ser desde donde lo insertamos, en este caso desde del index.html.
  $loader.src = "./app/assets/loader.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");

  return $loader;
}
