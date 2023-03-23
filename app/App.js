import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;

  $root.appendChild(Header());
  Router();
}
