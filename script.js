window.addEventListener('DOMContentLoaded', () => {
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
    });
});