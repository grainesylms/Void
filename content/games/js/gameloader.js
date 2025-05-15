function loadGames(txtPath, folderPath) {
  fetch(txtPath)
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
          <button class="play-button" onclick="window.location.href = '${folderPath}/${gamePath}'">Play</button>
        `.trim();

        section.appendChild(widget);
      });
    })
    .catch((error) => {
      console.error(`Error loading games from ${txtPath}:`, error);
    });
}

// Make sure the paths are absolute starting from the root
loadGames("void/html5v2.txt", "void/HTML-Games-V2");
loadGames("/webbite-games.txt", "/webbite-games");
