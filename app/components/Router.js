import { CharactersContainer } from "./CharactersContainer.js";
import { Loader } from "./Loader.js";
import { Separator } from "./Separator.js";
import { Title } from "./Title.js";
import { Words } from "./Words.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { pathname } = location;

  if (pathname === "index.html") {
    $main.appendChild(Title());
    $main.appendChild(Words());
    $main.appendChild(Separator());
    $main.appendChild(CharactersContainer());
    $charactersContainer = d.querySelector(".characters-container");
    $charactersContainer.appendChild(Loader());
  } else if (pathname === "detail.html") {
    //
  }
}
