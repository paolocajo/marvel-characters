import api from "./helpers/marvel_api.js";
import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  api.offset = 0;
  App();
});
