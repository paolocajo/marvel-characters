export async function ajax(props, errorTag) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.log(err);
      let message =
        err.statusText || "An error occurred while accessing the API";
      document.querySelector(
        `${errorTag}`
      ).innerHTML = `<div class="error"><p>Error ${err.status}: ${message}</p></div>`;

      //document.querySelector(".loader").style.display = "none";
    });
}
