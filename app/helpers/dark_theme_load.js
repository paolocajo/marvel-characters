import { options } from "./dark_theme_options.js";
export function darkThemeLoad() {
  if (localStorage.getItem("theme") === null) ls.setItem("theme", "light");
  if (localStorage.getItem("theme") === "light") options.lightMode();
  if (localStorage.getItem("theme") === "dark") options.darkMode();
}
