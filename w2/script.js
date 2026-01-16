
document.addEventListener('DOMContentLoaded', () => {
    
    
    const menuBtn = document.getElementById('mobileMenuToggle');
    const menuNav = document.getElementById('mobileMenu');
    const accordionHeaders = document.querySelectorAll('.accordion-header');

  
    const closeMenu = () => {
        menuNav.classList.remove('active');
        menuBtn.classList.remove('active');
    };

    const toggleMenu = () => {
        menuNav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    };

  
    menuBtn.addEventListener('click', toggleMenu);


    const mobileLinks = menuNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        const isMenuOpen = menuNav.classList.contains('active');
        const clickInside = menuNav.contains(e.target) || menuBtn.contains(e.target);

        if (isMenuOpen && !clickInside) {
            closeMenu();
        }
    });


    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isAlreadyActive = currentItem.classList.contains('active');

        
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

        
            if (!isAlreadyActive) {
                currentItem.classList.add('active');
            }
        });
    });
});