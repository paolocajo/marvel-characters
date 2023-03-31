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
import { Hero } from "./Hero.js";
import { SearchLink } from "./SearchLink.js";
import { darkThemeLoad } from "../helpers/dark_theme_load.js";

export async function Router() {
  const d = document,
    w = window,
    $root = d.getElementById("root");

  let { pathname, hash } = location;

  if (
    pathname === "/marvel-characters/index.html" ||
    pathname === "/marvel-characters/"
  ) {
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
            // console.log(characters);
            let {
              data: { results },
            } = characters;
            // console.log(results);
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
            // console.log(characters);
            let {
              data: { results },
            } = characters;
            // console.log(results);
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
  } else if (pathname === "/marvel-characters/detail.html") {
    $root.appendChild(CharacterContainer());
    const $characterContainer = d.querySelector(".character-container");
    $characterContainer.appendChild(Loader());
    await ajax(
      {
        url: `${api.CHARACTER_NAME}${hash.slice(1)}&${api.API_KEY_COMPLETE}`,
        cbSuccess: (character) => {
          if (character.data.count == 0) {
            $characterContainer.innerHTML = `
            <div class="error" data-color-dark="lightgray"><p>The character <mark>${hash.slice(
              1
            )}</mark> is not found</p></ div>`;

            return;
          }
          // console.log(character);
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
  } else if (pathname === "/marvel-characters/search.html") {
    $root.appendChild(Hero());
    const $inputSearch = d.getElementById("search-character");
    const $searchResults = d.querySelector(".search-results");
    $searchResults.querySelector(".scroll").appendChild(Loader());
    d.addEventListener("click", (e) => {
      if (e.target.matches(".search-btn") && $inputSearch.value.length >= 1) {
        location.href = `./detail.html#${$inputSearch.value}`;
      }
    });
    $inputSearch.oninput = (e) => {
      if (e.target.value.length === 0) {
        $searchResults.classList.remove("block");
      }
    };
    d.addEventListener("keyup", async (e) => {
      if (e.target === $inputSearch) {
        if (e.key === "Escape") e.target.value = "";
        if (e.target.value.length >= 1) {
          if (e.key === "Enter")
            location.href = `./detail.html#${e.target.value}`;
          $searchResults.classList.add("block");
          await ajax(
            {
              url: `${api.CHARACTER_STARTS_WITH}${e.target.value}&${api.API_KEY_COMPLETE}`,
              cbSuccess: (characters) => {
                // console.log(characters);
                let {
                  data: { results },
                  data,
                } = characters;
                // console.log(results);
                let html = "";
                results.forEach((character) => (html += SearchLink(character)));
                $searchResults.querySelector(".scroll").innerHTML = html;
                if (data.count === 0) {
                  $searchResults.querySelector(
                    ".scroll"
                  ).innerHTML = `<a data-color-dark="white">No results found for
            <mark>${e.target.value}</mark></a>`;
                }
                //d.querySelector(".loader").style.display = "none";
                darkThemeLoad();
              },
            },
            ".scroll"
          );
        } else {
          $searchResults.classList.remove("block");
        }
      }
    });
  }
}
