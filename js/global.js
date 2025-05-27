window.onload = function () {
    const menuIcon = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');

    if (menuIcon && sidebar) {
        menuIcon.onclick = function () {
            sidebar.classList.toggle('sidebar-show');
        };
    } else {
        console.error("menuIcon or sidebar not found in DOM");
    }
};


window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("gSearch");
    const gSection = document.getElementById("gsection");
    const noResultsMessage = document.getElementById("noResultsMessage");

    // Search logic
    const handleSearch = () => {
      const folderElements = gSection.querySelectorAll(".widget");
      const searchTerm = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      folderElements.forEach(folder => {
        const folderName = folder.textContent.toLowerCase();
        const isMatch = folderName.includes(searchTerm);
        folder.style.display = isMatch ? "" : "none";
        if (isMatch) visibleCount++;
      });

      noResultsMessage.style.display = (visibleCount === 0 && searchTerm !== "") ? "block" : "none";
    };

    // Observe dynamic buttons
    const observer = new MutationObserver(handleSearch);
    observer.observe(gamesSection, { childList: true, subtree: true });

    // Initial search setup
    searchInput.addEventListener("input", handleSearch);
  });
