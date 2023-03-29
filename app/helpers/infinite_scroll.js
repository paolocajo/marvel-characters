import api from "./marvel_api.js";
import { Card } from "../components/Card.js";
import { ajax } from "./ajax.js";
import { SearchLink } from "../components/SearchLink.js";
import { Loader } from "../components/Loader.js";

let loading = false;

export async function InfiniteScroll() {
  const d = document,
    w = window;

  let apiURL;

  //INDEX
  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash, pathname } = w.location;

    if (!loading && scrollTop + clientHeight >= scrollHeight - 50) {
      loading = true;

      if (pathname === "/index.html" || pathname === "/") {
        if (hash < 2) apiURL = `${api.CHARACTERS}&offset=${api.offset}`;
        if (hash.length === 2)
          apiURL = `${api.CHARACTER_STARTS_WITH}${hash.slice(1)}&offset=${
            api.offset
          }&${api.API_KEY_COMPLETE}`;
      } else {
        return false;
      }

      d.querySelector(".loader").style.display = "block";

      await ajax(
        {
          url: apiURL,
          cbSuccess: (characters) => {
            console.log(characters);
            let {
              data: { results },
              data: { count },
            } = characters;
            console.log(results);

            if (count === 0) {
              d.querySelector(".loader").style.display = "none";
              return;
            }

            let html = "";
            results.forEach((character) => (html += Card(character)));

            document
              .querySelector(".cards-container")
              .insertAdjacentHTML("beforeend", html);
            d.querySelector(".loader").style.display = "none";
            loading = false;
            api.offset += 20;
          },
        },
        ".characters-container"
      );
    }
  });

  //SEARCH
  const $scroll = d.querySelector(".scroll");
  $scroll.addEventListener("scroll", async (e) => {
    let scrollTop = $scroll.scrollTop,
      clientHeight = $scroll.clientHeight,
      scrollHeight = $scroll.scrollHeight,
      { pathname } = w.location;
    // console.log(scrollTop, clientHeight, scrollHeight);
    const $inputSearch = d.getElementById("search-character");

    if (!loading && scrollTop + clientHeight >= scrollHeight - 50) {
      loading = true;

      if (pathname === "/search.html" && $inputSearch.value.length >= 1) {
        apiURL = `${api.CHARACTER_STARTS_WITH}${$inputSearch.value}&offset=${api.offset}&${api.API_KEY_COMPLETE}`;
        console.log("test");
      } else {
        return false;
      }

      $scroll.appendChild(Loader());
      //d.querySelector(".loader").style.display = "block";

      await ajax(
        {
          url: apiURL,
          cbSuccess: (characters) => {
            console.log(characters);
            let {
              data: { results },
              data: { count },
            } = characters;
            console.log(results);

            if (count === 0) {
              $scroll.removeChild(d.querySelector(".loader"));
              //d.querySelector(".loader").style.display = "none";
              return;
            }

            let html = "";
            results.forEach((character) => (html += SearchLink(character)));

            document
              .querySelector(".scroll")
              .insertAdjacentHTML("beforeend", html);
            $scroll.removeChild(d.querySelector(".loader"));
            //d.querySelector(".loader").style.display = "none";
            loading = false;
            api.offset += 20;
          },
        },
        ".scroll"
      );
      $inputSearch.oninput = (e) => {
        loading = false;
        api.offset = 20;
      };
    }
  });
}
