document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const menuIcon = document.getElementById('menu-icon');
    
    // Substitua 'images/menu-icon.svg' e 'images/close-icon.svg' pelos caminhos corretos se forem diferentes
    const openIconSrc = 'images/menu-icon.svg'; // Ícone de menu
    const closeIconSrc = 'images/close-icon.svg'; // Ícone de fechar

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isVisible = navMobile.style.display === 'block';
            navMobile.style.display = isVisible ? 'none' : 'block';
            
            // Troca a imagem do ícone
            if (menuIcon) {
                menuIcon.src = isVisible ? openIconSrc : closeIconSrc;
            }
        });
    }
});