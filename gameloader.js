fetch("/html5v2.txt")
  .then((response) => response.text())
  .then((text) => {
    const games = text
      .trim()
      .split("\n")
      .map((game) => game.trim());
    const section = document.getElementById("games-section");

    games.forEach((gamePath) => {
      const gameName = gamePath
        .replace(/^\.\/|\.html?$/gi, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const widget = document.createElement("div");
      widget.className = "widget animate";
      widget.innerHTML = `
        <h3>${gameName}</h3>
        <br />
        <button class="play-button" onclick="window.open('/HTML-Games-V2/${gamePath}', '_blank')">Play</button>
      `.trim();

      section.appendChild(widget);
    });
  })
  .catch((error) => {
    console.error("Error loading games:", error);
  });
fetch("/webbite-games.txt")
  .then((response) => response.text())
  .then((text) => {
    const games = text
      .trim()
      .split("\n")
      .map((game) => game.trim());
    const section = document.getElementById("games-section");

    games.forEach((gamePath) => {
      const gameName = gamePath
        .replace(/^\.\/|\.html?$/gi, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const widget = document.createElement("div");
      widget.className = "widget animate";
      widget.innerHTML = `
        <h3>${gameName}</h3>
        <br />
        <button class="play-button" onclick="window.open('/webbite-games/${gamePath}', '_blank')">Play</button>
      `.trim();

      section.appendChild(widget);
    });
  })
  .catch((error) => {
    console.error("Error loading games:", error);
  });
