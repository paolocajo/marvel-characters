import api from "./helpers/marvel_api.js";
import { App } from "./App.js";
import { darkThemeLoad } from "./helpers/dark_theme_load.js";
import { options } from "./helpers/dark_theme_options.js";

document.addEventListener("DOMContentLoaded", async () => {
  await App();
  darkThemeLoad();
});
window.addEventListener("hashchange", async () => {
  api.offset = 20;
  api.loading = false;
  await App();
  darkThemeLoad();
});

window.addEventListener("click", (e) => {
  if (e.target.matches(".theme-btn")) {
    const d = document;
    e.preventDefault();
    if (d.querySelector(".theme-btn").textContent === "🌙") {
      options.darkMode();
    } else {
      options.lightMode();
    }
  }
});
