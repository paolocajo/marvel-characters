import api from "../helpers/marvel_api.js";
import { ajax } from "../helpers/ajax.js";
import { CharactersContainer } from "./CharactersContainer.js";
import { Loader } from "./Loader.js";
import { Separator } from "./Separator.js";
import { Title } from "./Title.js";
import { Words } from "./Words.js";
import { Card } from "./Card.js";
import { CharacterContainer } from "./CharacterContainer.js";
import { Detail } from "./Detail.js";

export async function Router() {
  const d = document,
    w = window,
    $root = d.getElementById("root");

  let { pathname, hash } = location;

  if (pathname === "/index.html" || pathname === "/") {
    $root.appendChild(Title());
    $root.appendChild(Words());
    $root.appendChild(Separator());
    $root.appendChild(CharactersContainer());
    const $charactersContainer = d.querySelector(".characters-container");
    $charactersContainer.appendChild(Loader());
    if (hash < 2) {
      await ajax(
        {
          url: api.CHARACTERS,
          cbSuccess: (characters) => {
            console.log(characters);
            let {
              data: { results },
            } = characters;
            console.log(results);
            let html = "";
            results.forEach((character) => (html += Card(character)));

            $charactersContainer.querySelector(".cards-container").innerHTML =
              html;
            d.querySelector(".loader").style.display = "none";
          },
        },
        ".characters-container"
      );
    }
    if (hash.length === 2) {
      await ajax(
        {
          url: `${api.CHARACTER_STARTS_WITH}${hash.slice(1)}&${
            api.API_KEY_COMPLETE
          }`,
          cbSuccess: (characters) => {
            console.log(characters);
            let {
              data: { results },
            } = characters;
            console.log(results);
            let html = "";
            results.forEach((character) => (html += Card(character)));

            $charactersContainer.querySelector(".cards-container").innerHTML =
              html;
            d.querySelector(".loader").style.display = "none";
          },
        },
        ".characters-container"
      );
    }
    //
  } else if (pathname === "/detail.html") {
    $root.appendChild(CharacterContainer());
    const $characterContainer = d.querySelector(".character-container");
    $characterContainer.appendChild(Loader());
    await ajax(
      {
        url: `${api.CHARACTER_NAME}${hash.slice(1)}&${api.API_KEY_COMPLETE}`,
        cbSuccess: (character) => {
          if (character.data.count == 0) {
            $characterContainer.innerHTML = `
            <div class="error"><p>The character <mark>${hash.slice(
              1
            )}</mark> is not found</p></ div>`;

            return;
          }
          console.log(character);
          let {
            data: { results },
          } = character;
          let html = Detail(results[0]);
          $characterContainer.querySelector(".character-content").innerHTML =
            html;
          d.querySelector(".loader").style.display = "none";
        },
      },
      ".characters-container"
    );
  }
}
