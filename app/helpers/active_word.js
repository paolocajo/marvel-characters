export function activeWord() {
  let { hash, pathname } = location;

  if (
    (pathname === "/marvel-characters/index.html" ||
      pathname === "/marvel-characters/") &&
    hash.length === 2
  ) {
    let wordURL = hash.slice(1);
    let $words = document.querySelectorAll(".words a[href]");
    document.querySelector(`.words a[href]`).classList.remove("active-word");
    $words.forEach((word) => {
      // console.log(word.hash);
      if (wordURL === word.hash.slice(1)) {
        document
          .querySelector(`.words a[href="#${wordURL}"]`)
          .classList.add("active-word");
      }
    });
  }
}
