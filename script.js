const navSlide = () => {
    const navBar = document.querySelector('.navBar');
    const navMenu = document.querySelector('.navMenu');
    const menuLinks = document.querySelectorAll('.navMenu li');

    navBar.addEventListener('click', () => {
        //toggle mobile nav
        navMenu.classList.toggle('navMenu-active');
        
        //animate mobile menu 
        
        menuLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navMenuFade 0.5s ease forwards ${index / 7 + .8}s`;
            }
        });

        //animate mobile-nav 
        navBar.classList.toggle('navBarToggle');
    });
}

navSlide();