document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const menuIcon = document.getElementById('menu-icon');
    const openIconSrc = 'images/menu-icon.svg'; // Ícone de menu
    const closeIconSrc = 'images/close-icon.svg'; // Ícone de fechar

    navToggle.addEventListener('click', () => {
        const isVisible = navMobile.style.display === 'block';
        navMobile.style.display = isVisible ? 'none' : 'block';
        menuIcon.src = isVisible ? openIconSrc : closeIconSrc;
    });
});