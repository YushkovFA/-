(() => {
    "use strict";
    let documentBody = document.documentElement;
    function menuOpen() {
        documentBody.classList.toggle("lock");
        documentBody.classList.toggle("menu-open");
    }
    function menuClose() {
        documentBody.classList.remove("menu-open");
        documentBody.classList.remove("lock");
    }
    document.addEventListener("click", (function(e) {
        const targetElement = e.target;
        if (targetElement.closest(".burger-menu")) menuOpen();
        if (documentBody.classList.contains("menu-open") && !targetElement.closest(".menu__inner") && !targetElement.closest(".burger-menu")) menuClose();
    }));
})();