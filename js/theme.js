const defaultTheme = "dark"; // or "light". should be either of two
const localStorageThemeKey = "yu-tai-chen-theme";

const themeBtn = document.querySelector("#theme-btn");
const sunIcon = themeBtn?.querySelector(".sun-icon");
const moonIcon = themeBtn?.querySelector(".moon-icon");

let theme = defaultTheme;

const toggleTheme = () => {
  // remove the currently active theme and the relevant icon
  document && document.body.classList.remove(`theme--${theme}`);
  const themeToSet = theme === "light" ? "dark" : "light";

  // add the new theme
  document && document.body.classList.add(`theme--${themeToSet}`);

  // save to local storage, or cookie if you want
  localStorage && localStorage.setItem(localStorageThemeKey, themeToSet);
  theme = themeToSet;
  updateIcon(theme);
};

const updateIcon = (activeTheme) => {
  if (activeTheme === "light") {
    moonIcon.classList.add("active");
    moonIcon.classList.remove("hidden");

    sunIcon.classList.add("hidden");
    sunIcon.classList.remove("active");
  } else {
    sunIcon.classList.add("active");
    sunIcon.classList.remove("hidden");

    moonIcon.classList.add("hidden");
    moonIcon.classList.remove("active");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  // fetch saved theme (if any) setting on page load
  theme = localStorage.getItem(localStorageThemeKey) || defaultTheme;
  document && document.body.classList.add(`theme--${theme}`);

  updateIcon(theme);
});

themeBtn.addEventListener("click", toggleTheme);
