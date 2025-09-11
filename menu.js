document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMobile = document.querySelector('.nav-mobile');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isVisible = navMobile.style.display === 'block';
            navMobile.style.display = isVisible ? 'none' : 'block';
        });
    }
});