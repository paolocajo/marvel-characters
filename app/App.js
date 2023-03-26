import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";
import { activeWord } from "./helpers/active_word.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;

  $root.appendChild(Header());
  Router();
  InfiniteScroll();
  activeWord();
}
