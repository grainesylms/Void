const themes = {
  starfall: "resources/backgrounds/starfall.gif",
  
};

document.addEventListener("DOMContentLoaded", () => {
  const selectedTheme = getCookie("theme") || "starfall";
  const baseColor = getCookie("base-color") || "#6e6e6e";
  const darkerColor = getCookie("darker-color") || "#5c5c5c";
  const lighterColor = getCookie("lighter-color") || "#7f7f7f";
  const highlightColor = getCookie("highlight-color") || "#a3a3a3";
  const shadowColor = getCookie("shadow-color") || "#4b4b4b";
  const textColor = getCookie("text-color") || "#ffffff";
  const backgroundColor = getCookie("background-color") || "#1e1e1e";

  document.querySelector(
    ".background"
  ).style.backgroundImage = `url(${themes[selectedTheme]})`;
  document.getElementById("theme-select").value = selectedTheme;

  updateColor("--base-color", baseColor);
  updateColor("--darker-color", darkerColor);
  updateColor("--lighter-color", lighterColor);
  updateColor("--highlight-color", highlightColor);
  updateColor("--shadow-color", shadowColor);
  updateColor("--text-color", textColor);
  updateColor("--background-color", backgroundColor);

  document.getElementById("base-color-picker").value = baseColor;
  document.getElementById("darker-color-picker").value = darkerColor;
  document.getElementById("lighter-color-picker").value = lighterColor;
  document.getElementById("highlight-color-picker").value = highlightColor;
  document.getElementById("shadow-color-picker").value = shadowColor;
  document.getElementById("text-color-picker").value = textColor;
  document.getElementById("background-color-picker").value = backgroundColor;
});

function changeTheme() {
  const selectedTheme = document.getElementById("theme-select").value;
  document.querySelector(
    ".background"
  ).style.backgroundImage = `url(${themes[selectedTheme]})`;
  setCookie("theme", selectedTheme, 365);
}

function launchGame() {
  const version = document.getElementById("version-home").value;
  window.location.href = `versions/${version}`;
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function updateColor(variable, color) {
  document.documentElement.style.setProperty(variable, color);
}
