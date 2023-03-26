import api from "./marvel_api.js";
import { Card } from "../components/Card.js";
import { ajax } from "./ajax.js";

let loading = false;

export async function InfiniteScroll() {
  const d = document,
    w = window;

  let apiURL, Component;

  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash, pathname } = w.location;

    if (!loading && scrollTop + clientHeight >= scrollHeight - 50) {
      loading = true;

      if (pathname === "/index.html" || pathname === "/") {
        Component = Card;
        if (hash < 2) apiURL = `${api.CHARACTERS}&offset=${api.offset}`;
        if (hash.length === 2)
          apiURL = `${api.CHARACTER_STARTS_WITH}${hash.slice(1)}&offset=${
            api.offset
          }&${api.API_KEY_COMPLETE}`;
      } else if (pathname === "/search.html") {
        //
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
}
