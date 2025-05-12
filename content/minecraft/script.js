

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
