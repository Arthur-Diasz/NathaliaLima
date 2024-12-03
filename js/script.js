document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: window.innerWidth < 768 ? 800 : 1000,
        easing: "ease-in-out",
        once: false,
    });
});
