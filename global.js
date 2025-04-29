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
