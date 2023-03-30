const d = document,
  ls = localStorage;

const lightMode = () => {
  const $selectorsWithBg = d.querySelectorAll("[data-bg-dark]");
  const $selectorsWithColor = d.querySelectorAll("[data-color-dark]");
  // console.log("lightmode");
  // console.log($selectorsWithBg, $selectorsWithColor);
  $selectorsWithBg.forEach((el) =>
    el.classList.remove(`bg-${el.dataset.bgDark}`)
  );
  $selectorsWithColor.forEach((el) =>
    el.classList.remove(`color-${el.dataset.colorDark}`)
  );
  d.querySelector(".theme-btn").textContent = "🌙";
  ls.setItem("theme", "light");
};

const darkMode = () => {
  const $selectorsWithBg = d.querySelectorAll("[data-bg-dark]");
  const $selectorsWithColor = d.querySelectorAll("[data-color-dark]");
  // console.log("darkmode");
  // console.log($selectorsWithBg, $selectorsWithColor);
  $selectorsWithBg.forEach((el) => el.classList.add(`bg-${el.dataset.bgDark}`));
  $selectorsWithColor.forEach((el) =>
    el.classList.add(`color-${el.dataset.colorDark}`)
  );
  d.querySelector(".theme-btn").textContent = "☀️";
  ls.setItem("theme", "dark");
};
export const options = {
  lightMode,
  darkMode,
};
