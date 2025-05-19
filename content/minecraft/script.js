const state = {
  selectedVersion: null,
  versions: [],
};

const navigate = {
  home: {
    game: function () {
      if (location.pathname !== "/content/minecraft/") {
        location.href = "/content/minecraft/";
      }
    },
    clients: function () {
      location.href = "/content/minecraft/clients";
      if (location.pathname !== "/content/minecraft/clients") {
        location.href = "/content/minecraft/clients";
      }
    },
  },
};

const versionSelector = {
  toggle: function () {
    const options = document.querySelector(".installations .options");
    const display = options.style.display;
    options.style.display = display === "block" ? "none" : "block";

    if (options.style.display === "block") {
      setTimeout(() => {
        document.addEventListener("click", this.closeOnClickOutside);
      }, 0);
    } else {
      document.removeEventListener("click", this.closeOnClickOutside);
    }
  },

  closeOnClickOutside: function (event) {
    const selector = document.querySelector(".installations .selector");
    const options = document.querySelector(".installations .options");

    if (!selector.contains(event.target) && !options.contains(event.target)) {
      options.style.display = "none";
      document.removeEventListener(
        "click",
        versionSelector.closeOnClickOutside
      );
    }
  },

  selectVersion: function (version) {
    state.selectedVersion = version;
    document.querySelector(".installations .selector").textContent =
      version.name + (version.label ? ` (${version.label})` : "");
    this.toggle();

    const playButton = document.querySelector(".installations button");
    playButton.disabled = !state.selectedVersion;
    playButton.style.opacity = state.selectedVersion ? "1" : "0.5";
  },

  loadVersions: function (versions) {
    state.versions = versions;
    const optionsContainer = document.querySelector(".installations .options");
    optionsContainer.innerHTML = "";

    versions.forEach((version) => {
      const option = document.createElement("div");
      option.className = "option";

      const iconImg = document.createElement("img");
      iconImg.src = version.icon;
      iconImg.alt = version.name;

      const nameSpan = document.createElement("span");
      nameSpan.textContent =
        version.name + (version.label ? ` (${version.label})` : "");

      option.appendChild(iconImg);
      option.appendChild(nameSpan);
      option.addEventListener("click", () =>
        versionSelector.selectVersion(version)
      );

      optionsContainer.appendChild(option);
    });
  },
};

const game = {
  play: function () {
    if (!state.selectedVersion) {
      alert("Please select a version first!");
      return;
    }
    window.open(
      "versions/" +
        state.selectedVersion.label +
        "/" +
        state.selectedVersion.name,
      "_blank"
    );
    const playButton = document.querySelector(".play-button");
    playButton.textContent = "STARTING...";
    setTimeout(() => {
      playButton.textContent = "PLAY";
    }, 2000);
  },
};

document.addEventListener("DOMContentLoaded", function () {
  navigate.home.game();

  const playButton = document.querySelector(".play-button");
  playButton.style.opacity = state.selectedVersion ? "1" : "0.7";

  const versionsData = [
    { name: "1.12", label: "WASM", icon: "resources/icons/basicWasm.png" },
    { name: "1.8.8", label: "WASM", icon: "resources/icons/basicWasm.png" },

    { name: "0.3", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "1.5.2", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "1.8.8", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "1.12", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "a1.2.6", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "b1.3", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "b1.7.3", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "classic", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "indev", label: "JS", icon: "resources/icons/basicJS.webp" },
    { name: "infdev", label: "JS", icon: "resources/icons/basicJS.webp" },
  ];

  versionSelector.loadVersions(versionsData);

  document
    .querySelector(".installations .options")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
});
